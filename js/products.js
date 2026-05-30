// ======================================
// PRODUCTS DATA
// ======================================

const products = [

  {
    id: 1,
    name: "Tomatoes",
    pricePerKg: 25,
    image: "images/tomatoes.png",
    description:
      "Fresh red tomatoes harvested directly from local farms.",
    stock: "In Stock"
  },

  {
    id: 2,
    name: "Beetroot",
    pricePerKg: 30,
    image: "images/Beetroots.png",
    description:
      "Organic beetroot rich in nutrients and antioxidants.",
    stock: "In Stock"
  },

  {
    id: 3,
    name: "Okro",
    pricePerKg: 18,
    image: "images/okro.png",
    description:
      "Fresh green okro perfect for soups and stews.",
    stock: "In Stock"
  },

  {
    id: 4,
    name: "Plantain",
    pricePerKg: 15,
    image: "images/plantain.png",
    description:
      "Fresh plantain suitable for boiling, frying and roasting.",
    stock: "In Stock"
  },

  {
    id: 5,
    name: "Carrots",
    pricePerKg: 22,
    image: "images/carrots.png",
    description:
      "Crunchy carrots packed with vitamins and minerals.",
    stock: "In Stock"
  },

  {
    id: 6,
    name: "Lettuce",
    pricePerKg: 20,
    image: "images/lettuce.png",
    description:
      "Fresh green lettuce ideal for salads and sandwiches.",
    stock: "In Stock"
  },

  {
    id: 7,
    name: "Avocado",
    pricePerKg: 28,
    image: "images/avocados.png",
    description:
      "Creamy avocados sourced from trusted local farmers.",
    stock: "In Stock"
  },

  {
    id: 8,
    name: "Garden Eggs",
    pricePerKg: 20,
    image: "images/gardenegg.png",
    description:
      "Fresh white and yellow garden eggs harvested daily.",
    stock: "In Stock"
  },

  {
    id: 9,
    name: "Fresh Pepper",
    pricePerKg: 35,
    image: "images/pepper.png",
    description:
      "Fresh hot pepper for cooking and seasoning.",
    stock: "In Stock"
  },

  {
    id: 10,
    name: "Watermelon",
    pricePerKg: 12,
    image: "images/watermelon.png",
    description:
      "Sweet juicy watermelon freshly harvested.",
    stock: "In Stock"
  },

  {
    id: 11,
    name: "Crate of Eggs",
    pricePerKg: 45,
    image: "images/eggs.png",
    description:
      "Fresh farm eggs supplied in standard crates.",
    stock: "In Stock"
  },

  {
    id: 12,
    name: "Groundnut Paste",
    pricePerKg: 40,
    image: "images/peanutpaste.png",
    description:
      "Pure natural groundnut paste with no additives.",
    stock: "In Stock"
  }

];

// ======================================
// DISPLAY PRODUCTS
// ======================================

function displayProducts() {

  const productsContainer =
    document.getElementById(
      "products"
    );

  productsContainer.innerHTML = "";

  products.forEach(product => {

    const card =
      document.createElement(
        "div"
      );

    card.classList.add(
      "card"
    );

    card.innerHTML = `

      <img
        src="${product.image}"
        alt="${product.name}"
        onclick="openProductModal(${product.id})"
      >

      <div class="card-content">

        <h3>

          ${product.name}

        </h3>

        <p class="price">

          GHS ${product.pricePerKg}/Kg

        </p>

        <input
          type="number"
          min="1"
          step="0.5"
          value="1"
          id="kg-${product.id}"
          class="kg-input"
        >

        <button
          onclick="addToCart(${product.id})"
        >

          Add To Cart

        </button>

      </div>

    `;

    productsContainer.appendChild(
      card
    );

  });

}
