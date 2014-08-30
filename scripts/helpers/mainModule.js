var app = angular.module("mainController",['ngRoute','ngResource']);
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


	

		
		

