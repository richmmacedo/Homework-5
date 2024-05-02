function initMap() {
    var location = {lat: 39.95284, lng: -75.19115};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}