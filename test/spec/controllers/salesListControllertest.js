'use strict';
define(['salesListController'],
    function() {
        describe('SalesListController1', function(){
            beforeEach(module('AngularSampleBhoomiApp'));
            var SalesListController, scope;
            var sales = function(){ return [{Customer:"A1",Number:1,Id:1},{Customer:"B1",Number:2,Id:2}]; }

            beforeEach(inject(function($controller, $rootScope,$injector){
                scope = $rootScope.$new();
                SalesListController = $controller('salesListController', {$scope:scope, getAllSales:sales});
            }));
            it('should have 2 items after rendering', function(){
                console.log('test 1');
                expect(scope.sales.length).toBe(2);
            });
        });
});

