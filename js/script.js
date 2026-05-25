// GOOGLE APPS SCRIPT URL

const scriptURL =
  "PASTE_YOUR_GOOGLE_SCRIPT_URL_HERE";

// PRODUCTS

const products = [

  {
    id: 1,
    name: "Fresh Tomatoes",
    pricePerKg: 25,
    image: "images/tomatoes.png"
  },

  {
    id: 2,
    name: "Carrots",
    pricePerKg: 18,
    image: "images/carrots.png"
  },

  {
    id: 3,
    name: "Fresh Pepper",
    pricePerKg: 20,
    image: "images/pepper.png"
  },

  {
    id: 4,
    name: "Lettuce",
    pricePerKg: 15,
    image: "images/lettuce.png"
  },
  {
    id: 5,
    name: "Beetroots",
    pricePerKg: 15,
    image: "images/Beetroots.png"
  },
  {
    id: 6,
    name: "Avocados",
    pricePerKg: 15,
    image: "images/avocados.png"
  },
  {
    id: 7,
    name: "Okro",
    pricePerKg: 15,
    image: "images/okro.png"
  },
  {
    id: 8,
    name: "Peanut Butter",
    pricePerKg: 15,
    image: "images/peanutbutter.png"
  },
  {
    id: 9,
    name: "Plantain",
    pricePerKg: 15,
    image: "images/plantain.png"
  },
  {
    id: 10,
    name: "Garden Egg",
    pricePerKg: 15,
    image: "images/gardenegg.png"
  },

  {
    id: 11,
    name: "Watermelon",
    pricePerKg: 35,
    image: "images/watermelon.png"
  }

];

// CART

let cart = [];

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

  productsContainer.innerHTML = "";

  products.forEach((product) => {

    const card =
      document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `

      <img src="${product.image}" alt="${product.name}" />

      <div class="card-content">

        <h3>${product.name}</h3>

        <p class="price">
          GHS ${product.pricePerKg} / Kg
        </p>

        <input
          type="number"
          min="1"
          value="1"
          id="kg-${product.id}"
          class="kg-input"
        />

        <button onclick="addToCart(${product.id})">
          Add To Cart
        </button>

      </div>

    `;

    productsContainer.appendChild(card);

  });

}

// ADD TO CART

function addToCart(productId) {

  const product =
    products.find(
      item => item.id === productId
    );

  const kg =
    parseFloat(
      document.getElementById(
        `kg-${productId}`
      ).value
    );

  const existingItem =
    cart.find(
      item => item.id === productId
    );

  if (existingItem) {

    existingItem.kg += kg;

  }

  else {

    cart.push({

      ...product,

      kg

    });

  }

  updateCart();

}

// UPDATE CART

function updateCart() {

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {

    const itemTotal =
      item.pricePerKg * item.kg;

    total += itemTotal;

    const div =
      document.createElement("div");

    div.classList.add("cart-item");

    div.innerHTML = `

      <div>

        <strong>${item.name}</strong>

        <p>
          ${item.kg} Kg ×
          GHS ${item.pricePerKg}
        </p>

      </div>

      <div class="cart-actions">

        <strong>
          GHS ${itemTotal.toFixed(2)}
        </strong>

        <button onclick="removeItem(${index})">
          Remove
        </button>

      </div>

    `;

    cartItems.appendChild(div);

  });

  totalElement.innerText =
    `Total: GHS ${total.toFixed(2)}`;

}

// REMOVE ITEM

function removeItem(index) {

  cart.splice(index, 1);

  updateCart();

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

  if (
    !name ||
    !phone ||
    !location ||
    cart.length === 0
  ) {

    alert(
      "Please complete all fields."
    );

    return;

  }

  const items =
    cart.map(item =>

      `${item.name}
      (${item.kg}Kg)`

    ).join(", ");

  const total =
    cart.reduce(

      (sum, item) =>

        sum +
        (item.pricePerKg * item.kg),

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

    cart = [];

    updateCart();

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

    alert(
      "Failed to submit order."
    );

  }

}

// INITIALIZE

displayProducts();

// ORDER BUTTON

document
  .getElementById("orderBtn")
  .addEventListener(
    "click",
    submitOrder
  );
