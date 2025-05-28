for build Client Side Rendering
==============================
npm run build-client
Take the ./public folder and the ./index.html file.

Run npm run build-Client for create public/bundle.js 
Run npm run build for create ssr-bundle-server.js
The application start is:
Run npm start  (it take the ssr-bundle-server.js)

// To add a Heroku app as a Git remote, you need to execute: 
heroku git:remote -a cctv-landing

// update heroku stack
heroku stack:set heroku-22 -a cctv-landing

// push into heroku
git push heroku loopintegrate:master  






// clear cache, run / install cache plugin
heroku plugins:install heroku-builds

// purge cache
heroku builds:cache:purge -a cctv-landing

// do commit 
git commit --allow-empty -m "Purge cache"
git push heroku loopintegrate:master  
