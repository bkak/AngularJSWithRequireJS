'use strict';

define(['appModule'], function(myApp){
    myApp.controller('editController', ['$scope', '$location', 'getSale', function ($scope, $location,getSale) {
         getSale().then(function(val){
            $scope.Id = val.Id;
            $scope.Number = function() { return $scope.Id + 10;};
            $scope.Date = val.Date;
            $scope.TotalAmount =val.TotalAmount;
            $scope.Customer= val.Customer;
             $scope.sale= val;
        });

        $scope.save = function(){
            $scope.sale.$save(function(sale) {
                $location.path('/list');
            });
        };
    }]);
});

/*
myApp.lazy.controller('newController', ['$scope', '$location', 'getSale', function ($scope, $location, getSale) {
    $scope.sale = getSale();
    $scope.Id = 9;
    $scope.Number = function() { return $scope.Id + 10;};
    $scope.Date = Date.now();
    $scope.TotalAmount =0;
    $scope.Customer="";
    $scope.save = function(){
        $scope.sale.$save(function(sale) {
            $location.path('/list');
        });
    };
}]);

*/
