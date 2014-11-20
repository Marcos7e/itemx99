app.controller('loginModule', function($scope, $http,$location,$timeout, login){

	$scope.userLoginData ={
		userId : "",
		passwd : ""
	};

	$scope.userHistorial={};

	$scope.isPending = true;

$scope.logear = function logear(){
	 login.setUserId($scope.userLoginData.userId);

	 $http.post('/donelogin/'
	 	+$scope.userLoginData.userId+'/'
	 	+$scope.userLoginData.passwd).success(function(data){
	 		login.setUserId(data.uName);
	 		login.setUserName(data.uname);
	 		login.setIsLoged(true);
	 });

	 	$http.post('/getPendingMsg/'
		+$scope.userLoginData.userId+'/'
		+$scope.isPending).success(function(data){
			$scope.userHistorial = data;
			login.setPendingMsg(data.length);
			$location.url("/");
	});

	 };

$scope.cancelar = function cancelar(){
	window.location.replace('/');
};


});