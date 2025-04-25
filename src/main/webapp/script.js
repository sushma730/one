// Menu Data
const menuItems = [
    {
        id: 1,
        title: "Margherita Pizza",
        description: "Classic pizza with tomato sauce, mozzarella, and basil",
        price: 12.99,
        category: "pizza",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 2,
        title: "Pepperoni Pizza",
        description: "Classic pizza with tomato sauce, mozzarella, and pepperoni",
        price: 14.99,
        category: "pizza",
        image: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 3,
        title: "Classic Burger",
        description: "Beef patty with lettuce, tomato, onion, and special sauce",
        price: 8.99,
        category: "burger",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 4,
        title: "Cheeseburger",
        description: "Classic burger with a slice of American cheese",
        price: 9.99,
        category: "burger",
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 5,
        title: "Spaghetti Carbonara",
        description: "Pasta with eggs, cheese, pancetta, and black pepper",
        price: 11.99,
        category: "pasta",
        image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 6,
        title: "Fettuccine Alfredo",
        description: "Pasta with creamy Parmesan sauce",
        price: 12.99,
        category: "pasta",
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 7,
        title: "Caesar Salad",
        description: "Romaine lettuce with croutons, Parmesan, and Caesar dressing",
        price: 7.99,
        category: "salad",
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 8,
        title: "Greek Salad",
        description: "Fresh vegetables with feta cheese and olives",
        price: 8.99,
        category: "salad",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 9,
        title: "Chocolate Cake",
        description: "Rich chocolate cake with chocolate frosting",
        price: 5.99,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 10,
        title: "Tiramisu",
        description: "Italian dessert with layers of coffee-soaked ladyfingers",
        price: 6.99,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
];

// Cart functionality
let cart = [];

// DOM Elements
const menuItemsContainer = document.getElementById('menu-items');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const cartCountElement = document.querySelector('.cart-count');
const cartModal = document.getElementById('cart-modal');
const cartIcon = document.querySelector('.cart-icon');
const closeModal = document.querySelector('.close-modal');
const filterButtons = document.querySelectorAll('.filter-btn');

// Display menu items
function displayMenuItems(category = 'all') {
    menuItemsContainer.innerHTML = '';
    
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    filteredItems.forEach(item => {
        const menuItemElement = document.createElement('div');
        menuItemElement.classList.add('menu-item');
        menuItemElement.dataset.category = item.category;
        
        menuItemElement.innerHTML = `
            <div class="menu-item-img">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="menu-item-info">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="price">$${item.price.toFixed(2)}</div>
                <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
            </div>
        `;
        
        menuItemsContainer.appendChild(menuItemElement);
    });
    
    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Add item to cart
function addToCart(e) {
    const itemId = parseInt(e.target.dataset.id);
    const item = menuItems.find(item => item.id === itemId);
    
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...item,
            quantity: 1
        });
    }
    
    updateCart();
}

// Update cart display
function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = totalItems;
    
    // Update cart items display
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
        cartTotalElement.textContent = '0.00';
        return;
    }
    
    let total = 0;
    
    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        cartItemElement.innerHTML = `
            <div class="cart-item-img">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn minus" data-id="${item.id}">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-btn plus" data-id="${item.id}">+</button>
            </div>
            <div class="remove-item" data-id="${item.id}">
                <i class="fas fa-trash"></i>
            </div>
        `;
        
        cartItemsContainer.appendChild(cartItemElement);
    });
    
    // Update total
    cartTotalElement.textContent = total.toFixed(2);
    
    // Add event listeners to quantity buttons
    document.querySelectorAll('.quantity-btn').forEach(button => {
        button.addEventListener('click', updateQuantity);
    });
    
    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', removeItem);
    });
}

// Update item quantity
function updateQuantity(e) {
    const itemId = parseInt(e.target.dataset.id);
    const item = cart.find(item => item.id === itemId);
    
    if (e.target.classList.contains('plus')) {
        item.quantity += 1;
    } else if (e.target.classList.contains('minus')) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            cart = cart.filter(cartItem => cartItem.id !== itemId);
        }
    }
    
    updateCart();
}

// Remove item from cart
function removeItem(e) {
    const itemId = parseInt(e.currentTarget.dataset.id);
    cart = cart.filter(item => item.id !== itemId);
    updateCart();
}

// Filter menu items
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        // Filter items
        displayMenuItems(button.dataset.category);
    });
});

// Toggle cart modal
cartIcon.addEventListener('click', () => {
    cartModal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

// Initialize the page
displayMenuItems();
updateCart();
