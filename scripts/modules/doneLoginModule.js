app.controller('doneLoginModule', function($scope, $http,$log, Login){
	$scope.serverData = {};

	$http.get('/marcos').success(function(data){
		
		Login.userData.uName = data.uName;
		Login.UserData.uname = data.uname;
		$log.info("estoy funcionando?");
	})
	.error(function(data){
		console.log("Error en doneModule angular");
	});


});