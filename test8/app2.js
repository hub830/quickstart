var util = require('util'),
    express = require('express'),
    bodyParser = require('body-parser'),
    expressValidator = require('express-validator');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator()); // this line must be immediately after express.bodyParser()! 

app.get('/', function(req, res){
  res.send('Hello World');
});

app.post('/:urlparam', function(req, res) {
 
  // checkBody only checks req.body; none of the other req parameters 
  // Similarly checkParams only checks in req.params (URL params) and 
  // checkQuery only checks req.query (GET params). 
  req.checkBody('postparam', 'Invalid postparam').notEmpty().isInt();
  req.checkParams('urlparam', 'Invalid urlparam').isAlpha();
  req.checkQuery('getparam', 'Invalid getparam').isInt();
 
  // OR assert can be used to check on all 3 types of params. 
  // req.assert('postparam', 'Invalid postparam').notEmpty().isInt(); 
  // req.assert('urlparam', 'Invalid urlparam').isAlpha(); 
  // req.assert('getparam', 'Invalid getparam').isInt(); 
 
  req.sanitize('postparam').toBoolean();
 
  var errors = req.validationErrors();
  if (errors) {
    res.send('There have been validation errors: ' + util.inspect(errors), 400);
    return;
  }
  res.json({
    urlparam: req.param('urlparam'),
    getparam: req.param('getparam'),
    postparam: req.param('postparam')
  });
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
