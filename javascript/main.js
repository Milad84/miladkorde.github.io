
var map = L.map("map").setView([28.8882080, -97.939990], 15);

var osm =  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var OpenStreetMap_DE = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var OpenStreetMap_BZH = L.tileLayer('https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles courtesy of <a href="http://www.openstreetmap.bzh/" target="_blank">Breton OpenStreetMap Team</a>',

});

//OpenStreetMap_DE.addTo(map);
osm.addTo(map);


var baseLayer = {
  "osm": osm,
  "OpenStreetMap_DE": OpenStreetMap_DE,
  "OpenStreetMap_BZH": OpenStreetMap_BZH,
};

 //GeoJson
 var geojson  = L.geoJSON(TexCounty, {
  onEachFeature: function(feature, layer) {
   var County = feature.properties.namelsad;
    layer.bindPopup(`<h3>County: ${County}</h3>`)
  },
  style: {
    color:"red",
    fillColor: "yellow",
    fillOpacity: 0.2,

  }
}).addTo(map);

//The following will open the map based on the boundaries of the geojson file
map.fitBounds(geojson.getBounds())


var marker1 = L.marker([29.8878080, -97.939967]);
var marker2 = L.marker([29.8855080, -97.939944]);
var marker3 = L.marker([29.8869080, -97.939925]);

//L.control.layers(baseLayer).addTo(map);

var markers = L.layerGroup([marker1, marker2, marker3]);

var overlayers = {
  markers: markers,
  "geojson Layer": geojson,

};

L.control.layers(baseLayer, overlayers).addTo(map);



// example of draggable marker

  /* var marker = L.marker([29.8882080, -97.939990], {
      draggable: true,
      title: "This is the title",
      opacity: 0.7,
  }
    ).addTo(map)
    .bindPopup("<h1> Marker</h1> <p> This is the marker </p>");
     */

  //Single marker with image

    /* var marker1 = L.marker([29.8882080, -97.939990]

      ).addTo(map)
      .bindPopup("<h1> Marker</h1> <p> This is the marker </p> <img src='./img/Peter_Thumb.png'/>")
      .openPopup();  */
