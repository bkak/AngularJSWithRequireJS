define(['appModule','services/salesService'], function(myApp){
    myApp.lazy.controller('editController', ['$scope', '$location', 'getSale','SaleRepo', '$route',
        function ($scope, $location, getSale, saleRepo, $route) {
        var saleRepo = saleRepo;

        getSale($route.current.params.Id || 0).then(function(sale){
            $scope.Id = sale.Id;
            $scope.Number = sale.Number;
            $scope.TotalAmount =sale.TotalAmount;
            $scope.Customer= sale.Customer;
            $scope.sale= sale;

        });
        $scope.save = function(){
            saleRepo.save(function(sale) {
                $location.path('/list');
            });
        };
    }]);
    return myApp;
});
