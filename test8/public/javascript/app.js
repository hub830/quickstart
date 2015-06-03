'use strict';

/* App Module */

var test8App = angular.module('test8App', [
  'ngRoute',
  'ui.bootstrap',
  'test8Controllers',
  'test8Services'
]);


var test8Services = angular.module('test8Services', ['ngResource']);

test8App.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/index.html',
        controller: 'indexCtrl'
      }).
      when('/signup', {
          templateUrl: 'partials/signup.html',
          controller: 'SignupCtrl'
        }).
      otherwise({
        redirectTo: '/'
      });
  }]);

test8App.run(function($rootScope) {
  $rootScope.name = "Ari Lerner";
  var global = $rootScope.global = {
  isAdmin: false,
  isEditor: false,
  isLogin: false,
  info: {}
  };
});