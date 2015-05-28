'use strict';

/* App Module */

angular.module('test8Services', ['ngResource']).
factory('Phone', function($resource){
  return $resource('phones/:phoneId.json', {}, {
    query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
  });
});
