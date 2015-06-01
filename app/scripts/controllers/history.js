define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name kiwiApp.controller:HistoryCtrl
   * @description
   * # HistoryCtrl
   * Controller of the kiwiApp
   */
  angular.module('kiwiApp.controllers.HistoryCtrl', [])
    .controller('HistoryCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
