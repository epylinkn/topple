'use strict';

var toppleDirectives = angular.module('toppleDirectives', []);

toppleDirectives.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);
