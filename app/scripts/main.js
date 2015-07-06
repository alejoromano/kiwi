/*jshint unused: vars */
require.config({
	paths: {
		angular: '../../bower_components/angular/angular',
		'angular-animate': '../../bower_components/angular-animate/angular-animate',
		'angular-cookies': '../../bower_components/angular-cookies/angular-cookies',
		'angular-mocks': '../../bower_components/angular-mocks/angular-mocks',
		'angular-resource': '../../bower_components/angular-resource/angular-resource',
		'angular-route': '../../bower_components/angular-route/angular-route',
		'angular-ui-router': '../../bower_components/angular-ui-router/release/angular-ui-router',
		'angular-sanitize': '../../bower_components/angular-sanitize/angular-sanitize',
		'angular-touch': '../../bower_components/angular-touch/angular-touch',
		'angular-bootstrap': '../../bower_components/angular-bootstrap/ui-bootstrap-tpls',
		'angular-retina': '../../bower_components/angular-retina/dist/angular-retina'
	},
	shim: {
		angular: {
			exports: 'angular'
		},
		'angular-ui-router': {
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
		'angular-bootstrap': {
			deps: [
				'angular'
			]
		},
		'angular-retina': {
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
	'angular-ui-router',
	'angular-bootstrap',
	'angular-retina',
	], function(angular, app, ngRoutes, ngCookies, ngSanitize, ngResource, ngAnimate, ngTouch, ngRetina) {
	'use strict';
	/* jshint ignore:start */
	var $html = angular.element(document.getElementsByTagName('html')[0]);
	/* jshint ignore:end */
	angular.element().ready(function() {
		angular.resumeBootstrap([app.name]);
	});
});
