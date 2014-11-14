app.controller('loginModalCtrl', function($scope, $http, $log){

	$scope.open = function(){

		var modalInstance = $modal.open({
		templateUrl: '/partial/login_modal.html',
		controller: 'ModalInstanceCtrl',
		size: 'lg'
});


		modalInstance.result.then(function()){
			$log.info("modal dismissed at : "+ new Date());
		}

	};

});



