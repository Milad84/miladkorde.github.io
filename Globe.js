<script>
    // Initialize Leaflet Map
    var map = L.map('mapid').setView([20, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Function to get visitor location using IP
    async function getVisitorLocation() {
        try {
            let response = await fetch('https://ip-api.com/json/');
            let data = await response.json();
            let lat = data.lat;
            let lon = data.lon;

            // Display on page
            document.getElementById("latitude").innerText = lat;
            document.getElementById("longitude").innerText = lon;

            // Add marker to Leaflet map
            L.marker([lat, lon]).addTo(map)
                .bindPopup(`📍 You are here: ${data.city}, ${data.country}`)
                .openPopup();

            // Add visitor location to 3D globe
            addGlobeMarker(lat, lon);
        } catch (error) {
            console.error("Error getting location:", error);
        }
    }

    // Call location function on page load
    getVisitorLocation();

    // Fix: Ensure the globe renders inside the correct container
    document.addEventListener("DOMContentLoaded", function () {
        const globeContainer = document.getElementById("globe-container");
        globeContainer.innerHTML = ""; // Clear any black screen remnants

        const globe = Globe()
            .globeImageUrl("//unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
            .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
            .backgroundColor("#222")
            .pointOfView({ lat: 20, lng: 0, altitude: 2.5 })
            .showAtmosphere(true)
            .atmosphereColor("#c0c0ff")
            .atmosphereAltitude(0.2)
            .width(window.innerWidth * 0.9) // Fix globe size
            .height(500); // Ensure height is not covering the entire page

        globeContainer.appendChild(globe());

        function addGlobeMarker(lat, lon) {
            globe.pointsData([{ lat, lng: lon, size: 1 }])
                .pointColor(() => "red")
                .pointAltitude(0.05)
                .pointRadius(1.5);
        }
    });
</script>
