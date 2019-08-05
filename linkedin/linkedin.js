const PORT = 3000;

const express = require('express')
const config = require('./config.js');
const LinkedIn = require('node-linkedin')(config['app-id'], config['secret'], `http://localhost:${PORT}/oauth/linkedin/callback`);

const app = express();

app.get('/oauth/linkedin', function(req, res) {
  // This will ask for permisssions etc and redirect to callback url.
  console.log('Authorizing...');
  LinkedIn.auth.authorize(res, ['r_basicprofile', 'r_fullprofile']);
});

app.get('/oauth/linkedin/callback', function(req, res) {
  console.log('Requesting access token...');
  LinkedIn.auth.getAccessToken(res, req.query.code, function(err, data) {
    if(err) {
      console.error(err);
      return;
    }
    const result = JSON.parse(data);
    const accessToken = result.access_token;
    const linkedIn = LinkedIn.init(accessToken);
    linkedIn.people.me(function(err, $in) {
      res.send($in);
    });
  });
});

app.get('/', function(req, res) {
  res.redirect(301, '/oauth/linkedin');
});

app.listen(PORT, () => console.log(`LinkedIn app listening on port ${PORT}`));