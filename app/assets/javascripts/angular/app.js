'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
//  'firebase'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'templates/home.html'});
  $routeProvider.when('/play', {
    templateUrl: 'templates/play.html', controller: 'PlayCtrl'
  });
  $routeProvider.otherwise({redirectTo: '/'});
}]);
