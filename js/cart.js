
// ======================================
// CART ARRAY
// ======================================

let cart = [];

// ======================================
// ADD TO CART
// ======================================

function addToCart(productId) {

  // FIND PRODUCT

  const product =
    products.find(
      item => item.id === productId
    );

  // GET KG INPUT

  const kgInput =
    document.getElementById(
      `kg-${productId}`
    );

  const kg =
    parseFloat(
      kgInput.value
    );

  // VALIDATION

  if (

    isNaN(kg) ||
    kg <= 0

  ) {

    alert(
      "Please enter a valid quantity."
    );

    return;

  }

  // CHECK IF PRODUCT EXISTS

  const existingItem =
    cart.find(
      item => item.id === productId
    );

  // UPDATE EXISTING ITEM

  if (existingItem) {

    existingItem.kg += kg;

  }

  // ADD NEW ITEM

  else {

    cart.push({

      id: product.id,

      name: product.name,

      pricePerKg:
        product.pricePerKg,

      image: product.image,

      kg: kg

    });

  }

  // UPDATE CART

  updateCart();

  // SUCCESS FEEDBACK

  showCartNotification(

    `${product.name} added to cart`

  );

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

  // CLEAR CART

  cartItems.innerHTML = "";

  let total = 0;

  // EMPTY CART

  if (cart.length === 0) {

    cartItems.innerHTML = `

      <p>
        Your cart is empty.
      </p>

    `;

    totalElement.innerText =
      "Total: GHS 0";
updateCartBadge();

    return;

  }

  // LOOP THROUGH ITEMS

  cart.forEach(

    (item, index) => {

      const itemTotal =
        item.pricePerKg *
        item.kg;

      total += itemTotal;

      // CREATE ITEM DIV

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

            ${item.kg} Kg ×
            GHS ${item.pricePerKg}

          </p>

        </div>

        <div class="cart-actions">

          <strong>

            GHS ${itemTotal.toFixed(2)}

          </strong>

          <br />

          <button
            onclick="removeItem(${index})"
          >

            Remove

          </button>

        </div>

      `;

      // APPEND ITEM

      cartItems.appendChild(
        cartItem
      );

    }

  );

  // UPDATE TOTAL

  totalElement.innerText =

    `Total: GHS ${total.toFixed(2)}`;
  
// UPDATE BADGE

updateCartBadge();

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
// UPDATE CART BADGE
// ======================================

function updateCartBadge() {

  const cartBadge =
    document.getElementById(
      "cartBadge"
    );

  // TOTAL ITEMS

  const totalItems =

    cart.reduce(

      (sum, item) =>

        sum + item.kg,

      0

    );

  // UPDATE BADGE

  cartBadge.innerText =

    Math.floor(totalItems);

}

// ======================================
// CART NOTIFICATION
// ======================================

function showCartNotification(message) {

  // REMOVE OLD NOTIFICATION

  const existingNotification =
    document.getElementById(
      "cartNotification"
    );

  if (existingNotification) {

    existingNotification.remove();

  }

  // CREATE NOTIFICATION

  const notification =
    document.createElement(
      "div"
    );

  notification.id =
    "cartNotification";

  notification.innerText =
    message;

  // STYLE

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
    "14px 20px";

  notification.style.borderRadius =
    "10px";

  notification.style.boxShadow =
    "0 4px 10px rgba(0,0,0,0.15)";

  notification.style.zIndex =
    "9999";

  notification.style.fontSize =
    "0.95rem";

  notification.style.animation =
    "fadeIn 0.3s ease";

  // ADD TO BODY

  document.body.appendChild(
    notification
  );

  // REMOVE AFTER 3 SECONDS

  setTimeout(() => {

    notification.remove();

  }, 3000);

}

