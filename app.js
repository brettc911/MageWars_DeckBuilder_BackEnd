const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const passportSetup = require('./config/passport-setup')
const passport = require('passport')
const keys = require('./config/keys')

const URIstring =
    process.env.PROD_MONGODB ||
    `mongodb://localhost/magewars`

mongoose.connect(URIstring, {useMongoClient: true}, (err, res) => {
  if (err) {
    console.log('DB CONNECTION FAILED: ' + err);
  }
  else {
    console.log('DB CONNECTION SUCCESS: ' + URIstring);
  }
})

const index = require('./routes/index');
const api = require('./routes/api');
const auth = require('./routes/auth')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');
app.use(express.static(path.join(__dirname, 'public')));


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// cookie config
app.use(cookieParser());
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}))

// initialize passport
app.use(passport.initialize())
app.use(passport.session())


// TEMP SOLUTION FOR CORS ISSUE
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})

app.use('/', index);
app.use('/api', api);
app.use('/auth', auth);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
