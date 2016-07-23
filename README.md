# My demo
http://jackdougherty.github.io/Leaflet.ExtraMarkers/index.html

# Fork of Leaflet.extra-markers plugin v1.0.0
by https://github.com/coryasilva/Leaflet.ExtraMarkers

<a href="https://github.com/lvoogdt/Leaflet.awesome-markers">Big Thanks to lvoogdt of Leaflet.awesome-markers</a>

This plugin depends on either Bootstrap, Font-Awesome, or Semantic-UI for the rendering of the icons. See these urls above for more information.

##Icons
Version 1.0 of Leaflet.extra-markers is designed for:
- [Bootstrap 3 icons](http://twitter.github.com/bootstrap/)
  -  [Getting Started Guide](http://getbootstrap.com/getting-started/)
- [Font Awesome 4.0](http://fortawesome.github.com/Font-Awesome/)
  - [Getting Started Guide](http://fortawesome.github.io/Font-Awesome/get-started/)
- [Semantic UI 0.9.8 icons](http://semantic-ui.com/)
- [Ion Icons 2.0.1](http://ionicons.com/)
- Leaflet 0.5-Latest

##Using the plugin

##### 1. Requirements #####

Follow the [getting started guide](#icons) for the desired font library and make sure its included in your project.

In this example, put this inside the head of index.html:
```
<!-- Font-Awesome and leaflet.extramarkers dependency -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
<link rel="stylesheet" href="dist/leaflet.extra-markers.min.css">
```
and this inside the body of index.html:
```
<script src="dist/leaflet.extra-markers.min.js"></script>
```

##### 2. Install Leaflet.ExtraMarkers #####

(Revised by Jack): Copy everything from my dist subfolder to your local directory

##### 3. Create Leaflet markers #####

Create markers this way:
````js

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
  number: 4,
  markerColor: 'green-dark'
});
L.marker([41.77, -72.67], {icon: singleMarker}).addTo(map);

// single numeric or text icon with style written into L.marker; default color is red
L.marker([41.77, -72.62], {icon: L.ExtraMarkers.icon({
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
````
---


### Properties

| Property        | Description                  | Default Value | Possible  values                                     |
| --------------- | ---------------------------- | ------------- | ---------------------------------------------------- |
| icon            | Name of the icon WITH prefix | 'fa-home'     | See glyphicons or font-awesome (must include prefix)  |
| prefix          | Select the icon library       | 'glyphicon'   | 'fa' for font-awesome or 'glyphicon' for bootstrap 3 |
| markerColor     | Color of the marker          | 'blue'        | 'red', 'orange-dark', 'orange', 'yellow', 'blue-dark', 'cyan', 'purple', 'violet', 'pink', 'green-dark', 'green', 'green-light', 'black', 'white' |
| shape           | Shape of the marker          | 'circle'      | 'circle', 'square', 'star', 'penta' |
| iconColor       | Color of the icon            | 'white'       | 'white', 'black' or css code (hex, rgba etc) |
| spin            | REMOVED                      | false         | true or false. Font-awesome required |
| extraClasses    | Additional classes in the created <i> tag | '' | 'fa-rotate90 myclass' other custom configuration |
| number          | Add a number or text to icon| ''             | any number or text, must use icon fa-number |

## License
- Leaflet.ExtraMarkers and colored markers are licensed under the MIT License - http://opensource.org/licenses/mit-license.html.
- Font Awesome: http://fortawesome.github.io/Font-Awesome/license/
- Twitter Bootstrap: http://getbootstrap.com/
