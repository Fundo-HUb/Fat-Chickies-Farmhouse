// Ensure JavaScript loads and runs only after the page is fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // Welcome alert or simple greeting function
    function welcomeMessage() {
        alert("Welcome to Fat Chickies Farmhouse!");
    }

    // Uncomment to enable the welcome message
    // welcomeMessage();

    // Fade-in effect for the main content on load
    const mainContent = document.querySelector("main");
    if (mainContent) {
        mainContent.style.opacity = 0;
        let opacity = 0;

        // Gradually increase the opacity
        const fadeIn = setInterval(() => {
            if (opacity < 1) {
                opacity += 0.05;
                mainContent.style.opacity = opacity;
            } else {
                clearInterval(fadeIn);
            }
        }, 100); // Adjust timing for faster/slower fade
    }
});
