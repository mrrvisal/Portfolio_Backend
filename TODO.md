# Render Deploy Fix TODO

## Local Steps

- [ ] 1. Clean reinstall deps: rm -rf node_modules package-lock.json && npm install
- [ ] 2. Test locally: npm start (check DB connect; use .env with local/cloud DB)

## Render Dashboard Steps (do manually)

- [ ] 3. Update Build Command: `rm -rf node_modules package-lock.json && npm install`
- [ ] 4. Confirm Start Command: `npm start`
- [ ] 5. Add Env Vars: DB_HOST, DB_USER, DB_PASSWORD, DB_NAME (from Neon/PlanetScale, allow external access)
- [ ] 6. Clear build cache & Manual Deploy

## Repo Updates

- [x] 7. Update README.md with clean build instructions & troubleshooting
- [ ] 8. Commit & push: git add . && git commit -m "Fix Render deploy: clean npm install" && git push

## Verification

- [ ] 9. Check Render logs & visit /health
