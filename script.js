// set up the map center and zoom level
var map = L.map('map', {
  center: [41.76, -72.67],
  zoom: 14
});

// optional : customize link to view source code; add your own GitHub repository
map.attributionControl
.setPrefix('View <a href="http://github.com/jackdougherty/Leaflet.ExtraMarkers/index.html">code on GitHub</a>, created with <a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>');

L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
}).addTo(map);

// default Leaflet blue marker (no custom icon)
L.marker([41.77, -72.69]).addTo(map);

// single Leaflet.ExtraMarkers with Font-Awesome coffee icon; prefix required
var redMarker = L.ExtraMarkers.icon({
  icon: 'fa-coffee',
  markerColor: 'red',
  shape: 'square',
  prefix: 'fa'
});
L.marker([41.77, -72.68], {icon: redMarker,}).addTo(map);

// single numeric or textual icon: use 'fa-number' but no prefix property
// plugin cannot display numeric 0, only textual 0
var singleMarker = L.ExtraMarkers.icon({
  icon: 'fa-number',
  number: 44,
  markerColor: 'green-dark'
});
L.marker([41.77, -72.67], {icon: singleMarker}).addTo(map);

// single numeric or text icon with style written into L.marker; default color is red
L.marker([41.77, -72.66], {icon: L.ExtraMarkers.icon({
    icon: 'fa-number',
    number: 'A3'
  })
}).addTo(map);

// for incremental loop of numeric icons
for (i = 1; i < 20; i++) {
  var numericMarker = L.ExtraMarkers.icon({
    icon: 'fa-number',
    number: i,
    markerColor: 'blue'
  });
  L.marker([(41.75 + (i * 0.001)), -72.7 + (i * 0.003)], {icon: numericMarker}).addTo(map);
}
