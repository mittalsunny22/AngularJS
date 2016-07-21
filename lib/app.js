   var app = angular.module('sunny', []);

   app.directive('eventHandling', function()
   {
    return {
        link : function($scope , element , attrs)
        {
            element.bind('click' , function()
            {
                element.html('You clicked me.');
            });
        }
    }});

   app.controller('myCtrl', function($scope) {
    $scope.showMe = false;
    $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }
});

   app.controller('myCtrl', function($scope) {
    $scope.myFunc = function(myE) {
        $scope.x = myE.clientX;
        $scope.y = myE.clientY;
    }
});

   app.controller('sunnyCtrl', function($scope) {
    $scope.message = "hello sunny\n Welcome to AngularJS";
    $scope.name = "Sunny Mittal";
    $scope.a = 5;
    $scope.b = 5;
    $scope.c = $scope.$eval('a+b');
    $scope.customer = {
        name: 'Sunny',
        address: 'Sector 7, Panchkula'
    };

    $scope.designation = "Developer";
    app.filter('DemoFilter',function()
    {
        return function(input)
        {
            return input + " ---------This is the custom filter";
        }
    });

    app.directive('ngSunny', function() {
      return {
        template: 'Name: {{customer.name}} Address: {{customer.address}}'
    };
});
    app.directive('ngMittal', function(){
        return {
            controller: 'sunnyCtrl',
            controllerAs : 'ctrl',
            template : '{{ctrl.message}}'
        }
    });

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
    $scope.names = {
        car01 : "Ford",
        car02 : "Fiat",
        car03 : "Volvo"
    }
    $scope.list = ["controller","scope"];
});

   app.directive('outer', function()
   {
    return {
        restrict : 'E',
        template : '<div><h1><b>Outer</b></h1><inner></inner></div>'
    }
});

   app.directive('inner', function()
   {
    return {
        restrict : 'E',
        template : '<div><b>Inner</b></div>',
    }
});

   var eventApp = angular.module('event',[]);
   eventApp.controller('showHideEventCtrl',function($scope)
   {
    $scope.isVisible = false;
    $scope.showHide = function()
    {
        /* if we want toggle event hide show on same button then we use this */
        $scope.isVisible = $scope.isVisible ? false : true;

        /* if we want simple functonality we use*/
   // $scope.isVisible = true;
}
});


