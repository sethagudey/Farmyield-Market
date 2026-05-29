// =====================================
// CART
// =====================================

let cart = [];

// =====================================
// ADD TO CART
// =====================================

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

  if (kg <= 0) {

    alert(
      "Please enter valid quantity."
    );

    return;

  }

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

// =====================================
// UPDATE CART
// =====================================

function updateCart() {

  const cartItems =
    document.getElementById(
      "cartItems"
    );

  const totalElement =
    document.getElementById(
      "total"
    );

  cartItems.innerHTML = "";

  let total = 0;

  if (cart.length === 0) {

    cartItems.innerHTML = `

      <p>
        Your cart is empty.
      </p>

    `;

    totalElement.innerText =
      "Total: GHS 0";

    return;

  }

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

// =====================================
// REMOVE ITEM
// =====================================

function removeItem(index) {

  cart.splice(index, 1);

  updateCart();

}
