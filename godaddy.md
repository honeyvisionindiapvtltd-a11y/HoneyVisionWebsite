# GoDaddy deployment guide for HoneyVision

This project is structured as a frontend React app plus a backend Node/Express API.

## Recommended GoDaddy setup

### Option 1: Frontend on GoDaddy static hosting / cPanel
- Upload the contents of the generated `godaddy-deploy` folder to the public web root.
- Ensure your hosting is configured to serve `index.html` for unknown routes.
- Set the frontend environment variable `VITE_API_URL` to your production API URL.

### Option 2: Full-stack on a VPS / custom server
- Keep the backend in a Node environment on the server.
- Run the app with `npm install` inside `backend` and `node src/server.js`.
- Use a reverse proxy such as Nginx to route `/api` to the backend and all other requests to the frontend build.

## Production environment variables

Set these values in your backend environment:

- `PORT=5000`
- `MONGODB_URI=<your MongoDB Atlas URI>`
- `JWT_SECRET=<strong random secret>`
- `JWT_EXPIRES_IN=7d`
- `FRONTEND_URL=https://yourdomain.com`
- `NODE_ENV=production`
- `SMTP_HOST=<SMTP host>`
- `SMTP_PORT=587`
- `SMTP_USER=<SMTP user>`
- `SMTP_PASS=<SMTP password>`
- `SMTP_SECURE=false`
- `EMAIL_FROM="HoneyVision <you@example.com>"`

Set this in the frontend build environment:

- `VITE_API_URL=https://api.yourdomain.com`

## Build

Run:

```bash
npm run build:godaddy
```

This creates a deployable package in the `godaddy-deploy` folder.

## Important note

GoDaddy shared hosting is usually not a great fit for a Node + Express backend unless you are using a VPS or custom server plan. The cleanest GoDaddy deployment is:
- frontend hosted as static files
- backend hosted on a separate Node-compatible environment (VPS, Render, Railway, or managed hosting)
