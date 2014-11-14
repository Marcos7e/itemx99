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
	.when('/login',{
		templateUrl: 'partial/login.html',
		controller:'loginModule'
	})
	.when('/donelogin',{
		templateUrl: 'partial/donelogin.html',
		controller:'doneLoginModule'
	})



	.otherwise({
		redirectTo: '/'
	});

});

	app.factory('login', function(){
		
		var sesionData={
			uname: 	"n/a",
 			email:  "n/a",
			uName:  "n/a",
			isLoged: false
			};

		return{
			getUserName: function(){
				return sesionData.uName;
			},
			setUserName: function(user){
				sesionData.uName =user;
			},
			getUserEmail: function(){
				return sesionData.email;
			},
			setUserEmail: function(em){
				sesionData.email = em;
			},
			getUserId: function(){
				return sesionData.uname;
			},
			setUserId: function(id){
				sesionData.uname =id;
			},
			getIsLoged: function(){
				return sesionData.isLoged;
			},
			setIsLoged: function(iL){
				sesionData.isLoged =iL;
			}

		};


	});



