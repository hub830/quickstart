var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
//	  console.log(req);
	  console.log('gettttttttttttttttttttttttttttttttttttttttttttt');
	  console.log(req.body);
  
  res.send('gettttttttt');
});

router.post('/', function(req, res, next) {
//	  console.log(req);
	  console.log('postttttttttttttttttttttttttttttttttttttttt');
	  console.log(req.body);
  
  res.send('postttttttttt');
});

module.exports = router;
