    var app = angular.module('sunny', []);

app.controller('sunnyCtrl', function($scope) {
    $scope.message = "hello sunny\n Welcome to AngularJS";
    $scope.name = "Sunny Mittal";

    $scope.designation = "Developer";

    $scope.fullName = function(name, age) {
        return name + " " + age;
    }
    $scope.records = {
        values: [{
            name: "Pizza",
            type: "Fast food"
        }, {
            name: "Burger",
            type: "Normal"
        }, {
            name: "Chowmin",
            type: "Chinese"
        },
            {
            name: "Choowin",
            type: "Chineese"
        }
         ]
    }
});

app.controller('sunnyNewCtrl', function($scope) {
    $scope.age = "22";
});

app.controller('checkboxCtrl', function($scope) {
    $scope.values = {
        controller: true,
        scope: false
    };
});

app.controller('selectboxCtrl', function($scope)
{
 $scope.list = ["controller","scope"];
});