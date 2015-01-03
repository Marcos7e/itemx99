app.controller('mapModule', function($scope,$http,$log,$location,login){
		$scope.datos={};
		$scope.isPending = true;
		getLocation();


	$http.post('/getAllEvents').success(function(data){
		$scope.datos=data;
	});

	$scope.buyTicket = function(evento){
		if(login.getIsLoged()){
		$scope.eventoSelect = evento;
		$log.info( login.getUserName()+" Ha seleccionado "+evento.evento+" para comprarlo...");

		$http.post('/buyTicket/'
			+$scope.eventoSelect.evento+'/'
			+$scope.eventoSelect.company+'/'
			+$scope.eventoSelect.price+'/'
			+login.getUserName()+'/'
			+login.getUserId()+'/'
			+ new Date()+'/'
			+$scope.isPending
			).success(function(data){
				 login.setPendingMsg(login.getPendingMsg()+1);
				 $location.url("/map");
			});

		}
		else
			{$location.url("/login");}
};	

	$scope.onDivSelected = function(evento){
		alert(evento.lat+" "+evento.lng);

	};

});