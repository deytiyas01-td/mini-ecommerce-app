const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 1499,
        image: "https://via.placeholder.com/300x200?text=Headphones"
    },

    {
        id: 2,
        name: "Smart Watch",
        category: "Electronics",
        price: 2499,
        image: "https://via.placeholder.com/300x200?text=Smart+Watch"
    },

    {
        id: 3,
        name: "Backpack",
        category: "Accessories",
        price: 999,
        image: "https://via.placeholder.com/300x200?text=Backpack"
    },

    {
        id: 4,
        name: "Running Shoes",
        category: "Fashion",
        price: 1999,
        image: "https://via.placeholder.com/300x200?text=Shoes"
    }
];

let cart = [];

const productContainer = document.getElementById("productContainer");
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

const cartModal = document.getElementById("cartModal");
const cartBtn = document.getElementById("cartBtn");
const closeCart = document.getElementById("closeCart");
const checkoutBtn = document.getElementById("checkoutBtn");


function displayProducts() {

    productContainer.innerHTML = "";

    products.forEach(function(product) {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p>${product.category}</p>

            <strong>₹${product.price}</strong>

            <br><br>

            <button onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        `;

        productContainer.appendChild(card);
    });
}


function addToCart(productId) {

    const product = products.find(function(item) {
        return item.id === productId;
    });

    cart.push(product);

    updateCart();
}


function updateCart() {

    cartCount.textContent = cart.length;

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(function(product, index) {

        total = total + product.price;

        const item = document.createElement("div");

        item.className = "cart-item";

        item.innerHTML = `
            <span>${product.name}</span>

            <span>
                ₹${product.price}

                <button onclick="removeFromCart(${index})">
                    Remove
                </button>
            </span>
        `;

        cartItems.appendChild(item);
    });

    cartTotal.textContent = total;
}


function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


cartBtn.addEventListener("click", function() {

    cartModal.style.display = "flex";

});


closeCart.addEventListener("click", function() {

    cartModal.style.display = "none";

});


checkoutBtn.addEventListener("click", function() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

    } else {

        alert("Order placed successfully!");

        cart = [];

        updateCart();

        cartModal.style.display = "none";
    }

});


displayProducts();
