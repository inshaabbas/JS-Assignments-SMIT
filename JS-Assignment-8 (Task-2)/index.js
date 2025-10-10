let products = [
  {
    title: "Shampoo",
    price: "1200",
    brand: "Lifebuoy",
    quantity: 10,
    description: "Nourishing formula for smooth and shiny hair.",
    id: 1,
    category: "cosmetic",
    image: "https://rakanaa.pk/cdn/shop/products/134357_0.jpg?v=1628285284"
  },
  {
    title: "Dove Soap",
    price: "300",
    brand: "Dove",
    quantity: 33,
    description: "Gentle moisturizing soap for glowing skin.",
    id: 2,
    category: "cosmetic",
    image: "https://nazarjanssupermarket.com/cdn/shop/products/dove-sensitive-skin-soap-106gm-usa-nazar-jan-s-supermarket.jpg?v=1715275648"
  },
  {
    title: "Dell Inspiron 15 5502",
    price: "164,999",
    brand: "Dell",
    quantity: 5,
    description: "Powerful laptop with Intel i7 processor.",
    id: 3,
    category: "electronics",
    image: "https://dellshop.pk/wp-content/uploads/2021/10/Dell_pk.sku_5502-01.jpg"
  },
  {
    title: "Galaxy Z Fold6",
    price: "604,999",
    brand: "Samsung",
    quantity: 15,
    description: "Next-generation foldable smartphone experience.",
    id: 4,
    category: "electronics",
    image: "https://images.samsung.com/is/image/samsung/p6pim/pk/sm-f956bdbgpkd/gallery/pk-galaxy-z-fold6-f956-519772-sm-f956bdbgpkd-thumb-543086728?$216_216_PNG$"
  },
  {
    title: "Red Velvet Cake",
    price: "2500",
    brand: "Ruhama",
    quantity: 50,
    description: "Delicious cream cheese layered red velvet cake.",
    id: 5,
    category: "sweet",
    image: "https://sallysbakingaddiction.com/wp-content/uploads/2015/02/red-velvet-cake-recipe-4.jpg"
  }
];

// Display container
const productContainer = document.getElementById("productContainer");

// Generate product card
const generateProductCard = (product) => {
  return `
  <div class="card">
    <img src="${product.image}" class="card-img-top" alt="${product.title}">
    <div class="card-body">
      <h5 class="card-title">${product.title}</h5>
      <p class="card-text">${product.description}</p>
      <a href="#" class="btn btn-primary">Buy Now</a>
    </div>
  </div>
  `;
};

// Initial display
let productHtml = products.map(generateProductCard).join("");
productContainer.innerHTML = productHtml;

// Search function
const searchProduct = (products, searchItem) => {
  return products.filter((product) =>
    product.title.toLowerCase().includes(searchItem.toLowerCase())
  );
};

// Search input handler
const searchInput = (searchItem) => {
  let searchResult = searchProduct(products, searchItem);
  if (searchResult.length > 0) {
    productContainer.innerHTML = searchResult.map(generateProductCard).join("");
  } else {
    productContainer.innerHTML = `<h2 class="no-match">No Match Found 😢</h2>`;
  }
};
