var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mage Wars API' });
});

router.get('/createcard', function(req, res, next) {
  res.render('createcard', null);
});

module.exports = router;
