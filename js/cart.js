// ======================================
// CART
// ======================================

let cart = [];

// ======================================
// DELIVERY FEE
// ======================================

const DELIVERY_FEE = 45;

// ======================================
// ADD TO CART
// ======================================

function addToCart(productId) {

  const product =

    products.find(

      item =>
        item.id === productId

    );

  const quantityInput =

    document.getElementById(
      `kg-${productId}`
    );

  const quantity =

    parseFloat(
      quantityInput.value
    );

  if (

    isNaN(quantity) ||
    quantity <= 0

  ) {

    alert(
      "Please enter a valid quantity."
    );

    return;

  }

  const existingItem =

    cart.find(

      item =>
        item.id === productId

    );

  if (existingItem) {

    existingItem.quantity +=
      quantity;

  }

  else {

    cart.push({

      id: product.id,

      name: product.name,

      pricePerKg:
        product.pricePerKg,

      quantity:

        quantity

    });

  }

  updateCart();

  showNotification(

    `${product.name} added to cart`
  );

}

// ======================================
// REMOVE ITEM
// ======================================

function removeItem(index) {

  cart.splice(index, 1);

  updateCart();

}

// ======================================
// CLEAR CART
// ======================================

function clearCart() {

  cart = [];

  updateCart();

}

// ======================================
// UPDATE CART
// ======================================

function updateCart() {

  const cartItems =

    document.getElementById(
      "cartItems"
    );

  const totalElement =

    document.getElementById(
      "total"
    );

  if (

    !cartItems ||
    !totalElement

  ) {

    return;

  }

  cartItems.innerHTML = "";

  let subtotal = 0;

  if (cart.length === 0) {

    cartItems.innerHTML =

      "<p>Your cart is empty.</p>";

    totalElement.innerHTML =

      "Total: GHS 0.00";

    updateCartBadge();

    return;

  }

  cart.forEach(

    (item, index) => {

      const itemTotal =

        item.pricePerKg *
        item.quantity;

      subtotal += itemTotal;

      const cartItem =

        document.createElement(
          "div"
        );

      cartItem.classList.add(
        "cart-item"
      );

      cartItem.innerHTML = `

        <div>

          <strong>

            ${item.name}

          </strong>

          <p>

            ${item.quantity} Kg ×
            GHS ${item.pricePerKg}

          </p>

        </div>

        <div
          class="cart-actions"
        >

          <strong>

            GHS ${itemTotal.toFixed(2)}

          </strong>

          <br><br>

          <button
            onclick="removeItem(${index})"
          >

            Remove

          </button>

        </div>

      `;

      cartItems.appendChild(
        cartItem
      );

    }

  );

  const finalTotal =

    subtotal +
    DELIVERY_FEE;

  totalElement.innerHTML = `

    <p>

      Subtotal:
      GHS ${subtotal.toFixed(2)}

    </p>

    <p>

      Delivery Fee:
      GHS ${DELIVERY_FEE.toFixed(2)}

    </p>

    <br>

    <strong>

      Total:
      GHS ${finalTotal.toFixed(2)}

    </strong>

  `;

  updateCartBadge();

}

// ======================================
// CART BADGE
// ======================================

function updateCartBadge() {

  const badge =

    document.getElementById(
      "cartBadge"
    );

  if (!badge) {

    return;

  }

  const count =

    cart.reduce(

      (
        total,
        item
      ) =>

        total +
        item.quantity,

      0

    );

  badge.innerText =
    Math.floor(count);

}

// ======================================
// GET TOTAL
// ======================================

function getCartTotal() {

  const subtotal =

    cart.reduce(

      (
        total,
        item
      ) =>

        total +
        (
          item.pricePerKg *
          item.quantity
        ),

      0

    );

  return (

    subtotal +
    DELIVERY_FEE

  );

}

// ======================================
// NOTIFICATION
// ======================================

function showNotification(
  message
) {

  const oldNotification =

    document.getElementById(
      "notification"
    );

  if (oldNotification) {

    oldNotification.remove();

  }

  const notification =

    document.createElement(
      "div"
    );

  notification.id =
    "notification";

  notification.innerText =
    message;

  notification.style.position =
    "fixed";

  notification.style.bottom =
    "20px";

  notification.style.right =
    "20px";

  notification.style.background =
    "#2e7d32";

  notification.style.color =
    "white";

  notification.style.padding =
    "15px 20px";

  notification.style.borderRadius =
    "10px";

  notification.style.boxShadow =
    "0 4px 10px rgba(0,0,0,0.15)";

  notification.style.zIndex =
    "99999";

  document.body.appendChild(
    notification
  );

  setTimeout(

    () => {

      notification.remove();

    },

    3000

  );

}
