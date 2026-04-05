# Backend Deploy Fix - Render

## Status: In Progress

**Completed:**

- [x] Analyzed files, identified issues

**Todo:**

- [x] 1. Update package.json
- [x] 2. Run `npm install`
- [x] 3. Edit controllers/contact.js, project.js, education.js (remove console.logs)
- [x] 4. Edit index.js (add prod middleware, /health, error handler, remove console.log)
- [x] 5. Edit README.md (README already Render-ready)
- [ ] 6. Local test: Running `npm start`...
- [ ] 7. Git add/commit/push to Render

**Render Notes:**

- Set env vars: TIDB_HOST, TIDB_PORT, TIDB_USER, TIDB_PASSWORD, TIDB_DATABASE, TIDB_CA_PATH (base64 or upload ca.pem)
- Railway/Render detects Node, runs npm start
- /health for readiness probe
