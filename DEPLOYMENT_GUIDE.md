# HoneyVision Production Deployment Guide

## Final Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     https://honeyvision.in                       │
│                    (GoDaddy Frontend Hosting)                    │
│                    React + Vite SPA Application                  │
└──────────────────────────┬──────────────────────────────────────┘
                           │ HTTPS API Requests
                           ▼
┌──────────────────────────────────────────────────────────────────┐
│         https://honeyvisionwebsite.onrender.com                  │
│              (Render Backend - Node.js/Express)                  │
│                                                                   │
│  ✓ API Endpoints: /api/auth, /api/products, /api/admin, etc     │
│  ✓ CORS: Configured for https://honeyvision.in                  │
│  ✓ Health Check: GET /api/health                                │
└──────────────────────────┬──────────────────────────────────────┘
                           │ MongoDB Atlas TLS Connection
                           ▼
┌──────────────────────────────────────────────────────────────────┐
│                  MongoDB Atlas (Production DB)                   │
│           mongodb+srv://cluster0.08cct4e.mongodb.net             │
│                        Database: honey_vision                    │
└──────────────────────────────────────────────────────────────────┘
```

---

## Removed Old References

The following obsolete URLs have been completely removed from the codebase:

- ❌ `jbngfatete.preview.c39.airoapp.ai` (Airo preview)
- ❌ `jbngfatete.c39.airoapp.ai` (Airo production)
- ❌ `honeyvision-backend.onrender.com` (old Render backend)
- ❌ `honeyvision-frontend.onrender.com` (old Render frontend)

**Verification:**
- ✅ Frontend build contains ZERO Airo references
- ✅ Frontend build contains ZERO old Render URLs  
- ✅ Backend CORS only allows honeyvision.in (and localhost for dev)
- ✅ Render configuration updated to backend-only deployment

---

## Frontend Deployment (GoDaddy)

### Step 1: Build the Frontend

```bash
cd frontend
npm install
npm run build
```

This generates the production build in `frontend/dist/`

### Step 2: Prepare Deployment Files

After building, copy these files to GoDaddy:

```
frontend/dist/                    → Upload to GoDaddy root or public_html/
frontend/dist/.htaccess           → Required for SPA routing
frontend/dist/index.html          → Main entry point
frontend/dist/assets/             → All optimized assets
```

### Step 3: Upload to GoDaddy

1. Connect to GoDaddy via:
   - **File Manager** (easiest)
   - **FTP/SFTP** client
   - **cPanel File Manager**

2. **Destination folder:** 
   - Typically `public_html/` or your domain's root
   - Depends on your GoDaddy hosting setup

3. **Upload contents of `frontend/dist/`:**
   - Upload the ENTIRE contents of dist/ folder
   - DO NOT upload the dist/ folder itself

4. **Ensure .htaccess is uploaded:**
   - Required for React Router SPA routing
   - Allows `/login`, `/register`, `/products`, etc. to work
   - Must be in the same directory as index.html

### Step 4: Verify GoDaddy Deployment

1. Open browser to `https://honeyvision.in`
2. You should see the HoneyVision homepage
3. Open DevTools → Network tab
4. Click Login button
5. Verify the API request goes to: `https://honeyvisionwebsite.onrender.com/api/auth/login`
6. NOT to GoDaddy's /api path

---

## Backend Deployment (Render)

### Step 1: Connect Repository to Render

1. Log in to [Render Dashboard](https://dashboard.render.com)
2. Create new **Web Service**
3. Connect your GitHub repository (honeyvision backend)
4. Select the repository

### Step 2: Configure Render Deployment

**Service Name:** `honeyvision-backend`

**Build Settings:**
- **Environment:** Node.js
- **Build Command:** `npm install`
- **Start Command:** `node src/server.js`
- **Root Directory:** `backend`

**Environment Variables:**

Add these in Render dashboard → Environment:

```
NODE_ENV=production
PORT=10000
FRONTEND_URL=https://honeyvision.in
CORS_ORIGIN=https://honeyvision.in
JWT_SECRET=<generate-strong-random-secret>
MONGODB_URI=<your-mongodb-atlas-connection-string>
EMAIL_FROM=no-reply@honeyvision.in
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=<your-smtp-email>
SMTP_PASS=<your-smtp-password>
CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
ADMIN_EMAIL=<admin-email>
ADMIN_PASSWORD=<secure-admin-password>
ADMIN_FULLNAME=Admin User
ADMIN_PHONE=<phone>
ADMIN_COMPANY=Honey Vision
ADMIN_ROLE=admin
```

### Step 3: Deploy

1. Click **Deploy**
2. Render will build and start the backend
3. Verify deployment by visiting: `https://honeyvisionwebsite.onrender.com/api/health`

Expected response:
```json
{
  "status": "ok",
  "success": true,
  "service": "HoneyVision API",
  "database": "connected",
  "environment": "production",
  "timestamp": "2026-08-17T..."
}
```

---

## MongoDB Configuration (Atlas)

### Connection Details

**Cluster:** `cluster0`
**Host:** `cluster0.08cct4e.mongodb.net`
**Database:** `honey_vision`
**Port:** 27017 (MongoDB default)

### Connection String Format

```
mongodb+srv://username:password@cluster0.08cct4e.mongodb.net/honey_vision
```

### Important Notes

- ✅ **Only Render backend** connects to MongoDB
- ❌ **GoDaddy frontend** does NOT connect to MongoDB
- ❌ **Browser** does NOT connect to MongoDB
- ✅ Connection uses **MongoDB Atlas SRV** (automatic failover)
- ✅ Connection uses **TLS encryption**

### Update MongoDB Network Access

1. Log in to MongoDB Atlas: https://cloud.mongodb.com
2. Go to **Network Access** (Security tab)
3. Add Render's IP range:
   - Click "Add IP Address"
   - Enter: `0.0.0.0/0` (allows all IPs from Render)
   - Or: Get Render's static IP if using Pro plan
4. Click **Confirm**

---

## Environment Files Reference

### Backend Environment (Render)

**File:** `backend/.env` (local development only)

```
PORT=5000
NODE_ENV=production
MONGODB_URI=mongodb+srv://...
JWT_SECRET=...
JWT_EXPIRES_IN=7d
FRONTEND_URL=https://honeyvision.in
CORS_ORIGIN=https://honeyvision.in
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=...
SMTP_PASS=...
SMTP_SECURE=false
EMAIL_FROM=no-reply@honeyvision.in
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=...
ADMIN_FULLNAME=Admin User
ADMIN_PHONE=...
ADMIN_COMPANY=Honey Vision
ADMIN_ROLE=admin
```

### Frontend Environment (GoDaddy)

**File:** `frontend/.env.production`

```
VITE_API_URL=https://honeyvisionwebsite.onrender.com/api
```

**Note:** This is NOT deployed to GoDaddy. It's used during the build process to embed the API URL into the frontend code.

---

## CORS Configuration

### Production Origins Allowed

- ✅ `https://honeyvision.in` (main domain)
- ✅ `https://www.honeyvision.in` (www subdomain)

### Development Origins Allowed (locally only)

- ✅ `http://localhost:5173` (Vite dev server)
- ✅ `http://localhost:3000` (alternative dev port)
- ✅ `http://127.0.0.1:5173`
- ✅ `http://127.0.0.1:3000`

### Configuration Method

CORS is configured in `backend/src/app.js` and can be overridden with environment variables:

```bash
CORS_ORIGIN=https://honeyvision.in
```

---

## API Endpoints Reference

### Health Check

```
GET https://honeyvisionwebsite.onrender.com/api/health
```

Response (when database connected):
```json
{
  "status": "ok",
  "success": true,
  "service": "HoneyVision API",
  "database": "connected",
  "environment": "production"
}
```

### Authentication

```
POST /api/auth/login
POST /api/auth/register
GET /api/auth/me
PUT /api/auth/profile
PUT /api/auth/change-password
POST /api/auth/forgot-password
POST /api/auth/reset-password
```

### Products

```
GET /api/products
GET /api/products/:id
```

### Admin

```
GET /api/admin/users
POST /api/admin/users
PUT /api/admin/users/:id
DELETE /api/admin/users/:id
```

---

## Testing Checklist

### Before Going Live

- [ ] Frontend builds without errors
- [ ] No Airo URLs in production build
- [ ] No old backend URLs in production build
- [ ] GoDaddy frontend loads at https://honeyvision.in
- [ ] GoDaddy frontend routes work (/login, /register, /products)
- [ ] Render backend starts successfully
- [ ] MongoDB connects from Render
- [ ] Health endpoint returns success: `GET /api/health`
- [ ] CORS preflight works for /api endpoints
- [ ] Login request from frontend reaches Render backend
- [ ] Products list loads correctly
- [ ] Admin dashboard accessible
- [ ] File uploads to Cloudinary work
- [ ] Email sending works

### After Live Deployment

1. **Test Frontend:**
   ```bash
   # Open browser DevTools → Network tab
   https://honeyvision.in
   https://honeyvision.in/login
   https://honeyvision.in/register
   https://honeyvision.in/products
   ```

2. **Verify API Requests:**
   - All XHR requests should go to `https://honeyvisionwebsite.onrender.com/api/*`
   - NOT to `https://honeyvision.in/api/*` (unless proxied)
   - NOT to any Airo domain

3. **Test Authentication:**
   ```bash
   curl -X POST https://honeyvisionwebsite.onrender.com/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{"email":"test@example.com","password":"password"}'
   ```

4. **Test Health Endpoint:**
   ```bash
   curl https://honeyvisionwebsite.onrender.com/api/health
   ```

5. **Check Render Logs:**
   - Render Dashboard → Service → Logs
   - Verify no connection errors
   - Verify MongoDB connected message

---

## Troubleshooting

### Issue: Frontend shows "API request failed"

**Solution:**
1. Check CORS configuration in Render
2. Verify `CORS_ORIGIN` environment variable is set
3. Check Render logs for CORS errors
4. Ensure OPTIONS preflight requests are allowed

### Issue: Login returns 503

**Solution:**
1. Check if MongoDB is connected: `GET /api/health`
2. Verify `MONGODB_URI` is set in Render environment
3. Check Render logs for MongoDB connection errors
4. Verify MongoDB Atlas network access includes Render

### Issue: /login route returns 404

**Solution:**
1. Ensure .htaccess is uploaded to GoDaddy
2. Verify mod_rewrite is enabled on GoDaddy
3. Check that .htaccess is in the same directory as index.html
4. Clear browser cache and reload

### Issue: GoDaddy frontend won't load

**Solution:**
1. Verify all files from frontend/dist/ were uploaded
2. Check GoDaddy file permissions (should be 644 for files, 755 for folders)
3. Verify index.html is in the root directory
4. Check GoDaddy support for Node.js/Vite compatibility

### Issue: Render build fails

**Solution:**
1. Check build log in Render dashboard
2. Verify `npm install` succeeds
3. Ensure `backend/src/server.js` exists
4. Verify no syntax errors in code
5. Check that all required environment variables are set

---

## File Structure Summary

### Production Build Output (GoDaddy)

```
public_html/ (or domain root)
├── index.html                 (React entry point)
├── .htaccess                  (SPA routing rules)
├── assets/
│   ├── index-[hash].js       (React app bundle)
│   ├── index-[hash].css      (Styles)
│   ├── [icon-name].js        (Lucide icons)
│   └── [bg-image].jpg        (Background images)
└── public/                    (Static assets)
```

### Render Backend Structure

```
backend/
├── src/
│   ├── server.js             (Entry point)
│   ├── app.js                (Express setup)
│   ├── config/
│   │   └── db.js             (MongoDB connection)
│   ├── routes/               (API endpoints)
│   ├── models/               (Mongoose schemas)
│   ├── controllers/          (Business logic)
│   ├── middleware/           (CORS, auth, etc)
│   └── utils/                (Helpers, seed, etc)
├── .env.example              (Configuration template)
├── package.json
└── Procfile                  (Optional for Render)
```

---

## Security Notes

### Never Commit Secrets

Files in `.gitignore` to prevent accidental exposure:
```
.env
.env.*
!.env.example
backend/.env
frontend/.env
```

### Environment Variable Security

- ✅ MongoDB URI only in Render environment variables
- ✅ JWT_SECRET never in source code
- ✅ SMTP_PASS never in source code
- ✅ Cloudinary API Secret only in backend
- ✅ Frontend NEVER receives JWT_SECRET or database credentials

### Frontend Security

- ✅ No sensitive data in localStorage (only JWT token with expiration)
- ✅ No API keys exposed to browser
- ✅ Cloudinary secret operations server-side only
- ✅ CORS properly configured (not using *)

---

## Maintenance & Updates

### Deploying Code Changes

**Frontend Changes:**
```bash
cd frontend
npm run build
# Upload frontend/dist/ contents to GoDaddy
```

**Backend Changes:**
```bash
# Push to GitHub
# Render automatically rebuilds from latest commit
# (if auto-deploy is enabled)
```

### Updating Environment Variables

**On Render:**
1. Dashboard → Service → Environment
2. Update variable value
3. Click **Save**
4. Service will restart automatically

---

## Support & Resources

- **Render Docs:** https://render.com/docs
- **MongoDB Atlas:** https://cloud.mongodb.com
- **GoDaddy Support:** https://www.godaddy.com/help
- **Vite Docs:** https://vite.dev/
- **React Router:** https://reactrouter.com/
- **Express.js:** https://expressjs.com/

---

## Final Verification Commands

```bash
# Test health endpoint
curl https://honeyvisionwebsite.onrender.com/api/health

# Test CORS preflight
curl -X OPTIONS https://honeyvisionwebsite.onrender.com/api/auth/login \
  -H "Origin: https://honeyvision.in" \
  -H "Access-Control-Request-Method: POST" \
  -v

# Test login endpoint
curl -X POST https://honeyvisionwebsite.onrender.com/api/auth/login \
  -H "Content-Type: application/json" \
  -H "Origin: https://honeyvision.in" \
  -d '{"email":"test@example.com","password":"password"}'
```

---

## Deployment Status

### ✅ Completed

- [x] Removed all Airo references from backend CORS
- [x] Removed all Airo references from frontend build
- [x] Updated render.yaml for backend-only deployment
- [x] Created secure .env.example with no secrets
- [x] Verified MongoDB connection code uses SRV
- [x] Created .htaccess for GoDaddy SPA routing
- [x] Verified frontend environment files
- [x] Built frontend with correct API URL
- [x] Verified health endpoint configuration
- [x] Created comprehensive deployment documentation

### 🚀 Ready for Deployment

The project is now configured for production deployment to:
- **Frontend:** GoDaddy hosting (https://honeyvision.in)
- **Backend:** Render (https://honeyvisionwebsite.onrender.com)
- **Database:** MongoDB Atlas

Follow the steps in this guide to deploy successfully.

---

*Last Updated: August 17, 2026*
*Project: HoneyVision India Pvt. Ltd.*
