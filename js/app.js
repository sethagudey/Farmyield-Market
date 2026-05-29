// =====================================
// INITIALIZE APP
// =====================================

displayProducts();

updateCart();

// =====================================
// ORDER BUTTON
// =====================================

document
  .getElementById("orderBtn")
  .addEventListener(
    "click",
    submitOrder
  );
