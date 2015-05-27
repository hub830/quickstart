'use strict';

/* App Module */

var test8App = angular.module('test8App', [
  'ngRoute',
  'test8Controllers'
]);

test8App.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/index.html',
        controller: 'indexCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

test8App.run(function($rootScope) {
  $rootScope.name = "Ari Lerner";
  global = $rootScope.global = {
  isAdmin: false,
  isEditor: false,
  isLogin: false,
  info: {}
  };
});