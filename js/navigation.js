// =====================================
// PAGE ELEMENTS
// =====================================

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

const ordersPage =
  document.getElementById(
    "ordersPage"
  );

// =====================================
// NAVIGATION FUNCTIONS
// =====================================

function showProductsPage() {

  productsPage.classList.remove(
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


function showCheckoutPage() {

  productsPage.classList.add(
    "hidden"
  );

  checkoutPage.classList.remove(
    "hidden"
  );

  supportPage.classList.add(
    "hidden"
  );

  successPage.classList.add(
    "hidden"
  );

}

function showSupportPage() {

  productsPage.classList.add(
    "hidden"
  );

  checkoutPage.classList.add(
    "hidden"
  );

  supportPage.classList.remove(
    "hidden"
  );

  successPage.classList.add(
    "hidden"
  );

}
function showSuccessPage() {

  productsPage.classList.add(
    "hidden"
  );

  checkoutPage.classList.add(
    "hidden"
  );

  supportPage.classList.add(
    "hidden"
  );

  successPage.classList.remove(
    "hidden"
  );

}

function showOrdersPage() {

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

  ordersPage.classList.remove(
    "hidden"
  );

  renderOrders();

}

// =====================================
// EVENTS
// =====================================

document
  .getElementById("ordersNav")
  .addEventListener(
    "click",
    showOrdersPage
  );

document
  .getElementById("ordersBackBtn")
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
    showProductsPage
  );

document
  .getElementById("homeNav")
  .addEventListener(
    "click",
    showProductsPage
  );

document
  .getElementById("supportNav")
  .addEventListener(
    "click",
    showSupportPage
  );

document
  .getElementById("backBtn")
  .addEventListener(
    "click",
    showProductsPage
  );

document
  .getElementById("supportBackBtn")
  .addEventListener(
    "click",
    showProductsPage
  );

document
  .getElementById("goToCheckout")
  .addEventListener(
    "click",
    () => {

      if (cart.length === 0) {

        alert(
          "Please add products to cart."
        );

        return;

      }

      showCheckoutPage();

    }
  );
// SUCCESS PAGE

const successPage =
  document.getElementById(
    "successPage"
  );
