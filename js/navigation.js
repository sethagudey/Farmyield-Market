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

}

// =====================================
// EVENTS
// =====================================

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
