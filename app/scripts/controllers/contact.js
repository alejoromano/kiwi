define(['angular'], function (angular) {
	'use strict';

	/**
	* @ngdoc function
	* @name kiwiApp.controller:ContactCtrl
	* @description
	* # ContactCtrl
	* Controller of the kiwiApp
	*/
	angular.module('kiwiApp.controllers.ContactCtrl', [])
	.controller('ContactCtrl', function ($scope) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
	});
});
