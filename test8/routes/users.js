var express = require('express');
var crypto = require('crypto');
var Q = require('q');
var db = require('../config/mongo_database');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    // console.log(req);
    console.log('gettttttttttttttttttttttttttttttttttttttttttttt');
    console.log(req.body);

    res.send('gettttttttt');
});

router.post('/', function(req, res, next) {
    // console.log(req);
    console.log('postttttttttttttttttttttttttttttttttttttttt');
    console.log(req.body);

    res.send('postttttttttt');
});

router.post('/signin', function(req, res, next) {


    console.log("signin");

    var userEntry = new db.userModel();
    userEntry.email = req.body.email;
    userEntry.password = req.body.password;

    var promise = db.userModel.findOne({
        email : userEntry.email
    }).exec();
    promise.then(function(result) {
        if (result)
            return res.send(200);

    }, function(err) {
        console.log(err);
        return res.send(400);
    });

});

router.post('/signup', function(req, res, next) {

      console.log("signup");

    req.checkBody('name', 'required').notEmpty();
    req.checkBody('email', 'pattern').notEmpty().isEmail();
    req.checkBody('password', 'required').notEmpty();

    var errors = req.validationErrors();
    console.log(errors);
    if (errors) {
        res.json(400, errors);
        return;
    }

    var md5 = crypto.createHash('md5');
    var password = md5.update(req.body.password).digest('base64');
    var userEntry = new db.userModel();
    userEntry.email = req.body.email;
    userEntry.name = req.body.name;
    userEntry.password = password;
// {"$or": [{"name":"stephen1"}, {"age":35}]}
    var promise = db.userModel.findOne({"$or": [{email : userEntry.email}, {name : userEntry.name}]}).exec();
    promise.then(function(result) {
      console.log("result:" + result);
      if (result){
        if(result.name == userEntry.name)
          return res.json(400, [{param: "name", msg: "ngRemoteValidate"}]);
        else
          return res.json(400, [{param: "email", msg: "ngRemoteValidate"}]);
      }
      userEntry.save(function(err) {
        if (err) {
            console.log(err);
            return res.send(400);
        }
        return res.send(200);
      });
    }, function(err) {
      console.log(err);
      return res.send(400);
    });
});


router.post('/signup/validname', function(req, res, next) {

    console.log("signup/validname");
    console.log(req.body.value);

    var promise = db.userModel.findOne({
        name : req.body.value
    }).exec();
    promise.then(function(result) {
      if (result)
        return res.json(200, { isValid: false, value: '名称已经存在' });
      else
        return res.json(200, { isValid: true, value: 'OK!' });
    }, function(err) {
      return res.json(200, { isValid: false, value: '连接出错' });
    });
});

router.post('/signup/validemail', function(req, res, next) {
    console.log("signup/validemail");

    var promise = db.userModel.findOne({
        email : req.body.value
    }).exec();
    promise.then(function(result) {
      if (result)
        return res.json(200, { isValid: false, value: '名称已经存在' });
      else
        return res.json(200, { isValid: true, value: 'OK!' });
    }, function(err) {
      return res.json(200, { isValid: false, value: '连接出错' });
    });
});

router.post('/signout', function(req, res, next) {
    // console.log(req);
    console.log('postttttttttttttttttttttttttttttttttttttttt');
    console.log(req.body);

    res.send('postttttttttt');
});

module.exports = router;
