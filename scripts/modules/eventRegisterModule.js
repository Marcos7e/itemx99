app.controller('eventRegisterModule', function($log, $location, $scope ,$http){
	$log.info("instancia de Registro de Evento por lista");
	getLocation();

		$scope.evento;
		$scope.comp;
		
		$scope.guardar = function(){
		$location.url("/");
		}


});