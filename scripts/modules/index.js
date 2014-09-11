'use strict';
var app = angular.module('indexModule', ['ngRoute','ui.bootstrap'])

.config(function($routeProvider){
	$routeProvider

	.when('/',{
		templateUrl:'/partial/start.html',
		controller: 'startModule'
	})

	.when('/register',{
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



