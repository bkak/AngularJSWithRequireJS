define(['appModule','appConfigProvider'], function(myApp, configProvider){
   //  var  configProvider =require("appConfigProvider");
   // myApp.controller('test',['appConfigProvider', function(appConfigProvider){
   //     var a =appConfigProvider
   // }]);

    //function salesListController(){
        myApp.lazy.controller('salesListController' ,['$scope', 'getAllSalesResolved',
            function ($scope, sales) {
                console.log('before sales');
                $scope.sales= sales;
                console.log( $scope.sales.length);
            }]);
    //return salesListController;
});