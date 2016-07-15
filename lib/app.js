var app = angular.module('sunny', []);

app.controller('sunnyCtrl', function($scope) {
    $scope.message = "hello sunny";
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