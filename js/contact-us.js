// contactUs.js

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
	
    if (!name) {
        alert('Name is required.');
        return false;
		
    }
	
    if (!email) {
        alert('Email is required.');
        return false;
    }
    return true;  // Allow the form to submit
}
// Clear initial values on focus
document.querySelectorAll('.form-container input, .form-container textarea').forEach((element) => {
    element.addEventListener('focus', () => {
        element.placeholder = '';
};
    });

// Function to initialize and add the map
function initMap() {
    // Coordinates for 7248 Dutyiva Street, Kagiso 2, Krugersdorp, South Africa
    const location = { lat: -26.1117, lng: 27.7754 };
    
    // Create a new map centered at the specified address
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15, // Zoom level for closer view
        center: location,
    });
    
    // Add a marker at the address
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "7248 Dutyiva Street, Kagiso 2, Krugersdorp, South Africa",
    });
}
// Optional: Prevent form submission and display a message
const form = modal.querySelector('form');
form.onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
	const message = document.getElementById("message"). value;
    alert(`Thank you for your application, ${name}! We will contact you at ${email}. your message is ${message}`);
    modal.style.display = "none"; // Close the modal after submission
    form.reset(); // Reset form fields
};

