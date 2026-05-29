
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

  // UPDATE CART UI

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
