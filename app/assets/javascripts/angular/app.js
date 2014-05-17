'use strict';

var toppleApp = angular.module('toppleApp', [
  'ngRoute',

  'toppleControllers',
  'toppleFilters',
  'toppleServices',
  'toppleDirectives',

//  'firebase'
]);

toppleApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: '/templates/play.html',
      controller: 'PlayCtrl'
    });
  $routeProvider.otherwise({redirectTo: '/'});
}]);
