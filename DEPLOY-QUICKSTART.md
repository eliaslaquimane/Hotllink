# HotlLink Deployment - Quick Reference

## 🚀 Quick Deploy Commands

### 1. Prepare for Deployment

```bash
# Ensure you're in the project root
cd f:\Programming\project\HotlLink

# Commit all changes
git add .
git commit -m "Prepare for deployment"
git push origin main
```

### 2. MongoDB Atlas Connection String Format

```
mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/hotllink_db?retryWrites=true&w=majority
```

**Replace:**
- `USERNAME` with your database user
- `PASSWORD` with your database password
- `CLUSTER` with your cluster address

---

## 📝 Environment Variables Cheat Sheet

### Backend (Render)

```
NODE_ENV=production
MONGO_URI=<your-mongodb-connection-string>
PORT=5000
FRONTEND_URL=<your-vercel-url>
```

### Frontend (Vercel)

```
VITE_API_URL=<your-render-backend-url>/api
```

---

## ✅ Post-Deployment Checklist

After deploying both backend and frontend:

1. **Seed Database** (in Render Shell):
   ```bash
   node seed.js
   ```

2. **Update CORS** (in Render Environment):
   - Set `FRONTEND_URL` to your Vercel URL

3. **Test API**:
   - Visit: `https://your-backend.onrender.com`
   - Should show: `{"status":"ok","message":"HotlLink API is running"}`

4. **Test Frontend**:
   - Visit your Vercel URL
   - Try: Register → Login → Browse Hotels → Book

---

## 🔗 Deployment URLs Template

Save these after deployment:

```
Frontend: https://______________.vercel.app
Backend:  https://______________.onrender.com
Database: mongodb+srv://______________.mongodb.net
```

---

## 🆘 Quick Troubleshooting

| Problem | Quick Fix |
|---------|-----------|
| CORS errors | Update `FRONTEND_URL` in Render |
| API not connecting | Check `VITE_API_URL` in Vercel |
| Empty hotels list | Run `node seed.js` in Render Shell |
| Slow first load | Render free tier sleeps (wait 30-60s) |

---

**📖 Full Guide**: See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.
