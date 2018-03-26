const express = require('express')
const router = require('express').Router()
const passport = require('passport')


// auth login
router.get('/login', (req, res, next) => {
  res.send('regular login')
})
// auth logout
router.get('/logout', (req, res, next) => {
  res.send('logout user')
})
// auth with google
router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}))

// callback route for google to redirect
router.get('/google/redirect', passport.authenticate('google'), (req, res, next) => {
  
})

module.exports = router
