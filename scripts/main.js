require.config({
	baseUrl:"scripts/",
	paths:{
		jquery: "thirds/jquery/dist/jquery",
		bootstrap: "thirds/bootstrap/dist/js/bootstrap",
		angular: "thirds/angular/angular"
	}
});
require(["jquery"], function(jquery) {
		console.log("Jquery.js loaded!");});

require(["dbootstrap"], function(){
	console.log("bootstrap & Jquery dependency loaded!");
});

require(["angular"],function(angular){
	console.log("angular.js loaded!");
});