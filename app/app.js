'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.version',
  'ngAppbase'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'
	});
}])

.controller('MainController', [function($scope, $appbase) {
	$scope.comment = 'Hello';

}]);
