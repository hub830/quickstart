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


test8Controllers.controller('NavbarCtrl', function ($scope, $modal, $log, $location) {

    $scope.orderProp = 'age';

	$scope.login = function(size) {

		var modalInstance = $modal.open({
			templateUrl : 'partials/login.html',
			controller : 'ModalInstanceCtrl',
			size : size,
			resolve : {
				items : function() {
					return $scope.items;
				}
			}
		});

		modalInstance.result.then(function(selectedItem) {
			$scope.selected = selectedItem;
		}, function() {
			$log.info('Modal dismissed at: ' + new Date());
		});
	};
});



test8Controllers.controller('ModalInstanceCtrl', function($scope, $modalInstance,$http, $window,User) {
    $scope.submit = function(user){
        console.log($scope.user);
        User.signin($scope.user,$scope.user, function(data) {
            console.log(data);
        });
    }
});


test8Controllers.controller('SignupCtrl', function($scope,$http, $window,User) {
    $scope.submit = function(user){
        console.log("11111111111111111111111111111111111111111111111111111111");
        console.log(user);
        console.log($scope.form);
        console.log($scope.user);
        /*User.signin($scope.user,$scope.user, function(data) {
            console.log(data);
        });*/
    }
});