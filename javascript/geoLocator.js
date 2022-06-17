//<script>

////////////////////This is for direct result in html

// if('geolocation' in navigator) {
//   document.write("geolocation available");
//   navigator.geolocation.getCurrentPosition((position) => {

//    document.write(position.coords.latitude, position.coords.longitude);
// });

// } else {
//   document.write("geolocation not available");
// }
/////////////////////////////////////////////////////


/////Console log for Geolocation

// if('geolocation' in navigator) {
//   document.write("geolocation available");
//   navigator.geolocation.getCurrentPosition((position) => {

//    console.log(position);

// });

// } else {
//   document.write("geolocation not available");
// }

///////////////////////////
if('geolocation' in navigator) {
  console.log("geolocation available");
  navigator.geolocation.getCurrentPosition((position) => {
  	const lat = position.coords.latitude;
  	const lon = position.coords.longitude;
   document.getElementById('latitude').textContent = lat;
   document.getElementById('longitude').textContent = lon;
});

} else {
  document.write("geolocation not available");
}


//<script>
 navigator.geolocation.getCurrentPosition((position) => {
    var lat  = position.coords.latitude;
    var long = position.coords.longitude;

var latlng = L.latLng(lat, long);

var map = L.map('mapid').setView(latlng, 3);



L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker(latlng).addTo(map);

});

//</script>
