const products = [
  { name: "iPhone 14 Pro", price: "₹70,999", image: "https://via.placeholder.com/200?text=iPhone+14" },
  { name: "Samsung Galaxy S23", price: "₹65,999", image: "https://via.placeholder.com/200?text=Galaxy+S23" },
  { name: "OnePlus 11", price: "₹45,999", image: "https://via.placeholder.com/200?text=OnePlus+11" },
  { name: "Google Pixel 7", price: "₹55,999", image: "https://via.placeholder.com/200?text=Pixel+7" },
  { name: "MacBook Pro", price: "₹1,99,999", image: "https://via.placeholder.com/200?text=MacBook+Pro" },
  { name: "Dell XPS 13", price: "₹1,29,999", image: "https://via.placeholder.com/200?text=Dell+XPS" },
  { name: "Sony WH-1000XM5", price: "₹29,999", image: "https://via.placeholder.com/200?text=Sony+Headphones" },
  { name: "Bose QuietComfort", price: "₹32,999", image: "https://via.placeholder.com/200?text=Bose+Headphones" },
  { name: "Nike Air Jordan", price: "₹12,999", image: "https://via.placeholder.com/200?text=Nike+Shoes" },
  { name: "Adidas Ultraboost", price: "₹11,999", image: "https://via.placeholder.com/200?text=Adidas+Shoes" },
  { name: "Blue Light Glasses", price: "₹2,999", image: "https://via.placeholder.com/200?text=Glasses" },
  { name: "Smart Watch", price: "₹15,999", image: "https://via.placeholder.com/200?text=Smart+Watch" }
];

function displayProducts(items) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  items.forEach(product => {
    productList.innerHTML += `
      <div class="product">
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button onclick="addToCart('${product.name}')">Add to Cart</button>
      </div>
    `;
  });
}

function searchProduct() {
  const searchValue = document.getElementById("search").value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(searchValue));
  displayProducts(filtered);
}

function addToCart(productName) {
  alert(productName + " added to cart!");
}

// Load products on page load
displayProducts(products);