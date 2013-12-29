'use strict';
define(['salesController'],
    function() {
        describe('Sales Controller test', function(){
            beforeEach(module('AngularSampleBhoomiApp'));
            var SalesListController, scope;
            var sales = {Customer:"A1",Number:1,Id:1};
            var $httpBackend;
            beforeEach(inject(function($controller, $rootScope,$injector){
                scope = $rootScope.$new();
                $httpBackend = $injector.get('$httpBackend');
                //var getSale = $injector.get('getSale');
                $httpBackend.when('GET', '/sales/1').respond(sales);
                var route = {current: {params : {Id:1}}};
                SalesListController = $controller('editController', {$scope:scope, $route : route});
            }));
            it('should have 2 items after rendering', function(){
                $httpBackend.expectGET('/sales/1');
            });
        });
    });

