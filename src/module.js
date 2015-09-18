'use strict';

angular.module('angFireTest', ['ui.router', 'firebase'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {url: '/', templateUrl: 'src/views/home.html', controller: 'homeCtrl'})
}]);