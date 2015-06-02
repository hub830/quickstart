'use strict';

/* App Module */

//angular.module('test8Services', ['ngResource'])
test8Services.factory('User', function($resource){
	
/*  return $resource('phones/:phoneId.json', {}, {
	  query: {method:'GET', params:{phoneId:'phones'},
    isArray:true}
  });*/
  

  var user = $resource('/users/signup' , { } , {
    signin : { method : 'post'}
  });

  return user;
});
