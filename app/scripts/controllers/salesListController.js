define(['appModule'], function(myApp){

    function SalesLstCtrl(){
        myApp.lazy.controller('salesListController' ,['$scope', 'getAllSalesResolved',
            function ($scope, sales) {
                console.log('before sales');
                $scope.sales= sales;
                console.log( $scope.sales.length);
            }]);
    }
    return SalesLstCtrl;
});