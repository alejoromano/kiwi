define(['angular'], function (angular) {
	'use strict';

	/**
	 * @ngdoc function
	 * @name kiwiApp.controller:MainCtrl
	 * @description
	 * # MainCtrl
	 * Controller of the kiwiApp
	 */
	angular.module('kiwiApp.controllers.MainCtrl', [])
		.controller('MainCtrl', function ($scope, InstagramAPI) {
			$scope.awesomeThings = [
				'HTML5 Boilerplate',
				'AngularJS',
				'Karma'
			];

			$scope.data = {};
			$scope.pics = [];

			InstagramAPI.fetchPhotos(function(data){
				$scope.pics = data;
			});

		});
});
