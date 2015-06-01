/*jshint unused: vars */
require.config({
	paths: {
		angular: '../../bower_components/angular/angular',
		'angular-animate': '../../bower_components/angular-animate/angular-animate',
		'angular-cookies': '../../bower_components/angular-cookies/angular-cookies',
		'angular-mocks': '../../bower_components/angular-mocks/angular-mocks',
		'angular-resource': '../../bower_components/angular-resource/angular-resource',
		'angular-route': '../../bower_components/angular-route/angular-route',
		uiRouter: '../../bower_components/angular-ui-router/release/angular-ui-router',
		'angular-sanitize': '../../bower_components/angular-sanitize/angular-sanitize',
		'angular-touch': '../../bower_components/angular-touch/angular-touch',
		bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap',
		uiBootstrap: '../../bower_components/angular-bootstrap/ui-bootstrap-tpls',
		retina: '../../bower_components/retina.js/build/js/retina-1.2.0'
	},
	shim: {
		angular: {
			exports: 'angular'
		},
		uiRouter: {
			deps: [
				'angular'
			]
		},
		'angular-route': [
			'angular'
		],
		'angular-cookies': [
			'angular'
		],
		'angular-sanitize': [
			'angular'
		],
		'angular-resource': [
			'angular'
		],
		'angular-animate': [
			'angular'
		],
		'angular-touch': [
			'angular'
		],
		'angular-mocks': {
			deps: [
				'angular'
			],
			exports: 'angular.mock'
		},
		uiBootstrap: {
			deps: [
				'angular'
			]
		}
	},
	priority: [
		'angular'
	],
	packages: [

	]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
	'angular',
	'app',
	'angular-route',
	'angular-cookies',
	'angular-sanitize',
	'angular-resource',
	'angular-animate',
	'angular-touch',
	'uiRouter',
	'uiBootstrap'
], function(angular, app, ngRoutes, uiRouter, ngCookies, ngSanitize, ngResource, ngAnimate, ngTouch, uiBootstrap) {
	'use strict';
	/* jshint ignore:start */
	var $html = angular.element(document.getElementsByTagName('html')[0]);
	/* jshint ignore:end */
	angular.element().ready(function() {
		angular.resumeBootstrap([app.name]);
	});
});
