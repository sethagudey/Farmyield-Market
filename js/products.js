// =====================================
// PRODUCTS DATA
// =====================================

const products = [

  {
    id: 1,
    name: "Fresh Tomatoes",
    pricePerKg: 25,
    image: "images/tomatoes.png"
  },

  {
    id: 2,
    name: "Carrots",
    pricePerKg: 18,
    image: "images/carrots.png"
  },

  {
    id: 3,
    name: "Fresh Pepper",
    pricePerKg: 20,
    image: "images/pepper.png"
  },

  {
    id: 4,
    name: "Lettuce",
    pricePerKg: 15,
    image: "images/lettuce.png"
  },

  {
    id: 5,
    name: "Watermelon",
    pricePerKg: 35,
    image: "images/watermelon.png"
  }

];

// =====================================
// DISPLAY PRODUCTS
// =====================================

function displayProducts() {

  const productsContainer =
    document.getElementById(
      "products"
    );

  productsContainer.innerHTML = "";

  products.forEach((product) => {

    const card =
      document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `

      <img
        src="${product.image}"
        alt="${product.name}"
      />

      <div class="card-content">

        <h3>${product.name}</h3>

        <p class="price">
          GHS ${product.pricePerKg} / Kg
        </p>

        <input
          type="number"
          min="1"
          step="0.5"
          value="1"
          id="kg-${product.id}"
          class="kg-input"
        />

        <button
          onclick="addToCart(${product.id})"
        >
          Add To Cart
        </button>

      </div>

    `;

    productsContainer.appendChild(card);

  });

}
