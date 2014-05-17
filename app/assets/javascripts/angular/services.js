'use strict';

var toppleServices = angular.module('toppleServices', ['ngResource']);

toppleServices.factory('Card', ['$resource', function($resource) {
  return $resource('/cards/:cardId', { cardId: '@id' });
}]);
