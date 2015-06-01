define(['angular'], function (angular) {
	'use strict';

	/**
	 * @ngdoc service
	 * @name kiwiApp.InstagramAPI
	 * @description
	 * # InstagramAPI
	 * Service in the kiwiApp.
	 */
	angular.module('kiwiApp.services.InstagramAPI', [])
	.service('InstagramAPI', function ($http) {
	// AngularJS will instantiate a singleton by calling "new" on this function
		var clientId = '26e5b0c85d054527826c25e2efb2ef53';
		var userId = '646979085';
		return {
			fetchPhotos: function(callback){
				var endpoint = 'https://api.instagram.com/v1/users/' + userId + '/media/recent/?';
				endpoint += '?count=6';
				endpoint += '&client_id=' + clientId;
				endpoint += '&callback=JSON_CALLBACK';
				$http.jsonp(endpoint).success(function(response){
					callback(response.data);
				});
			}
		};
	});
});
