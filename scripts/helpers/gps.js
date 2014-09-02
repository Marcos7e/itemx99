var x = document.getElementById("demo");

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
    

    x.style.maxHeight = window.innerHeight+"px";
    var map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);



};

