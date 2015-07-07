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
	.controller('ContactCtrl', function ($scope, $http) {
		
		$scope.result = 'hidden';
		// $scope.resultMessage;
		$scope.user = {}; //user is an object holding the name, email, subject, and message
		$scope.submit = function(contactform) {
			$scope.user.form = contactform.$name;
			$scope.submitButtonDisabled = true;
			if (contactform.$valid && !$scope.user.test) {
				$http({
					method  : 'POST',
					url     : 'contact-form.php',
					data  : $.param($scope.user),
					headers : { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }  //set the headers so angular passing info as form data (not request payload)
				}).success(function(data, status, headers, config){
					console.log(data);
					console.log(status);
					console.log(headers);
					console.log(config);
					if (data.success) { //success comes from the return json object
						$scope.submitButtonDisabled = true;
						$scope.resultMessage = data.message;
						$scope.result='bg-success';
					} else {
						// server errors
						$scope.submitButtonDisabled = false;
						$scope.resultMessage = data.message;
						$scope.result='bg-danger';
					}
				}).error(function(data, status) {
					$scope.result='bg-danger';
					$scope.resultMessage = status + ': ' + data;
				});
			} else {
				$scope.submitButtonDisabled = false;
				$scope.resultMessage = 'Failed <img src="http://www.chaosm.net/blog/wp-includes/images/smilies/icon_sad.gif" alt=":(" class="wp-smiley">  Please fill out all the fields.';
				$scope.result='bg-danger';
			}
		};

	});
});
