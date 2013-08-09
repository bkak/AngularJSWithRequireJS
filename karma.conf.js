// Karma configuration
// Generated on Wed Aug 07 2013 16:44:33 GMT+0530 (India Standard Time)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
        'app/bower_components/angular/angular.js',
        'app/bower_components/angular-resource/angular-resource.js',
        'app/bower_components/angular-mocks/angular-mocks.js',
        {pattern: 'app/scripts/*.js', included: false},
        {pattern: 'app/scripts/**/*.js', included: false},
        {pattern: 'test/spec/controllers/salesListControllertest.js', included: false},
        'app/scripts/services/dependencyResolverFor.js',
       // 'app/scripts/appModule.js',
        //'/app/scripts/controllers/salesListController.js',
        'test/test-main.js'

    ],


    // list of files to exclude
   // exclude: [
   //   'app/scripts/appBootstrap.js'
   // ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Firefox'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,
      plugins: [
          'karma-requirejs',
          'karma-junit-reporter',
          'karma-jasmine',
          'karma-firefox-launcher'
      ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
