var db = require('./config/mongo_database');

function hello() {
    console.log('Hello World!');
    

    var user = new User({data: 'value'});
    
    var promise = db.userModel.findOne({email: "aaaaaa"}).exec();
    promise.then(
      function(result) {
    		console.log(result);
    		if(result)
      			console.log(111111);
  			console.log(22222222);
      },
      function(err) {
			console.log(err);
      }
    );

    var result = yield db.userModel.findOne({email: "aaaa"}).exec();
	console.log(result);
    console.log('aaaaaaaaaa!');
}

hello();