// products.js

// Function to show an alert when a product image is clicked
function showAlert(productName) {
    alert(`You clicked on: ${productName}`);
}

// Add click event listeners to all product images
document.querySelectorAll('.product-image').forEach(image => {
    image.addEventListener('click', function() {
        showAlert(this.alt);
    });
});
