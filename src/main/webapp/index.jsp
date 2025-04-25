<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FoodExpress - Order Delicious Food Online</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <header>
        <div class="logo">
            <h1>FoodExpress</h1>
        </div>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <div class="cart-icon">
            <i class="fas fa-shopping-cart"></i>
            <span class="cart-count">0</span>
        </div>
    </header>

    <main>
        <section class="hero" id="home">
            <div class="hero-content">
                <h2>Delicious Food Delivered To Your Doorstep</h2>
                <p>Order from our wide selection of mouth-watering dishes</p>
                <a href="#menu" class="btn">Order Now</a>
            </div>
        </section>

        <section class="menu" id="menu">
            <h2>Our Menu</h2>
            <div class="menu-filters">
                <button class="filter-btn active" data-category="all">All</button>
                <button class="filter-btn" data-category="pizza">Pizza</button>
                <button class="filter-btn" data-category="burger">Burgers</button>
                <button class="filter-btn" data-category="pasta">Pasta</button>
                <button class="filter-btn" data-category="salad">Salads</button>
                <button class="filter-btn" data-category="dessert">Desserts</button>
            </div>
            <div class="menu-items" id="menu-items">
                <!-- Menu items will be loaded here by JavaScript -->
            </div>
        </section>

        <section class="cart-modal" id="cart-modal">
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h2>Your Cart</h2>
                <div class="cart-items" id="cart-items">
                    <!-- Cart items will be loaded here -->
                </div>
                <div class="cart-total">
                    <h3>Total: $<span id="cart-total">0.00</span></h3>
                    <button class="btn checkout-btn">Proceed to Checkout</button>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="footer-content">
            <div class="footer-section about">
                <h3>About FoodExpress</h3>
                <p>We deliver the best food in town with quick service and great quality.</p>
            </div>
            <div class="footer-section contact" id="contact">
                <h3>Contact Us</h3>
                <p><i class="fas fa-phone"></i> (123) 456-7890</p>
                <p><i class="fas fa-envelope"></i> info@foodexpress.com</p>
            </div>
            <div class="footer-section social">
                <h3>Follow Us</h3>
                <div class="social-icons">
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2023 FoodExpress. All rights reserved.</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
