# HotlLink Deployment Guide

Complete guide for deploying the HotlLink hotel booking platform to production.

## 🌐 Architecture Overview

```mermaid
graph LR
    A[User Browser] -->|HTTPS| B[Vercel - Frontend]
    B -->|API Calls| C[Render - Backend]
    C -->|Database| D[MongoDB Atlas]
```

**Hosting Stack:**
- **Frontend**: Vercel (React/Vite app)
- **Backend**: Render (Node.js/Express API)
- **Database**: MongoDB Atlas (Cloud MongoDB)

---

## 📋 Prerequisites

Before deploying, ensure you have:
- [ ] GitHub account (for code repository)
- [ ] Vercel account (sign up at [vercel.com](https://vercel.com))
- [ ] Render account (sign up at [render.com](https://render.com))
- [ ] MongoDB Atlas account (sign up at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas))

---

## Part 1: Setup MongoDB Atlas

### Step 1: Create MongoDB Cluster

1. **Sign in** to [MongoDB Atlas](https://cloud.mongodb.com)
2. **Create a new project** called "HotlLink"
3. **Build a Database**:
   - Choose **M0 Free** tier
   - Provider: **AWS** (recommended)
   - Region: Choose nearest to your users
   - Cluster Name: `hotllink-cluster`

### Step 2: Configure Network Access

1. Go to **Network Access** (left sidebar)
2. Click **Add IP Address**
3. Select **Allow Access from Anywhere** (`0.0.0.0/0`)
   - This allows Render to connect
4. Click **Confirm**

### Step 3: Create Database User

1. Go to **Database Access** (left sidebar)
2. Click **Add New Database User**
3. Authentication Method: **Password**
   - Username: `hotllink_admin`
   - Password: Generate a secure password (save this!)
4. Database User Privileges: **Read and write to any database**
5. Click **Add User**

### Step 4: Get Connection String

1. Go to **Databases** → Click **Connect** on your cluster
2. Select **Connect your application**
3. Driver: **Node.js** version **4.1 or later**
4. Copy the connection string:
   ```
   mongodb+srv://hotllink_admin:<password>@hotllink-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. **Replace `<password>`** with your actual password
6. **Add database name** after `.net/`: 
   ```
   mongodb+srv://hotllink_admin:YourPassword@hotllink-cluster.xxxxx.mongodb.net/hotllink_db?retryWrites=true&w=majority
   ```

> [!IMPORTANT]
> Save this connection string securely - you'll need it for the backend deployment!

---

## Part 2: Deploy Backend to Render

### Step 1: Push Code to GitHub

If not already done:

```bash
cd f:\Programming\project\HotlLink
git add .
git commit -m "Add deployment configuration"
git push origin main
```

### Step 2: Create Web Service on Render

1. **Sign in** to [Render Dashboard](https://dashboard.render.com)
2. Click **New +** → **Web Service**
3. **Connect GitHub repository**:
   - Select your `HotlLink` repository
4. **Configure Service**:
   - **Name**: `hotllink-backend`
   - **Region**: Select nearest region
   - **Root Directory**: `backend-hotllink`
   - **Environment**: `Node`
   - **Branch**: `main`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

### Step 3: Add Environment Variables

In the **Environment** section, add:

| Key | Value |
|-----|-------|
| `NODE_ENV` | `production` |
| `MONGO_URI` | Your MongoDB Atlas connection string |
| `PORT` | `5000` |
| `FRONTEND_URL` | `https://your-app.vercel.app` (update after frontend deploy) |

> [!WARNING]
> You'll need to update `FRONTEND_URL` after deploying the frontend in Part 3.

### Step 4: Deploy

1. Click **Create Web Service**
2. Wait for deployment (3-5 minutes)
3. Your backend will be available at: `https://hotllink-backend.onrender.com`

### Step 5: Seed Database

After deployment, you need to seed the database with hotel data:

1. In Render dashboard, go to your service
2. Click **Shell** tab
3. Run:
   ```bash
   node seed.js
   ```

### Step 6: Test Backend

Visit `https://your-backend.onrender.com` - you should see:
```json
{
  "status": "ok",
  "message": "HotlLink API is running"
}
```

Test hotels endpoint: `https://your-backend.onrender.com/api/hotels`

---

## Part 3: Deploy Frontend to Vercel

### Step 1: Install Vercel CLI (Optional)

```bash
npm install -g vercel
```

Or deploy directly from Vercel dashboard (recommended for first deployment).

### Step 2: Deploy via Vercel Dashboard

1. **Sign in** to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **Add New...** → **Project**
3. **Import Git Repository**:
   - Select your `HotlLink` repository
4. **Configure Project**:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `HOTLLINK`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### Step 3: Add Environment Variable

In **Environment Variables** section, add:

| Name | Value | Environment |
|------|-------|-------------|
| `VITE_API_URL` | `https://your-backend.onrender.com/api` | Production |

> [!IMPORTANT]
> Replace `your-backend.onrender.com` with your actual Render backend URL!

### Step 4: Deploy

1. Click **Deploy**
2. Wait for build and deployment (2-3 minutes)
3. Your app will be available at: `https://hotllink-xxx.vercel.app`

### Step 5: Update Backend CORS

Now that you have your frontend URL, update the backend:

1. Go to Render dashboard → Your backend service
2. Navigate to **Environment** tab
3. Update `FRONTEND_URL` to your Vercel URL: `https://hotllink-xxx.vercel.app`
4. Save changes (this will trigger a redeploy)

---

## Part 4: Configure Custom Domain (Optional)

### For Frontend (Vercel)

1. In Vercel project settings → **Domains**
2. Add your custom domain (e.g., `hotllink.com`)
3. Follow DNS configuration instructions
4. Update backend `FRONTEND_URL` to use custom domain

### For Backend (Render)

1. In Render service settings → **Custom Domains**
2. Add custom domain (e.g., `api.hotllink.com`)
3. Configure DNS as instructed
4. Update frontend `VITE_API_URL` environment variable

---

## 🧪 Testing Your Deployment

### Test Checklist

- [ ] Visit your frontend URL - homepage loads
- [ ] Navigate to Hotels page - redirects to login
- [ ] Register a new account
- [ ] Login with credentials
- [ ] Browse hotels - data loads from backend
- [ ] Click "Ver Detalhes" on a hotel
- [ ] Click "Book Now" - booking page loads
- [ ] Complete a booking
- [ ] Check Dashboard - booking appears

---

## 🔧 Environment Variables Summary

### Backend (.env)
```env
NODE_ENV=production
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/hotllink_db?retryWrites=true&w=majority
PORT=5000
FRONTEND_URL=https://your-app.vercel.app
```

### Frontend (Vercel Environment Variables)
```env
VITE_API_URL=https://your-backend.onrender.com/api
```

---

## 📊 Monitoring and Logs

### Backend Logs (Render)
- Dashboard → Your Service → **Logs** tab
- View real-time logs and errors

### Frontend Logs (Vercel)
- Project → **Deployments** → Select deployment → **Runtime Logs**

### Database Metrics (MongoDB Atlas)
- Cluster → **Metrics** tab
- Monitor connections, operations, and performance

---

## 🚨 Troubleshooting

### Issue: CORS Errors

**Symptom**: Browser console shows CORS policy errors

**Solution**:
1. Verify `FRONTEND_URL` in Render matches your Vercel URL exactly
2. Check there's no trailing slash difference
3. Verify backend redeployed after updating environment variable

### Issue: API Requests Failing

**Symptom**: Frontend can't connect to backend

**Solution**:
1. Check `VITE_API_URL` in Vercel environment variables
2. Ensure backend is running: visit backend URL in browser
3. Check Render logs for backend errors

### Issue: MongoDB Connection Failed

**Symptom**: Backend logs show MongoDB connection errors

**Solution**:
1. Verify `MONGO_URI` connection string is correct
2. Ensure MongoDB Atlas allows connections from anywhere (`0.0.0.0/0`)
3. Check database user password is correct (no special characters in URL)
4. Verify database user has read/write permissions

### Issue: Hotels Not Loading

**Symptom**: Frontend shows empty hotels list

**Solution**:
1. Run database seed script: In Render Shell → `node seed.js`
2. Check MongoDB Atlas → Browse Collections → Verify data exists
3. Test backend API directly: `https://your-backend.onrender.com/api/hotels`

### Issue: Render Free Instance Sleeping

**Symptom**: First request after inactivity is very slow

**Solution**:
- Render free tier sleeps after 15 minutes of inactivity
- First request wakes it up (can take 30-60 seconds)
- Consider upgrading to paid plan for always-on instances
- Or use a service like [UptimeRobot](https://uptimerobot.com) to ping every 10 minutes

### Issue: Build Failures

**Backend Build Fails**:
- Check `package.json` is valid
- Verify all dependencies are listed
- Check Render logs for specific error

**Frontend Build Fails**:
- Ensure `VITE_API_URL` is set in environment variables
- Check for TypeScript errors: run `npm run build` locally
- Review Vercel build logs

---

## 🔄 Updating Your Deployment

### Automatic Deployments

Both Vercel and Render are configured for automatic deployments:

1. **Make Changes** to your code locally
2. **Commit and Push** to GitHub:
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin main
   ```
3. **Auto-Deploy**:
   - Vercel detects push → builds and deploys frontend
   - Render detects push → builds and deploys backend

### Manual Redeploy

**Vercel**: Dashboard → Deployments → **Redeploy**

**Render**: Dashboard → Service → **Manual Deploy** → **Deploy latest commit**

---

## 💰 Cost Estimate

### Free Tier Limits

| Service | Free Tier | Limits |
|---------|-----------|--------|
| **Vercel** | ✅ Free | 100 GB bandwidth/month, unlimited deployments |
| **Render** | ✅ Free | 750 hrs/month, sleeps after 15min inactivity |
| **MongoDB Atlas** | ✅ Free | 512 MB storage, M0 cluster |

> [!NOTE]
> All services offer free tiers sufficient for development and small production apps!

### Upgrading (When Needed)

- **Vercel Pro**: $20/month (custom domains, more bandwidth)
- **Render Starter**: $7/month (always-on, no sleep)
- **MongoDB M2**: $9/month (2GB storage, better performance)

---

## 🔐 Security Best Practices

- [ ] Use strong passwords for MongoDB users
- [ ] Never commit `.env` files to Git
- [ ] Rotate MongoDB credentials periodically
- [ ] Enable MongoDB Atlas IP whitelist in production
- [ ] Use HTTPS for all API calls (automatic with Vercel/Render)
- [ ] Implement rate limiting on API endpoints
- [ ] Add JWT authentication (future enhancement)

---

## 📞 Support and Resources

### Official Documentation

- [Render Docs](https://render.com/docs)
- [Vercel Docs](https://vercel.com/docs)
- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com)

### Community

- [Render Community](https://community.render.com)
- [Vercel Discord](https://vercel.com/discord)
- [MongoDB Community Forums](https://www.mongodb.com/community/forums)

---

## ✅ Deployment Checklist

- [ ] MongoDB Atlas cluster created and configured
- [ ] Database user created with connection string saved
- [ ] Backend deployed to Render with environment variables
- [ ] Database seeded with hotel data
- [ ] Backend health check passes
- [ ] Frontend deployed to Vercel with VITE_API_URL
- [ ] Backend FRONTEND_URL updated with Vercel URL
- [ ] End-to-end user flow tested
- [ ] Custom domains configured (optional)
- [ ] Monitoring and alerts set up

---

**🎉 Congratulations!** Your HotlLink application is now live in production!

Share your deployment:
- Frontend: `https://your-app.vercel.app`
- Backend API: `https://your-backend.onrender.com`

---

*Need help? Open an issue on GitHub or contact the development team.*
