// gallery.js

// Lightbox functionality
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
document.body.appendChild(lightbox);

document.querySelectorAll('.gallery-image').forEach(image => {
    image.addEventListener('click', function() {
        const img = document.createElement('img');
        img.src = this.src; // Set the source to the clicked image
        lightbox.innerHTML = ''; // Clear any existing images
        lightbox.appendChild(img); // Add the new image
        lightbox.classList.add('active'); // Show the lightbox
    });
});

// Close the lightbox when clicked
lightbox.addEventListener('click', function() {
    lightbox.classList.remove('active'); // Hide the lightbox
});
