require.config({
	baseUrl:"scripts/",

	paths:{
		jquery: "thirds/jquery/dist/jquery",
		bootstrap: "thirds/bootstrap/dist/js/bootstrap"
	},

});
require(["jquery"], function(jquery) {
		console.log("Jquery.js loaded!");});

require(["dependencias"], function(){
	console.log("bootstrap & Jquery dependency loaded!");});

