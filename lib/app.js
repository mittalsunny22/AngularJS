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
            name: "Pizza"
        }, {
            name: "Burger"
        }, {
            name: "Chowmin"
        }, ]
    }
});

app.controller('sunnyNewCtrl', function($scope) {
    $scope.age = "22";
});

app.controller('checkboxCtrl', function($scope) {
    $scope.values = {
        controller: true,
        scope: false
    }
});