define(['appModule'], function(myApp){
    myApp.lazy.factory('SaleRepo',['$resource',
        function($resource){
            return $resource('/sales/:id', {id: '@id'});
        }
    ]);
    myApp.lazy.factory('getAllSales', ['SaleRepo', '$q', function (SaleRepo, $q) {
            return function() {
                var delay = $q.defer();
                SaleRepo.query(function(sales) {
                    delay.resolve(sales);
                }, function() {
                    delay.reject('Unable to fetch sales');
                });
                return delay.promise;
            };
        }
    ]);
    myApp.lazy.service('getAllSalesResolved', ['getAllSales','$q', '$rootScope', function(getallsales,$q, $rootScope){
       return getallsales();
       //return $q.when(getallsales).then(function(data){return data});
       // getallsales();
        //$rootScope.$apply();

    }]);
    myApp.lazy.factory('getSale', ['SaleRepo', '$route', '$q', function (SaleRepo, $route,$q) {
        return function() {
            var delay = $q.defer();
            SaleRepo.get({id: $route.current.params.Id || 0},function(sale) {
                delay.resolve(sale);
            }, function() {
                delay.reject('Unable to fetch sales');
            });
            return delay.promise;
        };
    }
    ]);
});

/* angular.module('AngularSampleBhoomiApp.services')
 .service('createSale', function createSale(sale) {
 sales.push(sale);
 }
 .service('getAll', function getAll() {
 return sales;
 }));
 */
