define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name kiwiApp.controller:ProductsCtrl
   * @description
   * # ProductsCtrl
   * Controller of the kiwiApp
   */
  angular.module('kiwiApp.controllers.ProductsCtrl', [])
    .controller('ProductsCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
