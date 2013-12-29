'use strict';


define(['appModule'],  function(myApp){
    myApp.directive('appDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the appDirective directive');
      }
    };
  });
});