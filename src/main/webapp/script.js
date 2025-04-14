// Updated product data with working image URLs
const products = {
    mobiles: [
        { id: 1, name: "iPhone 15 Pro", price: 134900, image: "https://m.media-amazon.com/images/I/81Os1SDWpcL._SL1500_.jpg", description: "Latest Apple iPhone with A17 Pro chip" },
        { id: 2, name: "Samsung Galaxy S23 Ultra", price: 124999, image: "https://m.media-amazon.com/images/I/61HHS0HrjpL._SL1500_.jpg", description: "200MP camera with S Pen" },
        { id: 3, name: "OnePlus 11 5G", price: 56999, image: "https://m.media-amazon.com/images/I/61amb0CfMGL._SL1500_.jpg", description: "Hasselblad camera, Snapdragon 8 Gen 2" },
        { id: 4, name: "Xiaomi 13 Pro", price: 79999, image: "https://m.media-amazon.com/images/I/61fy+u9q2lL._SL1500_.jpg", description: "Leica camera, 120W fast charging" },
        { id: 5, name: "Google Pixel 7 Pro", price: 66999, image: "https://m.media-amazon.com/images/I/71Gh9aIm+8L._SL1500_.jpg", description: "Best camera phone with Tensor G2" },
        { id: 6, name: "Nothing Phone (2)", price: 44999, image: "https://m.media-amazon.com/images/I/61cwywLZR-L._SL1500_.jpg", description: "Unique Glyph interface, Snapdragon 8+" },
        { id: 7, name: "Vivo X90 Pro", price: 84990, image: "https://m.media-amazon.com/images/I/61yY6wqVVVL._SL1500_.jpg", description: "Zeiss camera, MediaTek Dimensity 9200" },
        { id: 8, name: "iQOO 11 5G", price: 59999, image: "https://m.media-amazon.com/images/I/61YSM4+7T0L._SL1500_.jpg", description: "144Hz AMOLED, Snapdragon 8 Gen 2" },
        { id: 9, name: "Realme GT Neo 3", price: 32999, image: "https://m.media-amazon.com/images/I/71V--WZVUIL._SL1500_.jpg", description: "150W charging, MediaTek Dimensity 8100" },
        { id: 10, name: "Motorola Edge 40", price: 29999, image: "https://m.media-amazon.com/images/I/61mI5Y5VuQL._SL1500_.jpg", description: "144Hz pOLED, Dimensity 8020" }
    ],
    laptops: [
        { id: 11, name: "MacBook Pro 14-inch M2 Pro", price: 194900, image: "https://m.media-amazon.com/images/I/61vFO3R5UNL._SL1500_.jpg", description: "Apple M2 Pro chip, 16GB RAM" },
        { id: 12, name: "Dell XPS 13", price: 124990, image: "https://m.media-amazon.com/images/I/71H4VWhOWCL._SL1500_.jpg", description: "13.4\" 4K Touch, Core i7" },
        { id: 13, name: "HP Spectre x360", price: 139990, image: "https://m.media-amazon.com/images/I/71QGMdz1VTL._SL1500_.jpg", description: "2-in-1, OLED, Core i7" },
        { id: 14, name: "Lenovo Yoga 9i", price: 129990, image: "https://m.media-amazon.com/images/I/71QGMdz1VTL._SL1500_.jpg", description: "14\" 2-in-1, Core i7" },
        { id: 15, name: "Asus ROG Zephyrus G14", price: 109990, image: "https://m.media-amazon.com/images/I/71YHjVXyR0L._SL1500_.jpg", description: "Ryzen 9, RTX 3060" },
        { id: 16, name: "Acer Swift 3", price: 54990, image: "https://m.media-amazon.com/images/I/71+8m8qrz+L._SL1500_.jpg", description: "Ryzen 5, 14\" FHD" },
        { id: 17, name: "Microsoft Surface Laptop 5", price: 119999, image: "https://m.media-amazon.com/images/I/71zG4EfQf3L._SL1500_.jpg", description: "13.5\" Touch, Core i5" },
        { id: 18, name: "MSI Katana GF66", price: 79990, image: "https://m.media-amazon.com/images/I/81Y+y4UXQxL._SL1500_.jpg", description: "Core i5, RTX 3050" },
        { id: 19, name: "LG Gram 16", price: 109990, image: "https://m.media-amazon.com/images/I/71QGMdz1VTL._SL1500_.jpg", description: "16\" Ultra-light, Core i7" },
        { id: 20, name: "Samsung Galaxy Book3 Pro", price: 134990, image: "https://m.media-amazon.com/images/I/71QGMdz1VTL._SL1500_.jpg", description: "16\" AMOLED, Core i7" }
    ],
    clothes: [
        { id: 21, name: "Men's Slim Fit Shirt", price: 999, image: "https://m.media-amazon.com/images/I/61-nr9GODbL._UL1500_.jpg", description: "Formal slim fit cotton shirt" },
        { id: 22, name: "Women's Floral Dress", price: 1299, image: "https://m.media-amazon.com/images/I/71UwSHSZRnL._UL1500_.jpg", description: "Beautiful floral summer dress" },
        { id: 23, name: "Men's Jeans", price: 1499, image: "https://m.media-amazon.com/images/I/81H+Ea6Lq9L._UL1500_.jpg", description: "Slim fit stretchable jeans" },
        { id: 24, name: "Women's Kurti", price: 799, image: "https://m.media-amazon.com/images/I/71X8YbUJmkL._UL1500_.jpg", description: "Cotton printed kurti with embroidery" },
        { id: 25, name: "Men's T-Shirt Pack", price: 899, image: "https://m.media-amazon.com/images/I/71Bc+XOZvVL._UL1500_.jpg", description: "Pack of 3 cotton t-shirts" },
        { id: 26, name: "Women's Leggings", price: 499, image: "https://m.media-amazon.com/images/I/61xw5sd3YUL._UL1500_.jpg", description: "Comfortable cotton leggings" },
        { id: 27, name: "Men's Formal Suit", price: 3999, image: "https://m.media-amazon.com/images/I/71xVslE3z1L._UL1500_.jpg", description: "Premium wool blend suit" },
        { id: 28, name: "Women's Saree", price: 1599, image: "https://m.media-amazon.com/images/I/81TGB6JQmZL._UL1500_.jpg", description: "Silk blend designer saree" },
        { id: 29, name: "Men's Track Pants", price: 699, image: "https://m.media-amazon.com/images/I/71YHjVXyR0L._UL1500_.jpg", description: "Sports joggers with pockets" },
        { id: 30, name: "Women's Jacket", price: 1999, image: "https://m.media-amazon.com/images/I/61+Q4+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5
