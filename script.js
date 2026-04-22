const products = [
  { name: "iPhone 14", price: "₹70,000", image: "https://via.placeholder.com/200" },
  { name: "Laptop", price: "₹50,000", image: "https://via.placeholder.com/200" },
  { name: "Headphones", price: "₹2,000", image: "https://via.placeholder.com/200" },
  { name: "Shoes", price: "₹3,000", image: "https://via.placeholder.com/200" }
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
