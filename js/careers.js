// Select the modal
const modal = document.getElementById("applyModal");

// Select all the buttons that open the modal
const buttons = document.querySelectorAll(".apply-button");

// Select the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// Select the job title span inside the modal
const jobTitle = document.getElementById("jobTitle");

// Loop through the buttons and add click event listeners
buttons.forEach(button => {
    button.onclick = function() {
        // Get the job title from the button's data attribute
        jobTitle.textContent = this.getAttribute('data-job');
        // Show the modal
        modal.style.display = "block";
    };
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Optional: Prevent form submission and display a message
const form = modal.querySelector('form');
form.onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    alert(`Thank you for your application, ${name}! We will contact you at ${email}.`);
    modal.style.display = "none"; // Close the modal after submission
    form.reset(); // Reset form fields
};

