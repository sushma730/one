<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ShopEasy - Online Shopping</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <header>
        <div class="logo">
            <h1>ShopEasy</h1>
        </div>
        <nav>
            <ul>
                <li><a href="#" class="active">Home</a></li>
                <li><a href="#mobiles">Mobiles</a></li>
                <li><a href="#laptops">Laptops</a></li>
                <li><a href="#clothes">Clothes</a></li>
                <li><a href="#cart"><em class="fas fa-shopping-cart"></em> Cart <span id="cart-count">0</span></a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="hero">
            <div class="hero-content">
                <h2>Welcome Shop Easy </h2>
                <p>Your one-stop shop for all your needs</p>
                <button class="shop-now">Shop Now</button>
            </div>
        </section>

        <section id="mobiles" class="product-section">
            <h2>Mobiles</h2>
            <div class="product-grid" id="mobile-products">
                <!-- Mobile products will be loaded here by JavaScript -->
            </div>
        </section>

        <section id="laptops" class="product-section">
            <h2>Laptops</h2>
            <div class="product-grid" id="laptop-products">
                <!-- Laptop products will be loaded here by JavaScript -->
            </div>
        </section>

        <section id="clothes" class="product-section">
            <h2>Clothes</h2>
            <div class="product-grid" id="clothes-products">
                <!-- Clothes products will be loaded here by JavaScript -->
            </div>
        </section>
    </main>

    <footer>
        <div class="footer-content">
            <div class="footer-section about">
                <h3>About ShopEasy</h3>
                <p>Your trusted online shopping destination for mobiles, laptops, and fashion.</p>
            </div>
            <div class="footer-section links">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#mobiles">Mobiles</a></li>
                    <li><a href="#laptops">Laptops</a></li>
                    <li><a href="#clothes">Clothes</a></li>
                </ul>
            </div>
            <div class="footer-section contact">
                <h3>Contact Us</h3>
                <p><em class="fas fa-envelope"></em> contact@shopeasy.com</p>
                <p><em class="fas fa-phone"></em> +91 9876543210</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2023 ShopEasy. All rights reserved.</p>
        </div>
    </footer>

    <!-- Cart Modal -->
    <div id="cart-modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Your Shopping Cart</h2>
            <div id="cart-items">
                <!-- Cart items will be displayed here -->
            </div>
            <div class="cart-total">
                <h3>Total: ₹<span id="cart-total">0</span></h3>
                <button id="checkout-btn">Proceed to Checkout</button>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
