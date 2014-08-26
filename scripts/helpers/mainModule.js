define(["thirds/angular/angular",
		"thirds/angular/angular-route",
		"thirds/angular/angular-resource"],
		function($) {
		return console.log("cargando...");
		});

var app = angular.module('mainController',['ngRoute','ngResource']);
app.config(function ($routeProvider){

	$routeProvider.when("/home",{
		controller: "home",
		templateUrl: "partial/home.html"
	});

	$routeProvider.when("/offer",{
		controller:"offer",
		templateUrl:"partial/offer.html"
	});

	$routeProvider.otherwise({redirectTo:"/home"});	

});

app.controller("home",function($scope){});
app.controller("offer",function($scope){});