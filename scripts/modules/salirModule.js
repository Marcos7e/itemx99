app.controller('salirModule',function($location, $log, login){
		login.setUserName("n/a");
		login.setUserEmail("n/a");
		login.setUserId("n/a");
		login.setIsLoged(false);

		$log.info("Deslogeado a las "+new Date());

		$location.url("/");

});