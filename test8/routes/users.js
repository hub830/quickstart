var express = require('express');
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

    console.log("4-----------------------------------------------");
    req.assert('name').notEmpty();
    console.log("5-----------------------------------------------");
    req.checkBody('name', 'Invalid postparam').notEmpty().isInt();
    

    console.log("1-----------------------------------------------");
    var errors = req.validationErrors();
    if (errors) {
        console.log("3-----------------------------------------------");
        console.log(errors);
        res.json(400, errors);
        return;
    }

    console.log("2-----------------------------------------------");
    var userEntry = new db.userModel();
    userEntry.email = req.body.email;
    userEntry.password = req.body.password;

    var promise = db.userModel.findOne({
        email : userEntry.email
    }).exec();
    promise.then(function(result) {
        if (result)
            return res.send(400);

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

    console.log(req.body.value);
    console.log(req.body.value.indexOf("abc"));
    console.log("signup/validname");


    if(req.body.value.indexOf("abc")>-1)
        return res.json(200, {
            isValid: false,
            value: 'myPassword!'
        });
    else
        return res.json(200, {
            isValid: true,
            value: 'myPassword!'
        });    
});

router.post('/signout', function(req, res, next) {
    // console.log(req);
    console.log('postttttttttttttttttttttttttttttttttttttttt');
    console.log(req.body);

    res.send('postttttttttt');
});

module.exports = router;
