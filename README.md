# Portfolio Backend

## Local Setup

1. Copy .env.example to .env and update DB creds for local MySQL.
2. `npm install`
3. `npm start`

## Render Deployment

1. Push to GitHub.
2. New Web Service on Render.com, connect repo (or existing).
3. Settings:
   - Build Command: `rm -rf node_modules package-lock.json && npm install`
   - Start Command: `npm start`
4. Add Environment Variables (Dashboard > Environment):
   - DB_HOST=your-cloud-db-host (e.g., Neon/PlanetScale)
   - DB_USER=your-db-user
   - DB_PASSWORD=your-db-password (keep secret)
   - DB_NAME=your-db-name
5. **Important**: Use external MySQL DB:
   - Free: Neon.tech, PlanetScale.com (serverless MySQL)
   - Create DB, get connection details, paste as env vars.
   - Ensure DB allows external connections (0.0.0.0/0 or Render IP).
6. Deploy – check logs for DB connect.

**Troubleshooting MODULE_NOT_FOUND (debug/ms)**:

- Update Build Command to clean install (above).
- Clear build cache: Dashboard > Manual Deploy > Clear build cache & deploy.
- Verify Node version (default v22 ok).
- If persists: Logs → share new error.

Health check: https://your-app.onrender.com/health

Troubleshoot: If fails, check Render logs for DB error.
