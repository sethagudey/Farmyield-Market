
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

    if (loader) {

      setTimeout(() => {

        loader.classList.add(
          "hidden"
        );

      }, 1000);

    }

  }
);

// ======================================
// PRODUCT MODAL ELEMENTS
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

const closeModalBtn =
  document.getElementById(
    "closeModal"
  );

// ======================================
// OPEN PRODUCT MODAL
// ======================================

function openProductModal(
  productId
) {

  const product =

    products.find(

      item =>
        item.id === productId

    );

  if (!product) {

    return;

  }

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

  productModal.classList.remove(
    "hidden"
  );

}

// ======================================
// CLOSE PRODUCT MODAL
// ======================================

function closeProductModal() {

  productModal.classList.add(
    "hidden"
  );

}

// ======================================
// CLOSE BUTTON
// ======================================

if (closeModalBtn) {

  closeModalBtn.addEventListener(
    "click",
    closeProductModal
  );

}

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

      closeProductModal();

    }

  }
);

// ======================================
// INITIALIZE APP
// ======================================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    // LOAD PRODUCTS

    displayProducts();

    // UPDATE CART

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
