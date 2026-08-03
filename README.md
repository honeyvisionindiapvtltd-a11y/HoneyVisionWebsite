# HoneyVision

## Local development

1. At the repository root, run:
   ```bash
   npm install
   ```
   This will install the root dependencies and automatically install backend and frontend dependencies.
2. Start the development servers:
   ```bash
   npm run dev
   ```
3. Backend will run on `http://localhost:5000` and the frontend will run on `http://localhost:5173`.

## Production build

- Build the frontend from the `frontend` directory with:
  ```bash
  npm run build --prefix frontend
  ```
- The backend starts with `npm start` from the `backend` directory.
- Ensure `VITE_API_URL` points to the backend API URL when serving the frontend in production.

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
