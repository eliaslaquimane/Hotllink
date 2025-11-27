# Render Deployment Troubleshooting Guide

## ✅ Step-by-Step: Create Web Service on Render (Step 2)

### Before You Start
1. Ensure your code is pushed to GitHub
2. Have your MongoDB Atlas connection string ready

### Configuration Settings

When creating the web service on Render, use these **EXACT** settings:

#### Basic Settings
- **Name**: `hotllink-backend`
- **Region**: Select nearest region (e.g., Oregon, Frankfurt)
- **Branch**: `main`
- **Root Directory**: `backend-hotllink` ⚠️ **CRITICAL - Don't miss this!**

#### Build & Deploy
- **Runtime**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `npm start`

#### Environment Variables (Add in Advanced section)

Click **Advanced** and add these environment variables:

| Key | Value | Notes |
|-----|-------|-------|
| `NODE_ENV` | `production` | Required |
| `MONGO_URI` | See below ⬇️ | Your MongoDB Atlas connection string |
| `PORT` | `5000` | Default port |
| `FRONTEND_URL` | `http://localhost:5173` | Update after deploying frontend |

#### MongoDB URI Format ⚠️
Your MongoDB URI should look like this:
```
mongodb+srv://laquimane:ELIAS123@hotllink-cluster.on0c0uy.mongodb.net/hotllink_db?retryWrites=true&w=majority&appName=hotllink-cluster
```

**Key parts:**
- `laquimane` = your MongoDB username
- `ELIAS123` = your MongoDB password
- `hotllink-cluster.on0c0uy.mongodb.net` = your cluster address
- `/hotllink_db` = **database name (REQUIRED!)**
- Rest = connection parameters

---

## 🚨 Common Errors & Solutions

### Error: "Failed to find a valid digest in the 'integrity' attribute"
**Cause**: Build cache corruption

**Solution**:
1. In Render → **Settings** → Scroll to bottom
2. Click "Clear build cache & deploy"

### Error: "Cannot find module './src/app'"
**Cause**: Incorrect root directory

**Solution**:
1. In Render → **Settings** → **Build & Deploy**
2. Set **Root Directory** to `backend-hotllink`
3. Save and redeploy

### Error: "MongooseServerSelectionError: Could not connect"
**Cause**: MongoDB connection string issues

**Solution 1**: Check IP Whitelist
1. Go to MongoDB Atlas → Network Access
2. Ensure `0.0.0.0/0` (Allow from anywhere) is added
3. Wait 2-3 minutes for changes to propagate

**Solution 2**: Fix Connection String
- Ensure password doesn't have special characters (or URL-encode them)
- Include database name: `/hotllink_db` after `.mongodb.net`
- Use `retryWrites=true&w=majority`

### Error: "Port already in use"
**Cause**: PORT environment variable not set

**Solution**:
1. Add environment variable: `PORT` = `5000`
2. Redeploy

### Error: "Repository not found"
**Cause**: Render can't access your GitHub repo

**Solution**:
1. In Render → Account Settings → GitHub
2. Click "Connect GitHub Account"
3. Authorize Render to access your repositories
4. Try creating web service again

### Error: "failed to read dockerfile: ... is a directory"
**Cause**: Render trying to use directory as Dockerfile, or Dockerfile has incorrect paths

**Solution**:
1. Ensure `render.yaml` has `dockerfilePath: ./Dockerfile` specified
2. If using `rootDir`, ensure Dockerfile COPY commands use relative paths (e.g., `COPY package*.json ./` not `COPY backend-hotllink/package*.json ./`)
3. Commit and push changes
4. Redeploy on Render

---

## 🧪 Verification Steps

After successful deployment:

### 1. Check Logs
- Render Dashboard → Your Service → **Logs** tab
- Look for: `"Server running on http://localhost:5000"`
- Look for: `"MongoDB Connected"`

### 2. Test Health Endpoint
Visit: `https://hotllink-backend.onrender.com`

**Expected response:**
```json
{
  "status": "ok",
  "message": "HotlLink API is running"
}
```

### 3. Test API Endpoint
Visit: `https://hotllink-backend.onrender.com/api/hotels`

**Expected**: JSON array of hotels (might be empty until you seed the database)

---

## 📝 Pre-Deployment Checklist

Before creating web service on Render:

- [ ] Code pushed to GitHub (`git push origin main`)
- [ ] MongoDB Atlas cluster created
- [ ] MongoDB user created with password
- [ ] Network Access set to `0.0.0.0/0`
- [ ] MongoDB URI connection string copied
- [ ] Root directory is `backend-hotllink` ✅

---

## 🔄 If All Else Fails: Start Fresh

If you continue to have errors:

1. **Delete the Web Service** in Render
2. Wait 1 minute
3. **Create New Web Service** with settings above
4. **Double-check** every configuration setting
5. Pay special attention to:
   - Root Directory: `backend-hotllink`
   - MongoDB URI includes database name
   - Build/Start commands are correct

---

## 💡 Pro Tips

1. **Free Tier Sleep**: Render free tier sleeps after 15 minutes. First request after sleep takes 30-60 seconds. This is normal!

2. **Environment Variable Updates**: When you update environment variables, Render automatically redeploys. Wait for redeploy to complete.

3. **Logs are Your Friend**: Always check logs first when troubleshooting. Most errors are clearly shown there.

4. **MongoDB Atlas Delays**: After changing Network Access in MongoDB Atlas, wait 2-3 minutes before testing.

---

## 📞 Still Having Issues?

If you're still stuck, check these:

1. **Render Status**: https://status.render.com
2. **MongoDB Atlas Status**: https://status.cloud.mongodb.com
3. **Render Community**: https://community.render.com

**Share these details when asking for help:**
- Error message from Render logs
- Root directory setting
- Build/Start commands
- MongoDB Atlas network access configuration
