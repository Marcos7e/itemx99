app.controller('userRegisterModule',function ($scope) {
 
  $scope.initDate = function() {
    $scope.dt = new Date('1990-01-01');
  };
  $scope.initDate();

 $scope.minDate ="'1960-01-01'";
 $scope.maxDate ="'2000-01-02'";

   $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };


 
  $scope.format = 'dd-MMMM-yyyy';
 
});

 