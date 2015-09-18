'use strict';

angular.module('angFireTest')

.controller('homeCtrl', function($scope, $state, $firebaseArray) {
  var ref = new Firebase('https://    YOURFIREBASE    .firebaseio.com/messages');

  $scope.messages = $firebaseArray(ref);

  $scope.addMessage = function(message) {
    $scope.messages.$add( {text: message} );
  };

  console.log('home loaded');
});
