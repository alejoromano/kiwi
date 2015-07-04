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
				'img':'INV15-081.PNG',
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
				'name':'Bolso',
				'img':'INV15-071.JPG',
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
				'name':'Morral',
				'img':'INV15-027.PNG',
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
				'name':'Mochila',
				'img':'INV15-005.PNG',
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
				'name':'Bolso',
				'img':'INV15-019.PNG',
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
				'name':'Mochila',
				'img':'INV15-003.PNG',
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
				'name':'Bolso',
				'img':'INV15-020.PNG',
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
				'name':'Bolso',
				'img':'INV15-042.JPG',
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
				'img':'INV15-078.PNG',
				'color':'Yema/Negro',
				'bk': [
					{'pos':'top','clr':'red'},
					{'pos':'right','clr':'blue'},
					{'pos':'bottom','clr':'pink'},
					{'pos':'left','clr':'yellow'},
				]
			},
			{	'id':'INV15-025',
				'special': false,
				'name':'Morral',
				'img':'INV15-025.PNG',
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
				'name':'Bolso',
				'img':'INV15-033.PNG',
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
				'name':'Bolso',
				'img':'INV15-037.PNG',
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
				'name':'Bolso',
				'img':'INV15-073.PNG',
				'color':'Mostaza/Negro',
				'bk': [
					{'pos':'top','clr':'red'},
					{'pos':'right','clr':'pink'},
					{'pos':'bottom','clr':'pink'},
					{'pos':'left','clr':'pink'},
				]
			},
			{	'id':'INV15-076',
				'special': false,
				'name':'Bolso',
				'img':'INV15-076.PNG',
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
