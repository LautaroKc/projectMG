function initMap(){
    var coord = {lat: -34.542601, lng: -58.711463};
    var map = new google.maps.Map(document.getElementById("map"),{
        center: coord,
        zoom: 8,
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}