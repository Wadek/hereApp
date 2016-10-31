var platform = new H.service.Platform({
  app_id: 'kIaIKh6rYjTsSBgM54rU', // // <-- ENTER YOUR APP ID HERE
  app_code: '6EPEOG7HgBT-I-pzWdLwhA', // <-- ENTER YOUR APP CODE HERE
});




var defaultLayers = platform.createDefaultLayers();
var mapContainer = document.getElementById('map-container');


var coordinates = {
  lat: 52.530974, // HERE HQ in Berlin, Germany
  lng: 13.384944
};

var mapOptions = {
  center: coordinates,
  zoom: 14
}

var map = new H.Map(
  mapContainer,
  defaultLayers.normal.map,
  mapOptions);

var marker = new H.map.Marker(coordinates);
map.addObject(marker);

var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
