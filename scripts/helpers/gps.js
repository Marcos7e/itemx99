//var x = document.getElementById("demo");
//var info = document.getElementById("latlong");

var coordenadas = new Array();

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(data) {
    var mapOptions={
        center: new google.maps.LatLng(data.coords.latitude, data.coords.longitude),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    var map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);

    google.maps.event.addListener(map, 'click', function(e){
    placeMarker(e.latLng, map);

});

   
};

  

  function placeMarker(position, map) {
   var marker = new google.maps.Marker({
    position: position,
    map: map,
    animation: google.maps.Animation.DROP
  });

   coordenadas.push(position);
  
   document.getElementById("latlong").innerHTML = coordenadas;

}

google.maps.event.addDomListener(window, 'load', document.ready);
