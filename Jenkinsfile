node {
  stage 'Checkout Repository'
  git url: 'https://github.com/stackroute-hybrid/weather-app.git', branch: 'master'

  stage 'Installing  Dependencies'
  sh "(cd ~/jobs/stackroute-hybrid/jobs/weather-app/branches/master/workspace/client && npm install)"
  sh "(cd ~/jobs/stackroute-hybrid/jobs/weather-app/branches/master/workspace/server && npm install)"

  stage 'Browserify and Transpilation'

  sh "(cd ~/jobs/stackroute-hybrid/jobs/weather-app/branches/master/workspace/server && rm dist -rf)"
  sh "(cd ~/jobs/stackroute-hybrid/jobs/weather-app/branches/master/workspace/server && mkdir dist -p)"
  sh "(cd ~/jobs/stackroute-hybrid/jobs/weather-app/branches/master/workspace/client && node node_modules/gulp/bin/gulp.js browserify)"
  sh "(cd ~/jobs/stackroute-hybrid/jobs/weather-app/branches/master/workspace/client && node node_modules/gulp/bin/gulp.js copy)"

  stage 'Testing'
  sh "(cd ~/jobs/stackroute-hybrid/jobs/weather-app/branches/master/workspace/server && node_modules/mocha/bin/mocha test)"




}
