var sampleApp =angular.module('route',['ngRoute']);

sampleApp.controller('AddEventCtrl',function($scope)
{
	$scope.message = "this is to add NewEvent";
});

sampleApp.controller('DisplayEventCtrl',function($scope)
{
	$scope.message = "this is to add DisplayEvent";
});

sampleApp.config(function($routeProvider)
{
	$routeProvider

	.when('/NewEvent',{
		templateUrl :'add_event.html',
		controller : 'AddEventCtrl'

	})

	.when('/DisplayEvent',{
		templateUrl :'display_event.html',
		controller : 'DisplayEventCtrl'

	})

	.otherwise({
		redirectTo:'/route.html'
	});

});