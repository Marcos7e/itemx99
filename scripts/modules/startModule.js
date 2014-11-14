app.controller('startModule', function($scope) {

  $scope.myInterval = 5000;
  var slides = $scope.slides = [
  
     { image: '/resources/carousel/1.jpg',
    text:'Esto es Jonia!'},

     { image: '/resources/carousel/2.jpg',
    text:'Esto es Freijorl!'},

     { image: '/resources/carousel/3.jpg',
    text:'Esto es Una Playa!'},

     { image: '/resources/carousel/4.jpg',
    text:'Esto es un Atardecer!'},

     { image: '/resources/carousel/5.jpg',
    text:'Esto es un Molino!'},

     { image: '/resources/carousel/6.jpg',
    text:'Esto es un puente!'}

  ];

  
});

