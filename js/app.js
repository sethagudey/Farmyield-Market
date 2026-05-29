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

// ======================================
// PRODUCT MODAL
// ======================================

const productModal =
  document.getElementById(
    "productModal"
  );

const modalImage =
  document.getElementById(
    "modalImage"
  );

const modalTitle =
  document.getElementById(
    "modalTitle"
  );

const modalPrice =
  document.getElementById(
    "modalPrice"
  );

const modalDescription =
  document.getElementById(
    "modalDescription"
  );

const modalStock =
  document.getElementById(
    "modalStock"
  );

const closeModal =
  document.getElementById(
    "closeModal"
  );

// ======================================
// OPEN MODAL
// ======================================

function openProductModal(productId) {

  // FIND PRODUCT

  const product =
    products.find(
      item => item.id === productId
    );

  // UPDATE MODAL

  modalImage.src =
    product.image;

  modalTitle.innerText =
    product.name;

  modalPrice.innerText =

    `GHS ${product.pricePerKg} per Kg`;

  modalDescription.innerText =

    product.description;

  modalStock.innerText =

    product.stock;

  // SHOW MODAL

  productModal.classList.remove(
    "hidden"
  );

}

// ======================================
// CLOSE MODAL
// ======================================

closeModal.addEventListener(
  "click",
  () => {

    productModal.classList.add(
      "hidden"
    );

  }
);

// ======================================
// CLOSE ON OUTSIDE CLICK
// ======================================

window.addEventListener(
  "click",
  (event) => {

    if (

      event.target ===
      productModal

    ) {

      productModal.classList.add(
        "hidden"
      );

    }

  }
);

