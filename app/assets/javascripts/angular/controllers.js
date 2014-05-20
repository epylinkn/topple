'use strict';

var toppleControllers = angular.module('toppleControllers', [])

toppleControllers.controller('PlayCtrl', ['$scope', 'Card', function($scope, Card) {
  // var ref = new Firebase("https://compete.firebaseio.com/");
  // $scope.messages = $firebase(ref);
  $scope.cards = Card.query();
  $scope.moves = 0;
  $scope.turns = 0;
  $scope.matches = [];
  $scope.up = [];
  $scope.last = '-1';

  $scope.faceUp = function(card) {
    return $scope.matched(card.value) || $scope.up.indexOf(card.id) >= 0;
  }

  $scope.matched = function(value) {
    return ($scope.matches.indexOf(value) >= 0);
  }

  $scope.flip = function(card) {
    $scope.moves++;
    $scope.turns = Math.floor($scope.moves / 2);
    $scope.up.push(card.id);

    // second card
    if ($scope.moves % 2 == 0) {
      if ($scope.last == card.value) {
        $scope.matches.push(card.value);
      }
    } else {
      $scope.up = [card.id];
      $scope.last = card.value;
    }
  }

  $scope.addMessage = function(e) {
    if (e.keyCode != 13) return;
    $scope.messages.$add({sender: window.username || 'anon', body: $scope.body});
    $scope.body = "";
  };
}]);

toppleControllers.controller('ChatCtrl', ['$scope', '$firebase', function($scope, $firebase) {
  var ref = new Firebase("https://compete.firebaseio.com/");
  $scope.messages = $firebase(ref);

  $scope.addMessage = function(e) {
    if (e.keyCode != 13) return;
    $scope.messages.$add({sender: window.username || 'anon', body: $scope.body});
    $scope.body = "";
  };
}]);
