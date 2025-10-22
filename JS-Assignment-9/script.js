const productContainer = document.getElementById("productContainer");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const adviceText = document.getElementById("adviceText");
const newAdviceBtn = document.getElementById("newAdviceBtn");
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

let allProducts = [];

// --- Fetch Products ---
async function fetchProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    allProducts = data;
    displayProducts(data);
  } catch (error) {
    console.error("Error fetching products:", error);
    productContainer.innerHTML =
      "<p>❌ Failed to load products. Check console or internet.</p>";
  }
}

// --- Display Products ---
function displayProducts(products) {
  productContainer.innerHTML = products
    .map(
      (p) => `
      <div class="product-card">
        <img src="${p.image}" alt="${p.title}">
        <h4>${p.title.slice(0, 25)}...</h4>
        <p>$${p.price}</p>
        <small>${p.category}</small>
      </div>`
    )
    .join("");
}

// --- Search Functionality ---
searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = allProducts.filter((p) =>
    p.title.toLowerCase().includes(value)
  );
  displayProducts(filtered);
});

// --- Filter Buttons ---
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");

    const category = btn.dataset.category;
    if (category === "all") {
      displayProducts(allProducts);
    } else {
      const filtered = allProducts.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      );
      displayProducts(filtered);
    }
  });
});

// --- Fetch Advice ---
async function fetchAdvice() {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    adviceText.textContent = data.slip.advice;
  } catch (error) {
    console.error("Error fetching advice:", error);
    adviceText.textContent = "Could not load advice.";
  }
}

newAdviceBtn.addEventListener("click", fetchAdvice);

// --- Toggle Sidebar on Mobile ---
menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});

// --- Initialize ---
fetchProducts();
fetchAdvice();
