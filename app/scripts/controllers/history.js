define(['angular'], function (angular) {
	'use strict';

	/**
	 * @ngdoc function
	 * @name kiwiApp.controller:HistoryCtrl
	 * @description
	 * # HistoryCtrl
	 * Controller of the kiwiApp
	 */
	angular.module('kiwiApp.controllers.HistoryCtrl', [])
	.controller('HistoryCtrl', function ($scope) {
		$scope.histories = [
			{	'subject': 'Kiwi',
				'cols': 'col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6',
				'title': 'Rescata el trabajo artesanal desde el diseño de sus estampas.',
				'body': 'Las lonetas de algodón y el cuero vacuno, materiales nobles y perdurables, principal característica de nuestros productos, brindan el marco ideal para nuestras estampas.',
				'icon': 'history-01-icon.png',
				'img': 'history-01.jpg'
			},
			{	'subject': 'Carola Rivas',
				'cols': 'col-sm-offset-1 col-sm-10 col-lg-offset-2 col-lg-8',
				'title': 'De su mano y su pasión por los animales, nacen temporada a temporada distintas floras & faunas.',
				'body': 'Diseñadora de Indumentaria y Diseñadora Textil de la Universidad de Buenos Aires, ilustra las temáticas y personajes, produciendo motivos particulares para cada temporada.',
				'icon': 'history-02-icon.png',
				'img': 'history-02.jpg'
			},
			{	'subject': 'Trabajo Artesanal',
				'cols': 'col-sm-offset-1 col-sm-10',
				'title': 'Fundamental en nuestros productos, realizamos la tizada, el corte, y la serigrafía nosotros mismos.',
				'body': 'Para la confección buscamos talleres independientes de pequeña escala, colaborando en su crecimiento y garantizando tanto las condiciones laborales como la calidad del trabajo realizado.',
				'icon': 'history-03-icon.png',
				'img': 'history-03.jpg'
			}
		];
	});
});
