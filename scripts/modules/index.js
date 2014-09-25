'use strict';
var app = angular.module('indexModule', ['ngRoute','ui.bootstrap'])

.config(function($routeProvider){
	$routeProvider

	.when('/',{
		title:"Bienvenido!",
		templateUrl:'/partial/start.html',
		controller: 'startModule'
	})

	.when('/register',{
		title:"Registrate con Nosotros!",
		templateUrl: 'partial/userRegister.html',
		controller:'userRegisterModule'
	})

	.when('/map',{
		templateUrl: 'partial/map.html',
		controller:'mapModule'
	})


	.otherwise({
		redirectTo: '/'
	});

});



