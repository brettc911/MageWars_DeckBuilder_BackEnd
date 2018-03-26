const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const User = require('../models/user')

passport.use(
  new GoogleStrategy({
    callbackURL: '/auth/google/redirect',
    // clientID: process.env.CLIENT_ID,
    // clientSecret: process.env.CLIENT_SECRET
    clientID: '110239888022-1jm74fe2p01b5rjj3fem7f4c7qrc5l4e.apps.googleusercontent.com',
    clientSecret: '7oppScddalfSlVQHt2HWKa7a'
  }, function(accessToken, refreshToken, profile, done) {

    // check if user already exists
    User.findOne({googleId: profile.id})
    .then(existingUser => {
      if (existingUser) {
        // user exists
        console.log('user ' + existingUser);
      } else {
        // user does not exist, create new user
        new User({
          userName: profile.displayName,
          googleId: profile.id,
          decks: []
        }).save()
        .then(newUser => console.log(newUser))
      }
    })
  })
)
