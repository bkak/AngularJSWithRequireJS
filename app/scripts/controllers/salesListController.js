define(['appModule'], function(myApp, configProvider){
        myApp.lazy.controller('salesListController' ,['$scope', 'getAllSales',
            function ($scope, getall) {
                $scope.sales = getall();
            }]);
  return myApp;
});
