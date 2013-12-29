define([], function()
{
    return {
        defaultRoutePath: '/',
        routes: {
            '/': {
                templateUrl: 'views/main.html'
            },
            '/new': {
                templateUrl: 'views/SalesEdit.html',
                dependencies: [
                    'services/salesService',
                    'controllers/salesController',
                    'directives/appDirective'
                ]
                ,
                resolve: {
                    sale: function(getSale) {
                        return getSale();
                    }
                }
            },
            '/edit/:Id': {
                templateUrl: 'views/SalesEdit.html',
                    dependencies: [
                        'services/salesService',
                        'controllers/salesController',
                        'directives/appDirective'
                    ]
            },
            '/list': {
                templateUrl: 'views/saleslist.html',
                dependencies: [
                    'services/salesService',
                    'controllers/salesListController',
                    'directives/appDirective'
                ]
            }
        }
    }
});