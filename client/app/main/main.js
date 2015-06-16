'use strict';

angular.module('selfieApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        controller: 'Main',
        templateUrl: 'app/main/main.html'
      });
  });
