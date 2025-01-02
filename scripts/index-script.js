// Object literal
let petSalon = {
    name: "GROOMTASTIC Pet Salon",
    address: {
        street: "Benito Juárez Ave",
        city: "Tecate",
        zip:"21420"
    },
    phone: "665-393-4567"
};

// Select the container
const salonDetails = document.getElementById('salon-details');

// Populate the container with salon details
salonDetails.innerHTML = `
    <p><strong>Name:</strong> ${petSalon.name}</p>
    <p><strong>Address:</strong> ${petSalon.address.street}, ${petSalon.address.city}, ${petSalon.address.zip}</p>
    <p><strong>Phone:</strong> ${petSalon.phone}</p>
`;

// Create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView([32.573588, -116.620173], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Add a marker in the given location, attach some popup content to it and open the popup
var marker = L.marker([32.573588, -116.620173]).addTo(map);
marker.bindPopup("<b>Groomtastic Pet Salon</b><br>").openPopup();
