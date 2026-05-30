
// ======================================
// GOOGLE SHEETS WEB APP URL
// ======================================

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxbHjxZ9Hb-hyNZMNMih1ENy878FsPKe1Ug8JIsBcyUFTdf5sVI-8RwBlvzpkxUWgOIKw/exec";

// ======================================
// SUBMIT ORDER
// ======================================

async function submitOrder() {

  // CUSTOMER DETAILS

  const customerName =

    document
      .getElementById(
        "customerName"
      )
      .value
      .trim();

  const customerPhone =

    document
      .getElementById(
        "customerPhone"
      )
      .value
      .trim();

  const customerLocation =

    document
      .getElementById(
        "customerLocation"
      )
      .value
      .trim();

  // VALIDATION

  if (

    customerName === "" ||

    customerPhone === "" ||

    customerLocation === ""

  ) {

    alert(
      "Please complete all fields."
    );

    return;

  }

  if (cart.length === 0) {

    alert(
      "Your cart is empty."
    );

    return;

  }

  // CALCULATE TOTAL

  const total =
    getCartTotal();

  // ORDER OBJECT

  const order = {

    orderId:

      "ORD-" +

      Date.now(),

    date:

      new Date()
        .toLocaleString(),

    customerName,

    customerPhone,

    customerLocation,

    products:

      cart.map(item =>

        `${item.name} (${item.quantity} Kg)`

      ).join(", "),

    total

  };

  // SAVE TO LOCAL STORAGE

  saveOrder(order);

  // SEND TO GOOGLE SHEETS

  try {

    await fetch(
      SCRIPT_URL,
      {

        method: "POST",

        mode: "no-cors",

        headers: {

          "Content-Type":
            "application/json"

        },

        body:

          JSON.stringify(
            order
          )

      }
    );

  }

  catch (error) {

    console.error(
      error
    );

  }

  // CLEAR FORM

  document.getElementById(
    "customerName"
  ).value = "";

  document.getElementById(
    "customerPhone"
  ).value = "";

  document.getElementById(
    "customerLocation"
  ).value = "";

  // SUCCESS PAGE

  showSuccessPage();

}

// ======================================
// SAVE ORDER
// ======================================

function saveOrder(order) {

  const orders =

    JSON.parse(

      localStorage.getItem(
        "orders"
      )

    ) || [];

  orders.unshift(
    order
  );

  localStorage.setItem(

    "orders",

    JSON.stringify(
      orders
    )

  );

}

// ======================================
// RENDER ORDERS
// ======================================

function renderOrders() {

  const ordersList =

    document.getElementById(
      "ordersList"
    );

  if (!ordersList) {

    return;

  }

  const orders =

    JSON.parse(

      localStorage.getItem(
        "orders"
      )

    ) || [];

  ordersList.innerHTML = "";

  if (

    orders.length === 0

  ) {

    ordersList.innerHTML =

      "<p>No orders found.</p>";

    return;

  }

  orders.forEach(

    order => {

      const orderCard =

        document.createElement(
          "div"
        );

      orderCard.classList.add(
        "order-item"
      );

      orderCard.innerHTML = `

        <h3>

          ${order.orderId}

        </h3>

        <p>

          <strong>
            Date:
          </strong>

          ${order.date}

        </p>

        <p>

          <strong>
            Name:
          </strong>

          ${order.customerName}

        </p>

        <p>

          <strong>
            Phone:
          </strong>

          ${order.customerPhone}

        </p>

        <p>

          <strong>
            Location:
          </strong>

          ${order.customerLocation}

        </p>

        <p>

          <strong>
            Items:
          </strong>

          ${order.products}

        </p>

        <p>

          <strong>
            Total:
          </strong>

          GHS ${order.total.toFixed(2)}

        </p>

      `;

      ordersList.appendChild(
        orderCard
      );

    }

  );

}
