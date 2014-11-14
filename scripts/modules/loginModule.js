app.controller('loginModule', function($scope, $http,$location,$timeout, login){

	$scope.userLoginData ={
		userId : "",
		passwd : ""
	};

$scope.logear = function logear(){
	 login.setUserId($scope.userLoginData.userId);

	 $http.post('/donelogin/'
	 	+$scope.userLoginData.userId+'/'
	 	+$scope.userLoginData.passwd).success(function(data){
	 		login.setUserId(data.uName);
	 		login.setUserName(data.uname);
	 		login.setIsLoged(true);
	 		console.log(login.getUserId());
			$location.url("/");
	 
	 });
	//	window.location.replace('/');

	 };

$scope.cancelar = function cancelar(){
	window.location.replace('/');
};


});