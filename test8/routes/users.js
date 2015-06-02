var express = require('express');
var Q = require('q');
var db = require('../config/mongo_database');

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


router.post('/signin', function(req, res, next) {

	  console.log('************************************************************************');
	  console.log(req);
	  console.log('************************************************************************');
	  console.log(req.body);
	  console.log('************************************************************************');
	  console.log(req.body.email);
	  console.log(req.body.password);
	



	var userEntry = new db.userModel();
	  console.log('333333333');
	userEntry.email = req.body.email;
	userEntry.password = req.body.password;
	userEntry.save(function(err) {
		if (err) {
			console.log(err);
			return res.send(400);
		}

		return res.send(200);
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});

router.post('/signup', function(req, res, next) {


	console.log("signup");

	var userEntry = new db.userModel();
	userEntry.email = req.body.email;
	userEntry.password = req.body.password;
	

    var promise = db.userModel.findOne({email: "aaaa"}).exec();
    promise.then(
      function(result) {
  		console.log(result);
      },
      function(err) {
			console.log(err);
			return res.send(400);
      }
    );

	
	userEntry.save(function(err) {
		if (err) {
			console.log(err);
			return res.send(400);
		}

		return res.send(200);
	});
	
});

router.post('/signout', function(req, res, next) {
//	  console.log(req);
	  console.log('postttttttttttttttttttttttttttttttttttttttt');
	  console.log(req.body);
  
  res.send('postttttttttt');
});

module.exports = router;
