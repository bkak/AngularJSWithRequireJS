require.config({
    baseUrl: '/scripts',
    paths: {}
});

require
    (['appModule' ],function(app){
            angular.bootstrap(document, ['AngularSampleApp']);
        }
    );