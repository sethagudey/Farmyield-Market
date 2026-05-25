// GOOGLE APPS SCRIPT URL

const scriptURL =
  "PASTE_YOUR_GOOGLE_SCRIPT_URL_HERE";

// PRODUCTS

const products = [

  {
    name: "Fresh Tomatoes",
    price: 25,
    image: "images/tomatoes.png"
  },

  {
    name: "Organic Carrots",
    price: 18,
    image: "images/carrots.jpg"
  },

  {
    name: "Fresh Pepper",
    price: 20,
    image: "images/pepper.jpg"
  },

  {
    name: "Fresh Lettuce",
    price: 15,
    image: "images/lettuce.jpg"
  },

  {
    name: "Watermelon",
    price: 35,
    image: "images/watermelon.jpg"
  }

];

// CART

const cart = [];

// ELEMENTS

const productsContainer =
  document.getElementById("products");

const cartItems =
  document.getElementById("cartItems");

const totalElement =
  document.getElementById("total");

const message =
  document.getElementById("message");

// DISPLAY PRODUCTS

function displayProducts() {

  products.forEach((product) => {

    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
    
      <img src="${product.image}" alt="${product.name}" />

      <div class="card-content">

        <h3>${product.name}</h3>

        <p class="price">
          GHS ${product.price}
        </p>

        <button>
          Add To Cart
        </button>

      </div>
    
    `;

    const button =
      card.querySelector("button");

    button.addEventListener(
      "click",
      () => addToCart(product)
    );

    productsContainer.appendChild(card);

  });

}

// ADD TO CART

function addToCart(product) {

  cart.push(product);

  updateCart();

}

// UPDATE CART

function updateCart() {

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item) => {

    total += item.price;

    const div =
      document.createElement("div");

    div.classList.add("cart-item");

    div.innerHTML = `
    
      <span>${item.name}</span>

      <span>GHS ${item.price}</span>
    
    `;

    cartItems.appendChild(div);

  });

  totalElement.innerText =
    `Total: GHS ${total}`;

}

// SUBMIT ORDER

async function submitOrder() {

  const name =
    document.getElementById(
      "customerName"
    ).value;

  const phone =
    document.getElementById(
      "customerPhone"
    ).value;

  const location =
    document.getElementById(
      "customerLocation"
    ).value;

  // VALIDATION

  if (
    !name ||
    !phone ||
    !location ||
    cart.length === 0
  ) {

    alert(
      "Please complete all fields and add products."
    );

    return;

  }

  // ORDER DATA

  const items =
    cart.map(item => item.name)
    .join(", ");

  const total =
    cart.reduce(
      (sum, item) => sum + item.price,
      0
    );

  const orderData = {

    name,
    phone,
    location,
    items,
    total

  };

  try {

    await fetch(scriptURL, {

      method: "POST",

      body: JSON.stringify(orderData)

    });

    message.innerText =
      "Order placed successfully!";

    // CLEAR CART

    cart.length = 0;

    updateCart();

    // CLEAR INPUTS

    document.getElementById(
      "customerName"
    ).value = "";

    document.getElementById(
      "customerPhone"
    ).value = "";

    document.getElementById(
      "customerLocation"
    ).value = "";

  }

  catch (error) {

    alert("Failed to submit order.");

  }

}

// BUTTON EVENT

document
  .getElementById("orderBtn")
  .addEventListener(
    "click",
    submitOrder
  );

// INITIALIZE

displayProducts();
