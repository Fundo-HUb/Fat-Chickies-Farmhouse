// AboutUs.js

// Function to handle the image fade effect
function initFadeEffect() {
    const fadeImages = document.querySelectorAll('.fade-image');
    let currentIndex = 0;

    // Set the initial image visibility
    fadeImages[currentIndex].style.opacity = 1;

    setInterval(() => {
        // Fade out the current image
        fadeImages[currentIndex].style.opacity = 0;

        // Update index to show the next image
        currentIndex = (currentIndex + 1) % fadeImages.length;

        // Fade in the next image
        fadeImages[currentIndex].style.opacity = 1;
    }, 2000); // Change image every 2 seconds
}

// Initialize the fade effect when the document is ready
document.addEventListener('DOMContentLoaded', initFadeEffect);
