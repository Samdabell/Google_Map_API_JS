// var moveMap = function(coords){
//   var mapDiv = document.querySelector("#main-map");
//   var zoom = 18;
//   var newMap = new MapWrapper(mapDiv, coords, zoom);
// }

var initialize = function(){
  var center = { lat: 55.857103, lng: -4.243951 };
  var zoom = 18;
  var mapDiv = document.querySelector("#main-map");
  var mainMap = new MapWrapper(mapDiv, center, zoom);

  mainMap.addMarker(center);

  mainMap.addClickEvent();

  var button = document.querySelector("#bounce-button");
  button.addEventListener("click", mainMap.bounceMarkers.bind(mainMap));

  var home = { lat: 57.701950, lng: -3.395924 };
  var homeButton = document.querySelector("#home-button");
  homeButton.addEventListener("click", mainMap.move.bind(mainMap));
}

window.addEventListener("load", initialize);

