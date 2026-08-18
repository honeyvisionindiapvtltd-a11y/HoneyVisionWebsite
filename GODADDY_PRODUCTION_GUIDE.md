# 🚀 GODADDY PRODUCTION DEPLOYMENT GUIDE

## Step 1: Configure Environment Variables on GoDaddy

Go to **GoDaddy Control Panel → Node.js Applications → Your App → Environment Variables**

Add these variables:

```
NODE_ENV              production
PORT                  3000
MONGODB_URI           mongodb+srv://USER:PASSWORD@cluster0.xxxxx.mongodb.net/honeyvision
JWT_SECRET            (generate with: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")
CLOUDINARY_CLOUD_NAME your-cloudinary-cloud
CLOUDINARY_API_KEY    your-cloudinary-key
CLOUDINARY_API_SECRET your-cloudinary-secret
FRONTEND_URL          https://honeyvision.in
```

## Step 2: Verify GoDaddy Settings

- **Repository:** `https://github.com/honeyvisionindiapvtltd-a11y/HoneyVisionWebsite`
- **Branch:** `upload-from-local`
- **Runtime:** Node.js 22
- **Build Command:** `npm run build:godaddy`
- **Start Command:** `npm start:godaddy`

## Step 3: Trigger Rebuild

Click **"Rebuild"** or **"Redeploy"** in GoDaddy control panel.

Monitor the build in **Runtime Logs**.

## Step 4: Verify Production Deployment

Once build completes:

✅ Visit **https://honeyvision.in** - should load frontend
✅ Check **Network tab** - API calls should go to `/api/*`
✅ Test login - should connect to MongoDB
✅ Upload image - should work via Cloudinary
✅ Check **Runtime Logs** - should show "✅ MongoDB connected successfully"

## Troubleshooting

### Build fails with "Git operation failed"
- Click **"View Details"** or **"Runtime Logs"** to see exact error
- Try clicking **"Rebuild"** again (sometimes temporary)
- Verify branch name is exactly `upload-from-local`

### App crashes at startup
- Check **Runtime Logs** for MongoDB connection error
- Verify `MONGODB_URI` is correct in Environment Variables
- Verify MongoDB Atlas IP whitelist includes GoDaddy's IP range (usually 0.0.0.0/0 or get from error)

### Frontend not serving / 404 error
- Verify `frontend/dist/index.html` exists locally: `ls frontend/dist/`
- Run local build: `npm run build`
- Verify build completed successfully
- Push changes: `git add -A && git commit -m "rebuild" && git push origin upload-from-local`

### API calls not working
- Open browser DevTools → Network tab
- Check request URL - should be `/api/products` (not `http://localhost:5000/api/products`)
- Check response - should return data or proper error
- Check **Runtime Logs** for error messages

### MongoDB not connecting
- Copy `MONGODB_URI` from MongoDB Atlas
- Format: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/honeyvision`
- In MongoDB Atlas → Network Access → Allow All IPs (0.0.0.0/0) for testing, then restrict to GoDaddy's IP
- Retry build after fixing env var

## Architecture Summary

```
godaddy-server.js (Entry point, port 3000)
    ↓
backend/src/app.js (Express app with API routes)
    ├── /api/auth       (JWT authentication)
    ├── /api/products   (Product data)
    ├── /api/contact    (Contact form)
    ├── /api/demo-requests (Demo booking)
    ├── /api/cms        (CMS content)
    └── /* (SPA fallback to frontend/dist/index.html)
    ↓
MongoDB Atlas (Database)
Cloudinary (Image storage)
```

## File Structure Required

```
✅ godaddy-server.js        (Entry point)
✅ package.json             (Build & start scripts)
✅ backend/                 (API server code)
✅ frontend/dist/           (Compiled React app - MUST EXIST AFTER BUILD)
✅ .env variables           (Set in GoDaddy control panel)
```
