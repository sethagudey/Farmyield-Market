// =====================================
// GOOGLE SCRIPT URL
// =====================================

const scriptURL =
  "PASTE_YOUR_GOOGLE_SCRIPT_URL_HERE";

// =====================================
// SUBMIT ORDER
// =====================================

async function submitOrder() {

  const name =
    document.getElementById(
      "customerName"
    ).value;

  const phone =
    document.getElementById(
      "customerPhone"
    ).value;

  const location =
    document.getElementById(
      "customerLocation"
    ).value;

  // VALIDATION

  if (

    !name ||
    !phone ||
    !location ||
    cart.length === 0

  ) {

    alert(
      "Please complete all fields."
    );

    return;

  }

  // ITEMS

  const items =
    cart.map(item =>

      `${item.name}
      (${item.kg}Kg)`

    ).join(", ");

  // TOTAL

  const total =
    cart.reduce(

      (sum, item) =>

        sum +
        (item.pricePerKg * item.kg),

      0

    );

  // ORDER DATA

  const orderData = {

    name,
    phone,
    location,
    items,
    total

  };

  try {

    await fetch(scriptURL, {

      method: "POST",

      body: JSON.stringify(orderData)

    });

    document.getElementById(
      "message"
    ).innerText =
      "Order placed successfully!";

    // RESET

    cart = [];

    updateCart();

    document.getElementById(
      "customerName"
    ).value = "";

    document.getElementById(
      "customerPhone"
    ).value = "";

    document.getElementById(
      "customerLocation"
    ).value = "";

    showProductsPage();

  }

  catch (error) {

    alert(
      "Failed to submit order."
    );

  }

}
