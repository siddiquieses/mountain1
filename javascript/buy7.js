var pricePerItem = 105000; // Price for one item
var quantity = 1; // Starting quantity

// Function to increase the quantity and update subtotal
function increament() {
quantity += 1;
updateQuantityAndSubtotal();
}

// Function to decrease the quantity and update subtotal
function dicreament() {
if (quantity > 1) { // Prevent quantity from going below 1
    quantity -= 1;
    updateQuantityAndSubtotal();
}
}

// Function to update the displayed quantity and subtotal
function updateQuantityAndSubtotal() {
// Update the quantity displayed
document.getElementById("result").innerText = quantity;

// Calculate and update the subtotal
var subtotal = pricePerItem * quantity;
document.getElementById("subtotal").innerText = subtotal.toLocaleString(); // Adds commas for thousands
}


function changeImage(clickedImage) {
    // Get the source of the clicked image
    var newSrc = clickedImage.src;

    // Change the large image's source to the clicked image's source
    document.getElementById("large-image").src = newSrc;
}
function showDescription() {
    document.getElementById('div1').style.display = 'block';
    document.getElementById('shippingsection').style.display = 'none';
    document.getElementById('review').style.display = 'none';
}

function showReview() {
    document.getElementById('review').style.display = 'block';
    document.getElementById('shippingsection').style.display = 'none';
    document.getElementById('div1').style.display = 'none';
}

function showShipping() {
    document.getElementById('shippingsection').style.display = 'block';
    document.getElementById('review').style.display = 'none';
    document.getElementById('div1').style.display = 'none';
}

