var platform = new H.service.Platform({
  app_id: 'kIaIKh6rYjTsSBgM54rU', // // <-- ENTER YOUR APP ID HERE
  app_code: '6EPEOG7HgBT-I-pzWdLwhA', // <-- ENTER YOUR APP CODE HERE
});




var defaultLayers = platform.createDefaultLayers();
var mapContainer = document.getElementById('map-container');

var map = new H.Map(
  mapContainer,
  defaultLayers.normal.map);

var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));