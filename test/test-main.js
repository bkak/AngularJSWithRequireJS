(function (window, require) {
    'use strict';
    var file, requireModules;
    requireModules = [];

    for (file in window.__karma__.files) {
        if (window.__karma__.files.hasOwnProperty(file)) {
            if (file.substring(file.length - 26, file.length) === 'salesListControllertest.js' ||
                file.substring(file.length - 22, file.length) === 'salesControllertest.js') {
                    console.log('Added file to testing..'+ file);
                    requireModules.push(file);
            }
        }
    }
    require({
        baseUrl: '',
        paths:{
            'angular': '/base/app/bower_components/angular/angular',
            'angularResource': '/base/app/bower_components/angular-resource/angular-resource',
            'angularMocks': '/base/app/bower_components/angular-mocks/angular-mocks',
            'appModule': '/base/test/spec/lazyMock',
            'appConfigProvider' : '/base/app/scripts/appConfigProvider',
            'services/salesService' : '/base/app/scripts/services/salesService',
            'salesListController' : '/base/app/scripts/controllers/salesListController',
            'salesController' : '/base/app/scripts/controllers/salesController'
        },
        shim:{
            'angular' :{
                exports:'angular'
            },
            'appModule': {
                exports: 'appModule'
            },
            'angularResource': {
                deps: ['angular'],
                exports: 'angularResource'
            },
            'angularMocks': {
                deps: ['angularResource'],
                exports: 'angularMocks'
            },
            'appConfigProvider': {
                deps: ['appModule'],
                exports: 'appConfigProvider'
            },
            'services/salesService' : {
                deps: ['appModule'],
                exports: 'services/salesService'
            },
            'salesListController': {
                deps: ['appModule'],
                exports: 'salesListController'
            },
            'salesController': {
                deps: ['appModule'],
                exports: 'salesController'
            }
        }
    }, requireModules, function () {
        window.__karma__.start();
    }, function (err) {
        var failedModules = err.requireModules;
        console.log("err", err);

        if (failedModules && failedModules[0]) {
            throw new Error("Module could not be loaded: " + failedModules);
        } else {
            throw new Error("unknown error:" + err);
        }
    });
}(window, require));

/*
var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        //console.log(file);
        if (/spec\/controllers\/salesListController.js$/.test(file)) {
            tests.push(file);
        }
    }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/app',
    paths: {
        'angular': '/bower_components/angular/angular',
        'angularResource': '/bower_components/angular-resource/angular-resource',
        'angularMocks': '/bower_components/angular-mocks/angular-mocks',
       // 'appModule': 'app/scripts/appModule',
        //'appRoutes':'app/scripts/appRoutes',
        'services/dependencyResolverFor':'/scripts/services/dependencyResolverFor'
    },

    shim: {
        'angular' :{
            exports:'angular'
        },
       // 'appModule': {
       //     deps: ['appRoutes', 'services/dependencyResolverFor'],
       //     exports: 'appModule'
       // },
        'angularResource': {
            deps: ['angular'],
            exports: 'angularResource'
        },
        'angularMocks': {
            deps: ['angularResource'],
            exports: 'angularMocks'
        }
    },
    // ask Require.js to load these files (all our tests)
    deps: tests,
    // start test run, once Require.js is done
    callback: window.__karma__.start
});

   */
