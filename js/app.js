// ======================================
// WEBSITE LOADER
// ======================================

window.addEventListener(
  "load",
  () => {

    const loader =
      document.getElementById(
        "loader"
      );

    setTimeout(() => {

      loader.classList.add(
        "hidden"
      );

    }, 1000);

  }
);

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
    async () => {

      // BUTTON LOADING STATE

      orderBtn.innerText =
        "Processing...";

      orderBtn.classList.add(
        "loading-btn"
      );

      // SUBMIT ORDER

      await submitOrder();

      // RESTORE BUTTON

      orderBtn.innerText =
        "Place Order";

      orderBtn.classList.remove(
        "loading-btn"
      );

    }
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
