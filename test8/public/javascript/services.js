'use strict';

/* App Module */

angular.module('test8Services', ['ngResource']).
factory('User', function($resource){
	
/*  return $resource('phones/:phoneId.json', {}, {
	  query: {method:'GET', params:{phoneId:'phones'},
    isArray:true}
  });*/
  

  var user = $resource('/users' , { } , {
    login : { method : 'post'}
  });

  return user;
});
