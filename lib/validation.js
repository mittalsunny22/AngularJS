 var app = angular.module('formValidation', []);
 app.controller('validationCtrl' , function($scope)
{
    $scope.Alltopic=[];
    $scope.Display = function()
    {
        $scope.Alltopic.push($scope.Topic);
        return
    }
});

/*app.controller('angularValidation', function($scope)
{
	$scope.user = "Angular";
});*/


/* This is for dependency Injection as in this we firstly creating a simple JavaScript object and pass it to the controller for further processing. */ 
app.value("TutorialID", 5); // The value object of AngularJS can be used to inject simple JavaScript objects in your controller.
app.controller('valueComponentCtrl', function($scope,TutorialID) 
    {
        $scope.ID =TutorialID;
    
});


/* Service is defined as a singleton JavaScript object consisting of a set of functions that you want to expose and inject in your controller. */ 
app.service('AdditionService', function(){  // Here we are creating a new service called 'AdditionService' using the service parameter of our main AngularJS JS module. The service module can be used to define your own custom services which can be re-used across multiple AngularJS modules.
   this.Addition = function(a,b) {
      return a+b; 
   }
});

app.controller('serviceCtrl', function ($scope, AdditionService) {
	
  	$scope.result = AdditionService.Addition(5,6);
});