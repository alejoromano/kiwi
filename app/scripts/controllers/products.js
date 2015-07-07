define(['angular'], function (angular) {
	'use strict';

	/**
	* @ngdoc function
	* @name kiwiApp.controller:ProductsCtrl
	* @description
	* # ProductsCtrl
	* Controller of the kiwiApp
	*/
	angular.module('kiwiApp.controllers.ProductsCtrl', [])
	.controller('ProductsCtrl', function ($scope) {

		$scope.products = [
			{	'id':'INV15-081',
				'special': false,
				'name':'Neceser',
				'img':'INV15-081.png',
				'color':'Magenta/Azul',
				'bk': [
					{'pos':'top','clr':'white'},
					{'pos':'right','clr':'blue'},
					{'pos':'bottom','clr':'blue'},
					{'pos':'left','clr':'white'},
				]
			},
			{	'id':'INV15-071',
				'special': true,
				'name':'Bolsa Fiji',
				'img':'INV15-071.jpg',
				'color':'Natural/Azul/Rojo',
				'bk': [
					{'pos':'top','clr':'pink'},
					{'pos':'right','clr':'pink'},
					{'pos':'bottom','clr':'blue'},
					{'pos':'left','clr':'blue'},
				]
			},
			{	'id':'INV15-027',
				'special': false,
				'name':'Morral Papua',
				'img':'INV15-027.png',
				'color':'Camel/Negro',
				'bk': [
					{'pos':'top','clr':'red'},
					{'pos':'right','clr':'blue'},
					{'pos':'bottom','clr':'pink'},
					{'pos':'left','clr':'yellow'},
				]
			},
			{	'id':'INV15-005',
				'special': false,
				'name':'Mochila Samoa',
				'img':'INV15-005.png',
				'color':'Azul/Blanco',
				'bk': [
					{'pos':'top','clr':'pink'},
					{'pos':'right','clr':'white'},
					{'pos':'bottom','clr':'white'},
					{'pos':'left','clr':'pink'},
				]
			},
			{	'id':'INV15-019',
				'special': false,
				'name':'Cartera Guinea',
				'img':'INV15-019.png',
				'color':'Borravino/Magenta',
				'bk': [
					{'pos':'top','clr':'blue'},
					{'pos':'right','clr':'blue'},
					{'pos':'bottom','clr':'red'},
					{'pos':'left','clr':'red'},
				]
			},
			{	'id':'INV15-003',
				'special': false,
				'name':'Mochila Samoa',
				'img':'INV15-003.png',
				'color':'Negro/Blanco',
				'bk': [
					{'pos':'top','clr':'yellow'},
					{'pos':'right','clr':'blue'},
					{'pos':'bottom','clr':'blue'},
					{'pos':'left','clr':'pink'},
				]
			},
			{	'id':'INV15-020',
				'special': false,
				'name':'Cartera Guinea',
				'img':'INV15-020.png',
				'color':'Negro/Camel',
				'bk': [
					{'pos':'top','clr':'pink'},
					{'pos':'right','clr':'yellow'},
					{'pos':'bottom','clr':'yellow'},
					{'pos':'left','clr':'pink'},
				]
			},
			{	'id':'INV15-042',
				'special': true,
				'name':'Bolso Polinesia',
				'img':'INV15-042.jpg',
				'color':'Azul/Magenta',
				'bk': [
					{'pos':'top','clr':'blue'},
					{'pos':'right','clr':'blue'},
					{'pos':'bottom','clr':'pink'},
					{'pos':'left','clr':'pink'},
				]
			},
			{	'id':'INV15-078',
				'special': false,
				'name':'Neceser',
				'img':'INV15-078.png',
				'color':'Naranja/Negro',
				'bk': [
					{'pos':'top','clr':'red'},
					{'pos':'right','clr':'blue'},
					{'pos':'bottom','clr':'pink'},
					{'pos':'left','clr':'yellow'},
				]
			},
			{	'id':'INV15-025',
				'special': false,
				'name':'Morral Papua',
				'img':'INV15-025.png',
				'color':'Negro/Blanco',
				'bk': [
					{'pos':'top','clr':'pink'},
					{'pos':'right','clr':'pink'},
					{'pos':'bottom','clr':'blue'},
					{'pos':'left','clr':'pink'},
				]
			},
			{	'id':'INV15-033',
				'special': false,
				'name':'Bolso Polinesia',
				'img':'INV15-033.png',
				'color':'Negro/Blanco',
				'bk': [
					{'pos':'top','clr':'pink'},
					{'pos':'right','clr':'blue'},
					{'pos':'bottom','clr':'pink'},
					{'pos':'left','clr':'blue'},
				]
			},			
			{	'id':'INV15-037',
				'special': false,
				'name':'Bolso Polinesia',
				'img':'INV15-037.png',
				'color':'Borravino/Negro',
				'bk': [
					{'pos':'top','clr':'white'},
					{'pos':'right','clr':'white'},
					{'pos':'bottom','clr':'blue'},
					{'pos':'left','clr':'white'},
				]
			},

			{	'id':'INV15-073',
				'special': false,
				'name':'Bolsa Fiji',
				'img':'INV15-073.png',
				'color':'Naranja/Negro',
				'bk': [
					{'pos':'top','clr':'red'},
					{'pos':'right','clr':'pink'},
					{'pos':'bottom','clr':'pink'},
					{'pos':'left','clr':'pink'},
				]
			},
			{	'id':'INV15-076',
				'special': false,
				'name':'Bolsa Fiji',
				'img':'INV15-076.png',
				'color':'Oliva/Negro',
				'bk': [
					{'pos':'top','clr':'pink'},
					{'pos':'right','clr':'red'},
					{'pos':'bottom','clr':'pink'},
					{'pos':'left','clr':'yellow'},
				]
			},

			

		];
		//['blue', 'yellow', 'white', 'pink'];

	});
});
