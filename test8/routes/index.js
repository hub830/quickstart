var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'test8' });
});

router.get('/index2', function(req, res, next) {
  res.render('index2', { title: 'test8' });
});
module.exports = router;
