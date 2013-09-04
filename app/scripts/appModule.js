define(['appRoutes','services/dependencyResolverFor'], function(config, dependencyResolverFor)
{
    var app = angular.module('AngularSampleBhoomiApp', ['ngResource']);
    //Here the controllerProvider's are set in lazy.controller, when running the app through firefox it calls config and the providers are set
    //While in unit test this is not being called and hence no controllers are initialized.
    //Trying overcome this issue I tried creating appConfigProvider. A service which will register the controllerprovider in the app.
    //How and where to call this service?
    app.config(
        [
            '$routeProvider',
            '$locationProvider',
            '$controllerProvider',
            '$compileProvider',
            '$filterProvider',
            '$provide',

            function($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide)
            {
                app.lazy =
                {
                    controller : $controllerProvider.register,
                    directive  : $compileProvider.directive,
                    filter     : $filterProvider.register,
                    factory    : $provide.factory,
                    service    : $provide.service
                };
                if(config.routes !== undefined)
                {
                    angular.forEach(config.routes, function(route, path)
                    {
                        $routeProvider.when(path,
                            {templateUrl:route.templateUrl, resolve:dependencyResolverFor(route.dependencies)});
                    });
                }
                if(config.defaultRoutePaths !== undefined)
                {
                    $routeProvider.otherwise({redirectTo:config.defaultRoutePaths});
                }
            }
        ]);

    return app;
});
