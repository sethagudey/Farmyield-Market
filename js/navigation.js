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
// CLOSE MENU WHEN CLICKING OUTSIDE
// ======================================

window.addEventListener(
  "click",
  (event) => {

    if (

      !event.target.closest(
        ".nav-menu"
      )

    ) {

      menuDropdown.classList.remove(
        "active"
      );

    }

  }
);

// ======================================
// PAGE NAVIGATION FUNCTIONS
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
// SHOW PRODUCTS PAGE
// ======================================

function showProductsPage() {

  hideAllPages();

  productsPage.classList.remove(
    "hidden"
  );

  closeMenu();

}

// ======================================
// SHOW CHECKOUT PAGE
// ======================================

function showCheckoutPage() {

  if (cart.length === 0) {

    alert(
      "Please add products to cart."
    );

    return;

  }

  hideAllPages();

  checkoutPage.classList.remove(
    "hidden"
  );

  closeMenu();

}

// ======================================
// SHOW SUPPORT PAGE
// ======================================

function showSupportPage() {

  hideAllPages();

  supportPage.classList.remove(
    "hidden"
  );

  closeMenu();

}

// ======================================
// SHOW SUCCESS PAGE
// ======================================

function showSuccessPage() {

  hideAllPages();

  successPage.classList.remove(
    "hidden"
  );

  closeMenu();

}

// ======================================
// SHOW ORDERS PAGE
// ======================================

function showOrdersPage() {

  hideAllPages();

  ordersPage.classList.remove(
    "hidden"
  );

  renderOrders();

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
// NAVIGATION EVENTS
// ======================================

// HOME

document
  .getElementById(
    "homeNav"
  )
  .addEventListener(
    "click",
    showProductsPage
  );

// SUPPORT

document
  .getElementById(
    "supportNav"
  )
  .addEventListener(
    "click",
    showSupportPage
  );

// ORDERS

document
  .getElementById(
    "ordersNav"
  )
  .addEventListener(
    "click",
    showOrdersPage
  );

// CHECKOUT

document
  .getElementById(
    "goToCheckout"
  )
  .addEventListener(
    "click",
    showCheckoutPage
  );

// BACK BUTTON

document
  .getElementById(
    "backBtn"
  )
  .addEventListener(
    "click",
    showProductsPage
  );

// SUPPORT BACK

document
  .getElementById(
    "supportBackBtn"
  )
  .addEventListener(
    "click",
    showProductsPage
  );

// SUCCESS BUTTON

document
  .getElementById(
    "successHomeBtn"
  )
  .addEventListener(
    "click",
    showProductsPage
  );

// ORDERS BACK

document
  .getElementById(
    "ordersBackBtn"
  )
  .addEventListener(
    "click",
    showProductsPage
  );
