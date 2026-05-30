// ======================================
// PAGE ELEMENTS
// ======================================

const productsPage =
  document.getElementById(
    "productsPage"
  );

const checkoutPage =
  document.getElementById(
    "checkoutPage"
  );

const supportPage =
  document.getElementById(
    "supportPage"
  );

const successPage =
  document.getElementById(
    "successPage"
  );

const ordersPage =
  document.getElementById(
    "ordersPage"
  );

// ======================================
// MENU ELEMENTS
// ======================================

const menuBtn =
  document.getElementById(
    "menuBtn"
  );

const menuDropdown =
  document.getElementById(
    "menuDropdown"
  );

// ======================================
// HIDE ALL PAGES
// ======================================

function hideAllPages() {

  productsPage.classList.add(
    "hidden"
  );

  checkoutPage.classList.add(
    "hidden"
  );

  supportPage.classList.add(
    "hidden"
  );

  successPage.classList.add(
    "hidden"
  );

  ordersPage.classList.add(
    "hidden"
  );

}

// ======================================
// SHOW HOME PAGE
// ======================================

function showProductsPage() {

  hideAllPages();

  productsPage.classList.remove(
    "hidden"
  );

  closeMenu();

}

// ======================================
// SHOW CHECKOUT
// ======================================

function showCheckoutPage() {

  if (cart.length === 0) {

    alert(
      "Your cart is empty."
    );

    return;

  }

  hideAllPages();

  checkoutPage.classList.remove(
    "hidden"
  );

  updateCart();

  closeMenu();

}

// ======================================
// SHOW SUPPORT
// ======================================

function showSupportPage() {

  hideAllPages();

  supportPage.classList.remove(
    "hidden"
  );

  closeMenu();

}

// ======================================
// SHOW SUCCESS
// ======================================

function showSuccessPage() {

  hideAllPages();

  successPage.classList.remove(
    "hidden"
  );

  closeMenu();

}

// ======================================
// SHOW ORDERS
// ======================================

function showOrdersPage() {

  hideAllPages();

  ordersPage.classList.remove(
    "hidden"
  );

  if (

    typeof renderOrders ===
    "function"

  ) {

    renderOrders();

  }

  closeMenu();

}

// ======================================
// CLOSE MENU
// ======================================

function closeMenu() {

  menuDropdown.classList.remove(
    "active"
  );

}

// ======================================
// MENU TOGGLE
// ======================================

menuBtn.addEventListener(
  "click",
  () => {

    menuDropdown.classList.toggle(
      "active"
    );

  }
);

// ======================================
// CLOSE MENU ON OUTSIDE CLICK
// ======================================

window.addEventListener(
  "click",
  (event) => {

    if (

      !event.target.closest(
        ".nav-menu"
      )

    ) {

      closeMenu();

    }

  }
);

// ======================================
// NAVIGATION LINKS
// ======================================

document
  .getElementById(
    "homeNav"
  )
  .addEventListener(
    "click",
    showProductsPage
  );

document
  .getElementById(
    "ordersNav"
  )
  .addEventListener(
    "click",
    showOrdersPage
  );

document
  .getElementById(
    "supportNav"
  )
  .addEventListener(
    "click",
    showSupportPage
  );

// ======================================
// CHECKOUT BUTTON
// ======================================

document
  .getElementById(
    "goToCheckout"
  )
  .addEventListener(
    "click",
    showCheckoutPage
  );

// ======================================
// BACK BUTTONS
// ======================================

document
  .getElementById(
    "backBtn"
  )
  .addEventListener(
    "click",
    showProductsPage
  );

document
  .getElementById(
    "supportBackBtn"
  )
  .addEventListener(
    "click",
    showProductsPage
  );

document
  .getElementById(
    "ordersBackBtn"
  )
  .addEventListener(
    "click",
    showProductsPage
  );

document
  .getElementById(
    "successHomeBtn"
  )
  .addEventListener(
    "click",
    () => {

      clearCart();

      showProductsPage();

    }
  );
