
'use strict';

angular.module('myApp.view2', ['ngRoute', 'ngAppbase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function($scope, $http, $appbase) {
	$scope.search = 'new cats';
	$scope.results = [{type: 'scottish fold', character: 'friendly'},
					  {type: 'orange tabby', character: 'fat'}];

	$scope.names = [];
	$http.get("http://www.w3schools.com/angular/customers.php")
		.success(function(response) {$scope.names = response.records;});
}]);
