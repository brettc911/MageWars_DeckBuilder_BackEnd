const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const User = require('../models/user')
const keys = require('./keys')


passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user))
})


passport.use(
  new GoogleStrategy({
    callbackURL: '/auth/google/redirect',
    // temporary keys
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret
  }, function(accessToken, refreshToken, profile, done) {

    // check if user already exists
    User.findOne({googleId: profile.id})
    .then(existingUser => {
      if (existingUser) {
        // user exists
        console.log('user ' + existingUser);
        done(null, existingUser)
      } else {
        // user does not exist, create new user
        new User({
          userName: profile.displayName,
          googleId: profile.id,
          decks: []
        }).save()
        .then(newUser => done(null, newUser))
      }
    })
  })
)
