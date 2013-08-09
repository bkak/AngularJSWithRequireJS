'use strict';

angular.module('AngularSampleBhoomiApp')
  .filter('salesFilter', function () {
    return function (input) {
      return 'salesFilter filter: ' + input;
    };
  });
