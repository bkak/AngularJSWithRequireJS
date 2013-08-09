'use strict';
define(['appModule','angular', 'angularResource', 'angularMocks','salesListController'],
    function(app, angular, angularResource, angularMocks, saleslstCtrl) {

describe('SalesListController1', function(){

    beforeEach(module('AngularSampleBhoomiApp'));
    var SalesListController, scope;
   // dependencyresolverfor([ 'services/salesService','controllers/salesListController']);
    var sales = [{Customer:"A1",Number:1,Id:1},{Customer:"B1",Number:2,Id:2}];

    beforeEach(inject(function($controller, $rootScope,$injector){
        scope = $rootScope.$new();
        //console.log($controller('salesListController',{$scope:scope, getAllSalesResolved:sales}));
        //var serv = $injector.get('salesService');
       // var a = app.controller('salesListController', {$scope:scope, getAllSalesResolved:sales});
        SalesListController = $controller('salesListController', {$scope:scope, getAllSalesResolved:sales});
    }));

    it('should have 0 items when loaded', function(){
        expect(scope.sales).toBeUndefined();
    });
    /*
    it('should have 2 items after rendering', function(){
        scope.$digest();
        expect(scope.sales.length).toBe(2);
    });
    */
});
});