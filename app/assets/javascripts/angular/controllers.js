'use strict';

/* Controllers */

angular.module('myApp.controllers', []).controller('PlayCtrl', ['$scope', '$firebase', function($scope, $firebase) {
  var ref = new Firebase("https://compete.firebaseio.com/");
  $scope.messages = $firebase(ref);

  $scope.addMessage = function(e) {
    if (e.keyCode != 13) return;
    $scope.messages.$add({sender: window.username || 'anon', body: $scope.body});
    $scope.body = "";
  };
}]);
