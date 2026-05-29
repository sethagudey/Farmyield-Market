// ======================================
// INITIALIZE APPLICATION
// ======================================

window.addEventListener(
  "DOMContentLoaded",
  () => {

    // LOAD PRODUCTS

    displayProducts();

    // LOAD CART

    updateCart();

    // LOAD ORDERS

    if (

      typeof renderOrders ===
      "function"

    ) {

      renderOrders();

    }

  }
);

// ======================================
// ORDER BUTTON EVENT
// ======================================

const orderBtn =
  document.getElementById(
    "orderBtn"
  );

if (orderBtn) {

  orderBtn.addEventListener(
    "click",
    submitOrder
  );

}

// ======================================
// CONTINUE SHOPPING
// ======================================

const successHomeBtn =
  document.getElementById(
    "successHomeBtn"
  );

if (successHomeBtn) {

  successHomeBtn.addEventListener(
    "click",
    () => {

      clearCart();

      showProductsPage();

    }
  );

}
