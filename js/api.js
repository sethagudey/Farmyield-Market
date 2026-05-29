// =====================================
// GOOGLE SCRIPT URL
// =====================================

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxbHjxZ9Hb-hyNZMNMih1ENy878FsPKe1Ug8JIsBcyUFTdf5sVI-8RwBlvzpkxUWgOIKw/exec";

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
saveOrderLocally(orderData);
   showSuccessPage();

  }

  catch (error) {

    alert(
      "Failed to submit order."
    );

  }

}

// =====================================
// SAVE ORDER LOCALLY
// =====================================

function saveOrderLocally(orderData) {

  let orders =
    JSON.parse(

      localStorage.getItem(
        "farmfreshOrders"
      )

    ) || [];

  orders.unshift(orderData);

  localStorage.setItem(

    "farmfreshOrders",

    JSON.stringify(orders)

  );

}

// =====================================
// RENDER ORDERS
// =====================================

function renderOrders() {

  const ordersList =
    document.getElementById(
      "ordersList"
    );

  const orders =
    JSON.parse(

      localStorage.getItem(
        "farmfreshOrders"
      )

    ) || [];

  // EMPTY

  if (orders.length === 0) {

    ordersList.innerHTML = `

      <div class="empty-orders">

        No orders yet.

      </div>

    `;

    return;

  }

  // DISPLAY ORDERS

  ordersList.innerHTML = "";

  orders.forEach((order) => {

    const div =
      document.createElement("div");

    div.classList.add("order-item");

    div.innerHTML = `

      <h3>

        GHS ${order.total}

      </h3>

      <p>

        <strong>Name:</strong>
        ${order.name}

      </p>

      <p>

        <strong>Phone:</strong>
        ${order.phone}

      </p>

      <p>

        <strong>Location:</strong>
        ${order.location}

      </p>

      <p>

        <strong>Items:</strong>
        ${order.items}

      </p>

    `;

    ordersList.appendChild(div);

  });

}
