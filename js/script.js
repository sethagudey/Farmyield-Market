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
    name: "Watermelon",
    pricePerKg: 35,
    image: "images/watermelon.png"
  },

  {
    id: 6,
    name: "Garden Egg",
    pricePerKg: 22,
    image: "images/gardenegg.png"
  },

  {
    id: 7,
    name: "Plantain",
    pricePerKg: 30,
    image: "images/plantain.png"
  },

  {
    id: 8,
    name: "Beetroot",
    pricePerKg: 28,
    image: "images/Beetroots.png"
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

// PAGES

const productsPage =
  document.getElementById(
    "productsPage"
  );

const checkoutPage =
  document.getElementById(
    "checkoutPage"
  );

// DISPLAY PRODUCTS

function displayProducts() {

  productsContainer.innerHTML = "";

  products.forEach((product) => {

    const card =
      document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `

      <img
        src="${product.image}"
        alt="${product.name}"
      />

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

        <button
          onclick="addToCart(${product.id})"
        >
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

  // CHECK IF PRODUCT EXISTS

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

        <strong>
          ${item.name}
        </strong>

        <p>
          ${item.kg} Kg ×
          GHS ${item.pricePerKg}
        </p>

      </div>

      <div class="cart-actions">

        <strong>
          GHS ${itemTotal.toFixed(2)}
        </strong>

        <button
          onclick="removeItem(${index})"
        >
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

// GO TO CHECKOUT

document
  .getElementById("goToCheckout")
  .addEventListener("click", () => {

    if (cart.length === 0) {

      alert(
        "Please add products to cart."
      );

      return;

    }

    productsPage.classList.add(
      "hidden"
    );

    checkoutPage.classList.remove(
      "hidden"
    );

});

// BACK BUTTON

document
  .getElementById("backBtn")
  .addEventListener("click", () => {

    checkoutPage.classList.add(
      "hidden"
    );

    productsPage.classList.remove(
      "hidden"
    );

});

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
      "Please complete all fields."
    );

    return;

  }

  // FORMAT ITEMS

  const items =
    cart.map(item =>

      `${item.name}
      (${item.kg}Kg)`

    ).join(", ");

  // TOTAL

  const total =
    cart.reduce(

      (sum, item) =>

        sum +
        (item.pricePerKg * item.kg),

      0

    );

  // ORDER DATA

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

    // RESET CART

    cart = [];

    updateCart();

    // RESET FORM

    document.getElementById(
      "customerName"
    ).value = "";

    document.getElementById(
      "customerPhone"
    ).value = "";

    document.getElementById(
      "customerLocation"
    ).value = "";

    // RETURN TO PRODUCTS PAGE

    checkoutPage.classList.add(
      "hidden"
    );

    productsPage.classList.remove(
      "hidden"
    );

  }

  catch (error) {

    alert(
      "Failed to submit order."
    );

  }

}

// ORDER BUTTON

document
  .getElementById("orderBtn")
  .addEventListener(
    "click",
    submitOrder
  );

// INITIALIZE

displayProducts();
