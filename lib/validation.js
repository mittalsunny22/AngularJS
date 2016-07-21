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