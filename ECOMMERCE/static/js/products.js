// Product handling
async function fetchProducts() {
  try {
    const response = await fetch('/api/products');
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

function displayProducts(products) {
  const productsGrid = document.querySelector('.products-grid');
  productsGrid.innerHTML = products.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <div class="product-info">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-price">$${product.price.toFixed(2)}</div>
        <button 
          class="btn btn-primary add-to-cart"
          onclick="cart.addItem(${JSON.stringify(product)})"
        >
          Add to Cart
        </button>
      </div>
    </div>
  `).join('');
}

// Load products when the page loads
document.addEventListener('DOMContentLoaded', fetchProducts);