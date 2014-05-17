'use strict';

var toppleFilters = angular.module('toppleFilters', []);

toppleFilters.filter('interpolate', ['version', function(version) {
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, version);
  };
}]);
