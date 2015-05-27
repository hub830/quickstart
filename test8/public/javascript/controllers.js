'use strict';

/* Controllers */

var test8Controllers = angular.module('test8Controllers', []);

test8Controllers.controller('indexCtrl', ['$scope',
  function($scope) {
    $scope.phones = [
    {"name": "Nexus S",
     "snippet": "Fast just got faster with Nexus S."},
    {"name": "Motorola XOOM™ with Wi-Fi",
     "snippet": "The Next, Next Generation tablet."},
    {"name": "MOTOROLA XOOM™",
     "snippet": "The Next, Next Generation tablet."}
    ];
    $scope.orderProp = 'age';
  }]);


test8Controllers.controller('NavbarCtrl', function ($scope, $location) {

    $scope.orderProp = 'age';
});