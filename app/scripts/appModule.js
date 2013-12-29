define(['appRoutes','services/dependencyResolverFor'], function(config, dependencyResolverFor)
{
    var app = angular.module('AngularSampleApp', ['ngResource']);
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
