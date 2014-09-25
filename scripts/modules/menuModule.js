app.controller('menuModule', function($scope, $location){
		$scope.toMap = function(){
			$location.url("/map");
		};
	
});	