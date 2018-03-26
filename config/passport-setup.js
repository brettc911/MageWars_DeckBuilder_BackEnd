const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const User = require('../models/user')

const keys = require('./keys')

passport.use(
  new GoogleStrategy({
    callbackURL: '/auth/google/redirect',
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret
    // clientID: process.env.CLIENT_ID,
    // clientSecret: process.env.CLIENT_SECRET
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
