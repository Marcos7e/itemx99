var app = angular.module("mainController",['ngRoute','ngResource','ui.bootstrap']);
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

app.controller('home',function(){
	console.log("cargó partial home");
});

app.controller('offer',function(){
	console.log("cargó partial offer");
});

app.controller("homeCarousel", function($scope){
  $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 2000 + slides.length;
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/600',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }
});

app.controller("getData",function($scope,$http, dataResource){

	
});

	

		
		

