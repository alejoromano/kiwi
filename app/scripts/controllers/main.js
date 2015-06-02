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

			$scope.myInterval = 5000;
			$scope.slides = [
				{
					image: 'http://placekitten.com/600/300',
					text: '# BolsaS para andar',
					url: ''
				},
				{
					image: 'http://placekitten.com/600/300',
					text: 'slide 2',
					url: ''
				},
				{
					image: 'http://placekitten.com/600/300',
					text: 'slide 3',
					url: ''
				},
			];

			$scope.data = {};
			$scope.pics = [];
			InstagramAPI.fetchPhotos(function(data){
				$scope.pics = data;
			});

		});
});
