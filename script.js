
function viewProduct(productName) {
    localStorage.setItem('selectedProduct', productName);
    window.location.href = 'product.html';
}

function addToCart(productName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(productName + ' added to cart!');
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartContainer = document.getElementById('cart-items');
    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        cartContainer.appendChild(li);
    });
}

function displayProduct() {
    let product = localStorage.getItem('selectedProduct');
    document.getElementById('product-name').innerText = product;
}
