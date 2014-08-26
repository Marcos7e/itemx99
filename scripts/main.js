require.config({
	baseUrl:"scripts/",
	paths:{
		jquery: "thirds/jquery/dist/jquery",
		bootstrap: "thirds/bootstrap/dist/js/bootstrap",
		//angular: "thirds/angular/angular"
		//main:"helpers/mainModule"
	}
});
require(["jquery"], function(jquery) {
		console.log("Jquery.js loaded!");});


require(["dependencias"], function(){
	console.log("bootstrap & Jquery dependency loaded!");
});

//require(["angular"], function(main){
	//console.log("angularJS loaded!");
//});

require(["helpers/mainModule"], function(main){
	//console.log("angular_main_module loaded!");
});
