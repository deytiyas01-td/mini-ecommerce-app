# 🛒 Mini E-Commerce Store

A beginner-friendly interactive e-commerce web application built using **HTML, CSS, and JavaScript**. The project demonstrates dynamic product rendering, shopping cart management, price calculation, and a checkout modal.

## 🌐 Live Demo

**GitHub Pages:**  
`https://YOUR-USERNAME.github.io/mini-ecommerce-app/`

> Replace `YOUR-USERNAME` with your GitHub username.

## ✨ Features

- 🛍️ Dynamic product rendering using JavaScript objects
- ➕ Add products to the shopping cart
- 🗑️ Remove products from the cart
- 🔢 Real-time cart item count
- 💰 Automatic total price calculation
- 🛒 Interactive shopping cart modal
- 💳 Checkout functionality
- 📱 Responsive product layout
- 🎨 Clean and beginner-friendly user interface

## 🛠️ Technologies Used

- **HTML5** – Structure of the web application
- **CSS3** – Styling and responsive layout
- **JavaScript** – Product rendering, cart functionality, and checkout logic
- **GitHub Pages** – Website deployment

## 📂 Project Structure

```text
mini-ecommerce-app/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── images/
```

## ⚙️ How It Works

### 1. Product Rendering

Products are stored as JavaScript objects in an array:

```javascript
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 1499
    }
];
```

JavaScript dynamically creates product cards from these objects.

### 2. Shopping Cart

When a user clicks **Add to Cart**, the selected product is added to the cart array.

The application automatically updates:

- Cart item count
- Cart contents
- Total price

### 3. Checkout

The checkout modal displays the current order information. After checkout, the cart is cleared and a successful order message is displayed.

## 🎯 Learning Objectives

This project was created to practice:

- DOM manipulation
- JavaScript arrays and objects
- Functions and event listeners
- Dynamic HTML generation
- Array methods
- Basic e-commerce logic
- Modal interfaces
- Responsive web design
- Git and GitHub
- GitHub Pages deployment

## 🚀 Future Improvements

Planned improvements include:

- [ ] Product search
- [ ] Category filtering
- [ ] Product quantity controls
- [ ] Improved checkout form
- [ ] LocalStorage cart persistence
- [ ] Product details page
- [ ] Dark mode
- [ ] Order history
- [ ] Improved mobile UI

## 👨‍💻 Author

**Tiyas Dey**

Computer Science & Engineering Student

## 📄 License

This project is created for educational and portfolio purposes.
