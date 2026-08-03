# HoneyVision

## Deployment notes

### Render
1. Create a new Render web service for the backend using the repository root.
2. Set the root directory to `backend` and use `npm start` as the start command.
3. Add the environment variables from `backend/.env.example` and set a real MongoDB URI and JWT secret.
4. Create a second static site for the frontend and set the build command to `npm install && npm run build`.
5. Set the frontend environment variable `VITE_API_URL` to the backend URL plus `/api`.

### Vercel
1. Import the frontend folder as a Vercel project.
2. Use the existing `vercel.json` config for SPA routing.
3. Set `VITE_API_URL` in the Vercel environment variables.

### Netlify
1. Deploy the frontend folder as a static site.
2. Use the same build command and publish directory `dist`.
3. Set `VITE_API_URL` in the site environment variables.
