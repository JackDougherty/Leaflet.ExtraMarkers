// set up the map center and zoom level
var map = L.map('map', {
  center: [41.76, -72.67], // [41.5, -72.7] for Connecticut; [41.76, -72.67] for Hartford county or city
  zoom: 14, // zoom 9 for Connecticut; 10 for Hartford county, 12 for Hartford city
});

// optional : customize link to view source code; add your own GitHub repository
map.attributionControl
.setPrefix('View <a href="http://github.com/jackdougherty/leaflet-markers">code on GitHub</a>, created with <a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>');

L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
}).addTo(map);

// default marker
L.marker([41.77, -72.69]).addTo(map);

// single numeric or text icon with variable style; plugin cannot display numeric 0, only textual 0
var singleMarker = L.ExtraMarkers.icon({
  icon: 'fa-number',
  number: 33
});
L.marker([41.77, -72.68], {icon: singleMarker}).addTo(map);

L.marker([41.77, -72.67], {icon: singleMarker}).addTo(map);


// for incremental loop of numeric icons; cannot begin with a zero
for (i = 1; i < 20; i++) {
  var numericMarker = L.ExtraMarkers.icon({
    icon: 'fa-number',
    number: i,
    markerColor: 'blue'
  });
  L.marker([(41.75 + (i * 0.001)), -72.7 + (i * 0.003)], {icon: numericMarker}).addTo(map);
}
