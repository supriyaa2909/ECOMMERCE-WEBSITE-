class Cart {
  constructor() {
    this.items = JSON.parse(localStorage.getItem('cart')) || [];
    this.updateCartCount();
  }

  addItem(product) {
    const existingItem = this.items.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
    
    this.saveCart();
    this.updateCartCount();
  }

  updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = this.items.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
  }

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }
}

const cart = new Cart();