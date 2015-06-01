/*jshint unused: vars */
define(['angular', 'uiRouter', 'controllers/main', 'controllers/campaign', 'controllers/products', 'controllers/history', 'controllers/contact', 'services/instagramapi']/*deps*/, function (angular, MainCtrl, CampaignCtrl, ProductsCtrl, HistoryCtrl, ContactCtrl, InstagramAPIService)/*invoke*/ {
	'use strict';

	/**
	 * @ngdoc overview
	 * @name kiwiApp
	 * @description
	 * # kiwiApp
	 *
	 * Main module of the application.
	 */
	return angular
		.module('kiwiApp',
			['kiwiApp.controllers.MainCtrl',
			'kiwiApp.controllers.CampaignCtrl',
			'kiwiApp.controllers.ProductsCtrl',
			'kiwiApp.controllers.HistoryCtrl',
			'kiwiApp.controllers.ContactCtrl',
			'kiwiApp.services.InstagramAPI',
			/*angJSDeps*/
			'ngCookies',
			'ngResource',
			'ngSanitize',
			'ngRoute',
			'ngAnimate',
			'ngTouch',
			'ui.router',
			'ui.bootstrap'
		])
		.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
			// For any unmatched url, redirect to /state1
			$urlRouterProvider.otherwise('/home');
			$locationProvider.html5Mode(true);
			$stateProvider
				.state('top', {
					url:'/home',
					views: {
						'top@': {
							templateUrl: 'views/main.html',
							controller: 'MainCtrl'
						}
					}
				})
				.state('campaign', {
					url:'/campaña',
					views: {
						'top@': {
							templateUrl: 'views/campaign.html'
						}
					}
				})
				.state('products', {
					url:'/productos',
					views: {
						'top@': {
							templateUrl: 'views/products.html'
						}
					}
				})
				.state('history', {
					url:'/historia',
					views: {
						'top@': {
							templateUrl: 'views/history.html'
						}
					}
				})
				.state('contact', {
					url:'/contacto',
					abstract: true,
					views: {
						'top@': {
							templateUrl: 'views/contact.html'
						}
					}
				})
				.state('contact.retail', {
					url: '',
					templateUrl: 'views/contact-retail.html'
				})
				.state('contact.wholesale', {
					templateUrl: 'views/contact-wholesale.html'
				});
		});
});
