(function (window, require) {
    'use strict';
    var file, requireModules;
    requireModules = [];

    for (file in window.__karma__.files) {
        if (window.__karma__.files.hasOwnProperty(file)) {
           // console.log('loaded file'+ file);
            if (file.substring(file.length - 26, file.length) === 'salesListControllertest.js') {
                console.log('Added file to testing..');
                requireModules.push(file);
            }
        }
    }

    //requireModules.push('appModule');
    //requireModules.push('mocks');
    deps: requireModules,
    require({
        baseUrl: '',
        paths:{
            'angular': '/base/app/bower_components/angular/angular',
            'angularResource': '/base/app/bower_components/angular-resource/angular-resource',
            'angularMocks': '/base/app/bower_components/angular-mocks/angular-mocks',
            'appModule': '/base/app/scripts/appModule',
            'appRoutes':'/base/app/scripts/appRoutes',
            'services/dependencyResolverFor':'/base/app/scripts/services/dependencyResolverFor',
            'appConfigProvider' : '/base/app/scripts/appConfigProvider',
            'salesListController' : '/base/app/scripts/controllers/salesListController'
        },
        shim:{
            'angular' :{
                exports:'angular'
            },
            'appRoutes': {exports:'appRoutes'},
            'services/dependencyResolverFor' : {exports:'services/dependencyResolverFor'},
            'appModule': {
                deps: ['appRoutes', 'services/dependencyResolverFor'],
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
            'salesListController': {
                deps: ['appModule'],
                exports: 'salesListController'
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