var MapWrapper = function(container, center, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: center,
    zoom: zoom
  });
  this.markers = [];
}

MapWrapper.prototype.addMarker = function(coords){
 var marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
 })
 var infowindow = new google.maps.InfoWindow({
       content: (coords.lat + ", " + coords.lng)
     });
 marker.addListener('click', function(){
  infowindow.open(this.googleMap, marker);
 });
 this.markers.push(marker);
}

MapWrapper.prototype.addClickEvent = function() {
  google.maps.event.addListener(this.googleMap, 'click', function(event){
    console.log(event.latLng.lat());
    console.log(event.latLng.lng());
    var coords = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    }
    this.addMarker(coords);
  }.bind(this));
};

MapWrapper.prototype.bounceMarkers = function() {
  this.markers.forEach(function(marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  })
};

MapWrapper.prototype.move = function() {
  var home = { lat: 57.701950, lng: -3.395924 };
  this.googleMap.setCenter(home);
  this.addMarker(home);
};