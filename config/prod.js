// prod.js - production keys here!!
module.exports = {
  mongoURI: process.env.PROD_MONGODB,
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  cookieKey: process.env.COOKIE_KEY
}
