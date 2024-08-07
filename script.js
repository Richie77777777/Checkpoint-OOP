class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    addItem(product, quantity) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new ShoppingCartItem(product, quantity));
        }
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    displayCart() {
        this.items.forEach(item => {
            console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: ${item.getTotalPrice()}`);
        });
        console.log(`Total Cart Price: ${this.getTotal()}`);
    }
}

// Create products
const apple = new Product(1, 'Apple', 1.0);
const banana = new Product(2, 'Banana', 0.5);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(apple, 3);
cart.addItem(banana, 5);

// Display the cart
cart.displayCart();

// Remove an item from the cart
cart.removeItem(1);

// Display the cart after removal
cart.displayCart();
