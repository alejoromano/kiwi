define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name kiwiApp.controller:CampaignCtrl
   * @description
   * # CampaignCtrl
   * Controller of the kiwiApp
   */
  angular.module('kiwiApp.controllers.CampaignCtrl', [])
    .controller('CampaignCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
