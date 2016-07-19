var restApp = angular.module('resourceApp',['ngResource','ngRoute']);

//  .factory method is used to create the details of the new service and 'Entry' is the name we are giving to our service 

// In this service, we are creating a function which is going to call the $resource api
restApp.factory('Entry', function($resource) 
	{	console.log('entered in factory');
	// The $resource function is a service which is used to call a REST endpoint. The REST endpoint is normally a URL. In the above function, we are using the URL (/example /Event/:1) as our REST endpoint.
    return $resource('/src/resource.html#/NewEvent/:id');    // Note the full endpoint address
});
// The resource object will now have the functions ( get() , query() , save() , remove(), delete() ) which can be invoked.

restApp.controller('ResourceController',function($scope, myFunction) {
	console.log('entered in ResourceController');
	var object = myFunction.get({ 1: $scope.id },function() {
		console.log('Value In JSON Form is below');

		console.log(object);
  }); // get() returns a single entry


//query() returns all the entries
  /*
  var entries = Entry.query(function() {
  	console.log('entries');
    console.log(entries);
  }); 
  */

  $scope.entry = new Entry(); //You can instantiate resource class
  console.log('entry is instantiated');

  $scope.entry.data = 'some data';

  Entry.save($scope.entry, function() {
    //data saved. 
    console.log($scope.entry);

  }); //saves an entry. 
});

/* For Routing  */
restApp.controller('AddEventCtrl',function($scope,$routeParams)
{
	$scope.message = "this is to add NewEvent";
	$scope.id = $routeParams.id;
});

restApp.controller('DisplayEventCtrl',function($scope,$routeParams)
{
	$scope.message = "this is to add DisplayEvent";
	$scope.id = $routeParams.id;
});

restApp.config(function($routeProvider)
{
	$routeProvider
	
	.when('/NewEvent/:id',{
		templateUrl :'add_event.html',
		controller : 'AddEventCtrl'
	})

	.when('/DisplayEvent/:id',{
		templateUrl :'display_event.html',
		controller : 'DisplayEventCtrl'
	})
});

restApp.controller('AngularCtrl', function($scope, $http) {
	$http.get("http://localhost/src/resource.html")
	.then(function(response) 
	{
		$scope.names = response.data.records;
		console.log($scope.names);
});
});