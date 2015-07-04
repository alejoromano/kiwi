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

			$scope.myInterval = 5000;
			$scope.slides = [
				{
					image: '../../images/slide-01-mochila.jpg',
					text: 'Bolsas para andar',
					state: 'products'
				},
				{
					image: '../../images/slide-02-neceser.jpg',
					text: 'Llevá todo',
					state: 'products'
				},
				{
					image: '../../images/slide-03-morral.jpg',
					text: 'Llevás todo',
					state: 'products'
				}
			];

			$scope.data = {};
			$scope.pics = [];
			InstagramAPI.fetchPhotos(function(data){
				$scope.pics = data;
			});

		});
});
