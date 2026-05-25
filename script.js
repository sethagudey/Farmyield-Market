const scriptURL = "PASTE_YOUR_GOOGLE_SCRIPT_URL_HERE";

const products = [
  {
    name: "Fresh Tomatoes",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1546470427-e5f5e6d4b7d1?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Organic Carrots",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1447175008436-170170753d52?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Fresh Pepper",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Garden Eggs",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Fresh Lettuce",
    price: 12,
    image:
      "https://images.unsplash.com/photo-1622205313162-be1d5712a43c?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Watermelon",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1563114773-84221bd62daa?q=80&w=1200&auto=format&fit=crop",
  },
];

const cart = [];

const productsContainer = document.getElementById("products");
const cartItems = document.getElementById("cart-items");
const totalElement = document.getElementById("total");

/* DISPLAY PRODUCTS */

function renderProducts() {

  products.forEach((product) => {

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
    
      <img src="${product.image}" alt="${product.name}" />

      <div class="card-content">
        <h3>${product.name}</h3>

        <p class="price">GHS ${product.price}</p>

        <button onclick='addToCart(${JSON.stringify(product)})'>
          Add To Cart
        </button>
      </div>
    
    `;

    productsContainer.appendChild(card);
  });

}

/* ADD TO CART */

function addToCart(product) {

  cart.push(product);

  renderCart();

}

/* DISPLAY CART */

function renderCart() {

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item) => {

    total += item.price;

    const div = document.createElement("div");

    div.className = "cart-item";

    div.innerHTML = `
      <span>${item.name}</span>
      <span>GHS ${item.price}</span>
    `;

    cartItems.appendChild(div);

  });

  totalElement.innerText = `Total: GHS ${total}`;

}

/* SUBMIT ORDER */

async function submitOrder() {

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const location = document.getElementById("location").value;

  if (!name || !phone || !location || cart.length === 0) {

    alert("Please complete all fields and add items to cart.");

    return;
  }

  const items = cart.map((item) => item.name).join(", ");

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const orderData = {
    name,
    phone,
    location,
    items,
    total,
  };

  try {

    await fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(orderData),
    });

    document.getElementById("success-message").innerText =
      "Order placed successfully!";

    cart.length = 0;

    renderCart();

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("location").value = "";

  } catch (error) {

    alert("Failed to submit order.");

  }

}

/* INITIAL LOAD */

renderProducts();
