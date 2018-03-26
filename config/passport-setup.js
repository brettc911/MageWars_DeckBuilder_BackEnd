const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')

passport.use(
  new GoogleStrategy({
    callbackURL: '/auth/google/redirect',
    // clientID: process.env.CLIENT_ID,
    // clientSecret: process.env.CLIENT_SECRET
    clientID: '110239888022-1jm74fe2p01b5rjj3fem7f4c7qrc5l4e.apps.googleusercontent.com',
    clientSecret: '7oppScddalfSlVQHt2HWKa7a'
  }, function(accessToken, refreshToken, profile, done) {
    console.log(profile);
  })
)
