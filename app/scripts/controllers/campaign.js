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
		$scope.set1 = [
			{ 'thumb':'winter-15-01.jpg' },
			{ 'thumb':'winter-15-02.jpg' },
			{ 'thumb':'winter-15-03.jpg' },
			{ 'thumb':'winter-15-04.jpg' },
			{ 'thumb':'winter-15-05.jpg' },
			{ 'thumb':'winter-15-06.jpg', 'double':true }
		];
		$scope.set2 = [
			{ 'thumb':'winter-15-08.jpg', 'double':true },
			{ 'thumb':'winter-15-11.jpg' },
			{ 'thumb':'winter-15-07.jpg' },
			{ 'thumb':'winter-15-09.jpg' },
			{ 'thumb':'winter-15-10.jpg' },
			{ 'thumb':'winter-15-12.jpg' },
			{ 'thumb':'winter-15-13.jpg' },
			{ 'thumb':'winter-15-14.jpg' }
		];
		$scope.set3 = [
			{ 'thumb':'winter-15-17.jpg', 'double':true },
			{ 'thumb':'winter-15-16.jpg' },
			{ 'thumb':'winter-15-18.jpg' },
			{ 'thumb':'winter-15-15.jpg' }
		];
	});
});
