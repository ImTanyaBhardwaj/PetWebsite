/**
 * Fish & Pets Paradise — E-Commerce Pet Shop & 24/7 Pet Care Consultation Logic
 */

// Configurable WhatsApp Phone Number (International format without '+' or spaces)
const WHATSAPP_PHONE_NUMBER = "919463365025";
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_PHONE_NUMBER}`;

// Realistic Pet Shop Products Dataset
const PRODUCTS_DATA = [
  {
    id: 101,
    name: "Canine Creek Life Preservation Formula Grain Free Dog Food (4 Kg)",
    category: "dog_food",
    petType: "dog",
    brand: "Canine Creek",
    price: 2250,
    originalPrice: 2500,
    discount: "10% OFF",
    rating: 4.9,
    reviewsCount: 156,
    badge: "Grain Free",
    badgeType: "hot",
    image: "assets/images/canine_creek_4kg.jpg",
    shortDesc: "Advanced pet nutrition with real chicken & egg, grain-free Life Preservation formula for healthy growth & vitality.",
    fullDesc: "Canine Creek Life Preservation Formula is an ultra-premium grain-free dog food crafted with real chicken and egg as the #1 ingredient. Enriched with cold-formed Life Preservation kibble, DHA for brain health, essential vitamins, and minerals to bolster immunity, promote healthy joints, and ensure superior digestion.",
    specs: {
      "Weight": "4 kg",
      "MRP": "₹2,250",
      "Formula": "Life Preservation Formula (Grain Free)",
      "Key Ingredients": "Real Chicken & Egg (#1 Ingredient)",
      "Life Stage": "Puppy & Adult (All Breeds)"
    },
    inStock: true
  },
  {
    id: 102,
    name: "Pedigree PROCARE Adult Small Breeds Dog Food (3 Kg)",
    category: "dog_food",
    petType: "dog",
    brand: "Pedigree",
    price: 1200,
    originalPrice: 1399,
    discount: "14% OFF",
    rating: 4.8,
    reviewsCount: 138,
    badge: "Immune Support",
    badgeType: "deal",
    image: "assets/images/pedigree_procare_3kg.jpg",
    shortDesc: "Specialized formula for small breed adult dogs with lifelong immune health and dental defense.",
    fullDesc: "Pedigree PROCARE Adult Small Breeds (9 months onwards) is developed with veterinary nutritionists at Waltham Petcare Science Institute. Fortified with 20% protein, active dental defense, zinc and omega fatty acids for a glossy coat, and antioxidants to strengthen immune resistance.",
    specs: {
      "Weight": "3 kg",
      "MRP": "₹1,200",
      "Protein": "20% Protein Content",
      "Target Breed": "Small Breeds (Pomeranian, Shih Tzu, Pug, etc.)",
      "Life Stage": "Adult (9+ Months)"
    },
    inStock: true
  },
  {
    id: 1,
    name: "Royal Canin Maxi Adult Dog Food",
    category: "dog_food",
    petType: "dog",
    brand: "Royal Canin",
    price: 3250,
    originalPrice: 3850,
    discount: "16% OFF",
    rating: 4.9,
    reviewsCount: 142,
    badge: "Bestseller",
    badgeType: "bestseller",
    image: "assets/images/dog_food.jpg",
    shortDesc: "Complete nutrition formulated for large breed adult dogs (26–44 kg) with joint support.",
    fullDesc: "Royal Canin Maxi Adult is tailored specifically to meet the nutritional requirements of large breed dogs. Packed with optimal high-digestibility proteins and balanced dietary fibers, it promotes bone & joint health while maintaining ideal weight.",
    specs: {
      "Weight": "4 kg / 10 kg / 15 kg",
      "Life Stage": "Adult (15 months to 5 years)",
      "Flavor": "Poultry & Rice",
      "Diet Type": "Non-Vegetarian Complete Diet"
    },
    inStock: true
  },
  {
    id: 2,
    name: "Arden Grange Puppy Starter Food (Chicken)",
    category: "dog_food",
    petType: "dog",
    brand: "Arden Grange",
    price: 1899,
    originalPrice: 2250,
    discount: "15% OFF",
    rating: 4.8,
    reviewsCount: 98,
    badge: "Puppy Choice",
    badgeType: "hot",
    image: "assets/images/golden_pup.jpg",
    shortDesc: "Nutrient-dense kibble enriched with DHA for brain development & strong immunity.",
    fullDesc: "Arden Grange Puppy Rich in Fresh Chicken provides the perfect balance of vitamins and minerals to encourage steady, healthy growth rates. Hypoallergenic recipe free from wheat, beef, soya, and dairy.",
    specs: {
      "Weight": "2 kg / 6 kg",
      "Life Stage": "Puppy (2 to 12 months)",
      "Key Benefit": "Cognitive growth, immune boost",
      "Origin": "Imported from UK"
    },
    inStock: true
  },
  {
    id: 3,
    name: "Whiskas Ocean Fish Adult Cat Wet Pouches (Pack of 12)",
    category: "cat_food",
    petType: "cat",
    brand: "Whiskas",
    price: 600,
    originalPrice: 720,
    discount: "17% OFF",
    rating: 4.9,
    reviewsCount: 186,
    badge: "Top Rated",
    badgeType: "bestseller",
    image: "assets/images/cat_food.jpg",
    shortDesc: "Delicious real fish chunks in rich jelly to support feline hydration & urinary health.",
    fullDesc: "Whiskas Ocean Fish wet food pouches are specially formulated with real mackerel and salmon chunks in gravy/jelly. Provides complete & balanced nutrition with Zinc & Omega 6 fatty acids for a glossy coat.",
    specs: {
      "Pack Size": "12 x 85g Pouches",
      "Life Stage": "Adult Cat (1+ Years)",
      "Key Benefit": "Urinary tract care & hydration",
      "Texture": "Chunks in Delicious Jelly"
    },
    inStock: true
  },
  {
    id: 4,
    name: "Farmina N&D Grain-Free Salmon & Melon Cat Food",
    category: "cat_food",
    petType: "cat",
    brand: "Farmina",
    price: 2150,
    originalPrice: 2490,
    discount: "14% OFF",
    rating: 4.9,
    reviewsCount: 74,
    badge: "Ultra Premium",
    badgeType: "premium",
    image: "assets/images/cat_food.jpg",
    shortDesc: "Low-glycemic grain-free recipe with 98% animal protein for indoor & active cats.",
    fullDesc: "Farmina Natural & Delicious Prime Cat Food combines wild-caught salmon with cantaloupe melon. Designed to mimic natural feline ancestral diets with zero grains, GMOs, or artificial preservatives.",
    specs: {
      "Weight": "1.5 kg / 5 kg",
      "Protein": "44% Crude Protein",
      "Life Stage": "All Life Stages",
      "Made in": "Italy"
    },
    inStock: true
  },
  {
    id: 5,
    name: "JerHigh Calcium & Milk Dental Chews for Dogs",
    category: "treats",
    petType: "dog",
    brand: "JerHigh",
    price: 299,
    originalPrice: 380,
    discount: "21% OFF",
    rating: 4.7,
    reviewsCount: 112,
    badge: "Dental Care",
    badgeType: "deal",
    image: "assets/images/hero_dog.jpg",
    shortDesc: "Delicious milk-infused dental chew sticks that reduce plaque and strengthen teeth.",
    fullDesc: "JerHigh Milk Dental Sticks are made with real chicken meat and fortified with bio-available calcium. Helps clean hard-to-reach teeth, combats bad breath, and satisfies natural chewing urges.",
    specs: {
      "Weight": "70g / 150g",
      "Flavor": "Milk & Real Chicken",
      "Benefit": "Tartar reduction & fresh breath",
      "Texture": "Flexible chewy stick"
    },
    inStock: true
  },
  {
    id: 6,
    name: "Temptations Creamy Puree Salmon Cat Treats",
    category: "treats",
    petType: "cat",
    brand: "Temptations",
    price: 249,
    originalPrice: 299,
    discount: "17% OFF",
    rating: 4.9,
    reviewsCount: 89,
    badge: "Cat Favorite",
    badgeType: "popular",
    image: "assets/images/cat_food.jpg",
    shortDesc: "Lickable creamy salmon puree treat sachets for hand feeding and topping food.",
    fullDesc: "Temptations Creamy Puree is an irresistible treat made with real salmon. Squeeze directly from the sachet for bonding or use as an appetizing topper over dry kibble.",
    specs: {
      "Pack": "4 x 15g Sachets",
      "Flavor": "Wild Salmon & Tuna",
      "Texture": "Silky Creamy Puree",
      "Calories": "Less than 8 kcal per sachet"
    },
    inStock: true
  },
  {
    id: 7,
    name: "Drools Absolute Calcium & Vitamin D3 Syrup (300ml)",
    category: "medicines",
    petType: "dog",
    brand: "Drools",
    price: 349,
    originalPrice: 425,
    discount: "18% OFF",
    rating: 4.8,
    reviewsCount: 165,
    badge: "Vet Approved",
    badgeType: "pharma",
    image: "assets/images/aussie.jpg",
    shortDesc: "Essential bone, teeth, and joint health syrup for growing puppies and lactating pets.",
    fullDesc: "Drools Absolute Calcium Syrup delivers an optimal ratio of Calcium and Phosphorus along with Vitamin D3 to ensure strong skeletal development, prevention of rickets, and healthy cartilage in dogs.",
    specs: {
      "Volume": "300 ml",
      "Form": "Pleasant tasting syrup",
      "Recommended For": "Puppies, pregnant/nursing dogs, seniors",
      "Dosage": "5-10 ml daily as per body weight"
    },
    inStock: true
  },
  {
    id: 8,
    name: "Fipronil Spot-On Flea & Tick Treatment",
    category: "medicines",
    petType: "dog",
    brand: "FiproFort",
    price: 399,
    originalPrice: 499,
    discount: "20% OFF",
    rating: 4.9,
    reviewsCount: 210,
    badge: "High Demand",
    badgeType: "pharma",
    image: "assets/images/husky.jpg",
    shortDesc: "Fast-acting topical spot-on pipette that eliminates ticks, fleas, and lice for 30 days.",
    fullDesc: "Topical veterinary solution for dogs that kills existing fleas within 24 hours and ticks within 48 hours. Waterproof formula continues protecting even after bathing.",
    specs: {
      "Quantity": "Single Pipette (1.34 ml / 2.68 ml)",
      "Duration": "1 Month Full Protection",
      "Application": "Directly onto skin between shoulder blades",
      "Safety": "Safe for dogs 8 weeks and older"
    },
    inStock: true
  },
  {
    id: 9,
    name: "Bio-Groom Natural Oatmeal Anti-Itch Pet Shampoo",
    category: "grooming",
    petType: "dog",
    brand: "Bio-Groom",
    price: 899,
    originalPrice: 1100,
    discount: "18% OFF",
    rating: 4.9,
    reviewsCount: 132,
    badge: "Spa Formula",
    badgeType: "spa",
    image: "assets/images/frenchie.jpg",
    shortDesc: "Colloidal oatmeal enriched soothing shampoo for dry, sensitive, or itchy pet skin.",
    fullDesc: "Bio-Groom Natural Oatmeal Shampoo is soap-free, biodegradable, and formulated with natural colloidal oatmeal to relieve skin redness, dandruff, and seasonal allergies while leaving a soft, fresh fragrance.",
    specs: {
      "Volume": "355 ml (12 fl oz)",
      "Suitable For": "Dogs & Cats of all breeds",
      "Key Ingredients": "Colloidal Oatmeal, Aloe Vera, Chamomile",
      "pH": "Balanced for pet coat & skin"
    },
    inStock: true
  },
  {
    id: 10,
    name: "Breathable Reflective Dog Hoodie & Sport Shirt",
    category: "clothes",
    petType: "dog",
    brand: "PawStyle",
    price: 499,
    originalPrice: 699,
    discount: "28% OFF",
    rating: 4.7,
    reviewsCount: 68,
    badge: "Trendy",
    badgeType: "hot",
    image: "assets/images/corgi.jpg",
    shortDesc: "Comfortable soft stretch cotton t-shirt with night-reflective safety stripes.",
    fullDesc: "Keep your pet stylish and warm during chilly mornings and evening walks. High-elasticity breathable cotton fabric ensures zero restriction of movement and easy machine washing.",
    specs: {
      "Sizes Available": "S, M, L, XL, XXL",
      "Material": "100% Breathable Combed Cotton",
      "Features": "Reflective safety strip & leash opening",
      "Care": "Machine wash cold"
    },
    inStock: true
  },
  {
    id: 11,
    name: "Heavy Duty Ergonomic No-Pull Dog Harness & Leash",
    category: "toys",
    petType: "dog",
    brand: "TrailPaws",
    price: 849,
    originalPrice: 1199,
    discount: "29% OFF",
    rating: 4.9,
    reviewsCount: 175,
    badge: "Best Gear",
    badgeType: "deal",
    image: "assets/images/husky.jpg",
    shortDesc: "Padded escape-proof chest harness with dual leash clips & heavy-duty shock leash.",
    fullDesc: "Engineered to distribute pulling pressure evenly across your dog's torso to prevent choking. Features fast-release buckles, breathable sponge padding, and night-reflective 3M stitching.",
    specs: {
      "Sizes": "Small (10-25 lbs) / Medium (25-55 lbs) / Large (55-90 lbs)",
      "Included": "Harness + 5ft Heavy Duty Bungee Leash",
      "Material": "Military Grade Oxford Fabric + Zinc Alloy D-Ring",
      "Adjustable": "4-point customization straps"
    },
    inStock: true
  },
  {
    id: 12,
    name: "Orthopedic Memory Foam Pet Lounge Bed (Waterproof)",
    category: "beds",
    petType: "dog",
    brand: "ComfyPaws",
    price: 1699,
    originalPrice: 2200,
    discount: "23% OFF",
    rating: 4.9,
    reviewsCount: 94,
    badge: "Orthopedic",
    badgeType: "premium",
    image: "assets/images/frenchie.jpg",
    shortDesc: "Ultra-plush high-density orthopedic memory foam bed with removable washable cover.",
    fullDesc: "Provides superior joint support and pressure relief for dogs and cats. Features a waterproof inner liner to protect against accidents and a non-skid rubber bottom.",
    specs: {
      "Dimensions": "Medium (30x20 in) / Large (36x28 in)",
      "Base": "3.5-inch High Density Memory Foam",
      "Cover": "Soft Micro-Velvet (Machine Washable)",
      "Colors": "Charcoal Grey / Royal Brown"
    },
    inStock: true
  }
];

// App State
let currentCategoryFilter = "all";
let currentSearchTerm = "";
let currentSort = "featured";
let favoriteProductIds = [];
let cartItems = []; // Array of { id, quantity, product }

// DOM Elements
const productsGrid = document.getElementById("products-grid");
const emptyState = document.getElementById("empty-state");
const searchInput = document.getElementById("product-keyword-search");
const clearSearchBtn = document.getElementById("clear-search");
const sortSelect = document.getElementById("sort-select");
const catTabs = document.querySelectorAll("#product-category-tabs .cat-tab");

// Badges & Drawers
const favBadgeCount = document.getElementById("fav-badge-count");
const favDrawer = document.getElementById("favorites-drawer");
const favDrawerOverlay = document.getElementById("fav-drawer-overlay");
const drawerFavList = document.getElementById("drawer-favorites-list");
const favDrawerCount = document.getElementById("fav-drawer-count");

const cartBadgeCount = document.getElementById("cart-badge-count");
const cartDrawer = document.getElementById("cart-drawer");
const cartDrawerOverlay = document.getElementById("cart-drawer-overlay");
const drawerCartList = document.getElementById("drawer-cart-list");
const cartDrawerCount = document.getElementById("cart-drawer-count");
const cartSubtotalEl = document.getElementById("cart-subtotal");

// Modals & Controls
const productModal = document.getElementById("product-modal");
const productModalOverlay = document.getElementById("product-modal-overlay");
const modalContentContainer = document.getElementById("modal-content-container");
const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const navMenu = document.getElementById("nav-menu");

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  loadSavedPreferences();
  setupEventListeners();
  renderProducts();
  updateFavoritesUI();
  updateCartUI();
  initTypewriter();
  initLucide();
});

function initLucide() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Load Favorites, Cart & Theme from LocalStorage
function loadSavedPreferences() {
  const savedFavs = localStorage.getItem("petparadise_favs");
  if (savedFavs) {
    try {
      favoriteProductIds = JSON.parse(savedFavs);
    } catch (e) {
      favoriteProductIds = [];
    }
  }

  const savedCart = localStorage.getItem("petparadise_cart");
  if (savedCart) {
    try {
      cartItems = JSON.parse(savedCart);
    } catch (e) {
      cartItems = [];
    }
  }

  const savedTheme = localStorage.getItem("petparadise_theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("data-theme", "dark");
    updateThemeIcon("dark");
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Category tabs on products section
  catTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      catTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentCategoryFilter = tab.getAttribute("data-category");
      renderProducts();
    });
  });

  // Keyword Search
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchTerm = e.target.value.trim().toLowerCase();
      if (clearSearchBtn) clearSearchBtn.style.display = currentSearchTerm ? "block" : "none";
      renderProducts();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      currentSearchTerm = "";
      clearSearchBtn.style.display = "none";
      renderProducts();
    });
  }

  // Sort Selection
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  // Hero Quick Search
  const heroSearchBtn = document.getElementById("hero-search-submit");
  const heroSearchInput = document.getElementById("hero-product-search");
  const heroCatSelect = document.getElementById("hero-category-select");

  if (heroSearchBtn) {
    heroSearchBtn.addEventListener("click", () => {
      const searchVal = heroSearchInput ? heroSearchInput.value.trim().toLowerCase() : "";
      const catVal = heroCatSelect ? heroCatSelect.value : "all";

      currentSearchTerm = searchVal;
      currentCategoryFilter = catVal;

      if (searchInput) searchInput.value = searchVal;
      if (clearSearchBtn) clearSearchBtn.style.display = searchVal ? "block" : "none";

      // Sync active cat tab
      catTabs.forEach(tab => {
        if (tab.getAttribute("data-category") === catVal) {
          tab.classList.add("active");
        } else {
          tab.classList.remove("active");
        }
      });

      renderProducts();

      const prodSection = document.getElementById("products-section");
      if (prodSection) {
        prodSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Reset Filters Button
  const resetBtn = document.getElementById("reset-filters-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      currentCategoryFilter = "all";
      currentSearchTerm = "";
      if (searchInput) searchInput.value = "";
      if (clearSearchBtn) clearSearchBtn.style.display = "none";
      catTabs.forEach(t => t.classList.remove("active"));
      if (catTabs[0]) catTabs[0].classList.add("active");
      renderProducts();
    });
  }

  // Cart & Favorites Drawer Triggers
  const cartTrigger = document.getElementById("cart-drawer-trigger");
  if (cartTrigger) {
    cartTrigger.addEventListener("click", openCartDrawer);
  }

  const favTrigger = document.getElementById("fav-drawer-trigger");
  if (favTrigger) {
    favTrigger.addEventListener("click", openFavoritesDrawer);
  }

  // Theme Toggle Trigger
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", toggleTheme);
  }

  // Mobile Navigation
  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("mobile-open");
    });
  }

  // Header quick search trigger
  const searchTriggerBtn = document.getElementById("search-trigger-btn");
  if (searchTriggerBtn) {
    searchTriggerBtn.addEventListener("click", () => {
      const prodSec = document.getElementById("products-section");
      if (prodSec) {
        prodSec.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          if (searchInput) searchInput.focus();
        }, 400);
      }
    });
  }
}

// Global Category Filter from Category Cards
window.filterCategoryFromCard = function(categoryKey) {
  currentCategoryFilter = categoryKey;
  currentSearchTerm = "";
  if (searchInput) searchInput.value = "";
  if (clearSearchBtn) clearSearchBtn.style.display = "none";

  catTabs.forEach(tab => {
    if (tab.getAttribute("data-category") === categoryKey) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });

  renderProducts();

  const prodSec = document.getElementById("products-section");
  if (prodSec) {
    prodSec.scrollIntoView({ behavior: "smooth" });
  }
};

// Filter by Pet Type (Dog / Cat)
window.filterByPetType = function(petType) {
  currentCategoryFilter = "all";
  currentSearchTerm = petType;
  if (searchInput) searchInput.value = petType;
  if (clearSearchBtn) clearSearchBtn.style.display = "block";

  catTabs.forEach(t => t.classList.remove("active"));
  if (catTabs[0]) catTabs[0].classList.add("active");

  renderProducts();

  const prodSec = document.getElementById("products-section");
  if (prodSec) {
    prodSec.scrollIntoView({ behavior: "smooth" });
  }
  showToast(`Showing popular ${petType.toUpperCase()} products 🐾`, "info");
};

// Render Products Grid
function renderProducts() {
  let filtered = [...PRODUCTS_DATA];

  // Category filter
  if (currentCategoryFilter !== "all") {
    filtered = filtered.filter(p => p.category === currentCategoryFilter);
  }

  // Keyword search
  if (currentSearchTerm) {
    filtered = filtered.filter(p => {
      const text = `${p.name} ${p.brand} ${p.category} ${p.petType} ${p.shortDesc} ${p.fullDesc}`.toLowerCase();
      return text.includes(currentSearchTerm);
    });
  }

  // Sort
  if (currentSort === "price_low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === "price_high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (currentSort === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  renderFilteredProducts(filtered);
}

function renderFilteredProducts(productsList) {
  if (!productsGrid) return;

  if (productsList.length === 0) {
    productsGrid.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    return;
  }

  if (emptyState) emptyState.style.display = "none";

  productsGrid.innerHTML = productsList.map(prod => {
    const isFav = favoriteProductIds.includes(prod.id);
    const inCart = cartItems.find(item => item.id === prod.id);

    return `
      <article class="product-card" data-id="${prod.id}">
        <div class="product-card-img-wrap">
          <img src="${prod.image}" alt="${prod.name}" class="product-card-img" loading="lazy" onerror="this.onerror=null; this.src='assets/images/hero_dog.jpg';">
          <span class="product-badge ${prod.badgeType}">${prod.badge}</span>
          <button class="card-fav-btn ${isFav ? 'active' : ''}" 
                  onclick="toggleFavorite(${prod.id})" 
                  title="${isFav ? 'Remove from wishlist' : 'Save to wishlist'}" 
                  aria-label="Wishlist ${prod.name}">
            <i data-lucide="heart" class="icon-sm" ${isFav ? 'style="fill: #EF4444; color: #EF4444;"' : ''}></i>
          </button>
        </div>

        <div class="product-card-body">
          <div class="product-meta-row">
            <span class="product-brand-tag">${prod.brand}</span>
            <div class="product-rating-stars">
              <i data-lucide="star" class="star-gold"></i>
              <span class="rating-num">${prod.rating}</span>
              <span class="reviews-count">(${prod.reviewsCount})</span>
            </div>
          </div>

          <h3 class="product-title" onclick="openProductModal(${prod.id})">${prod.name}</h3>

          <p class="product-snippet">${prod.shortDesc}</p>

          <div class="product-price-row">
            <div class="price-stack">
              <span class="current-price">₹${prod.price.toLocaleString()}</span>
              ${prod.originalPrice ? `<span class="original-price">₹${prod.originalPrice.toLocaleString()}</span>` : ''}
            </div>
            ${prod.discount ? `<span class="discount-pill">${prod.discount}</span>` : ''}
          </div>

          <div class="product-card-actions">
            <button class="btn btn-primary add-cart-btn w-full" onclick="addToCart(${prod.id})">
              <i data-lucide="shopping-cart" class="icon-xs"></i>
              <span>${inCart ? `In Cart (${inCart.quantity})` : 'Add to Cart'}</span>
            </button>
            <button class="btn btn-secondary quick-view-btn" onclick="openProductModal(${prod.id})" title="Quick View & Dosage">
              <i data-lucide="eye" class="icon-xs"></i>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  initLucide();
}

// Shopping Cart Management
window.addToCart = function(productId, qtyToAdd = 1) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const existing = cartItems.find(item => item.id === productId);
  if (existing) {
    existing.quantity += qtyToAdd;
  } else {
    cartItems.push({ id: productId, quantity: qtyToAdd, product });
  }

  saveCart();
  updateCartUI();
  renderProducts();
  showToast(`Added ${product.name} to cart! 🛒`, "success");
};

window.removeFromCart = function(productId) {
  cartItems = cartItems.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
  renderProducts();
  showToast("Item removed from cart", "info");
};

window.updateCartItemQty = function(productId, delta) {
  const item = cartItems.find(item => item.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCart();
  updateCartUI();
  renderProducts();
};

function saveCart() {
  localStorage.setItem("petparadise_cart", JSON.stringify(cartItems));
}

function updateCartUI() {
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => {
    const prod = PRODUCTS_DATA.find(p => p.id === item.id) || item.product;
    return sum + (prod.price * item.quantity);
  }, 0);

  if (cartBadgeCount) {
    cartBadgeCount.textContent = totalCount;
    cartBadgeCount.classList.add("pop");
    setTimeout(() => cartBadgeCount.classList.remove("pop"), 300);
  }

  if (cartDrawerCount) {
    cartDrawerCount.textContent = totalCount;
  }

  if (cartSubtotalEl) {
    cartSubtotalEl.textContent = `₹${subtotal.toLocaleString()}`;
  }

  renderDrawerCart(subtotal);
}

function renderDrawerCart(subtotal) {
  if (!drawerCartList) return;

  if (cartItems.length === 0) {
    drawerCartList.innerHTML = `
      <div class="empty-state" style="padding: 3rem 1rem;">
        <div class="empty-icon"><i data-lucide="shopping-bag"></i></div>
        <h4>Your Cart is Empty</h4>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem;">
          Add premium pet food, medicines, treats, and grooming essentials to place your order.
        </p>
        <button class="btn btn-primary mt-4" onclick="closeCartDrawer(); filterCategoryFromCard('all');">
          Start Shopping
        </button>
      </div>
    `;
    initLucide();
    return;
  }

  drawerCartList.innerHTML = cartItems.map(item => {
    const prod = PRODUCTS_DATA.find(p => p.id === item.id) || item.product;
    return `
      <div class="cart-item">
        <img src="${prod.image}" alt="${prod.name}" class="cart-item-thumb" onerror="this.onerror=null; this.src='assets/images/hero_dog.jpg';">
        <div class="cart-item-details">
          <h4 class="cart-item-name">${prod.name}</h4>
          <span class="cart-item-brand">${prod.brand} • ₹${prod.price.toLocaleString()} each</span>
          <div class="cart-qty-row">
            <div class="qty-stepper">
              <button class="qty-btn" onclick="updateCartItemQty(${prod.id}, -1)">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" onclick="updateCartItemQty(${prod.id}, 1)">+</button>
            </div>
            <strong class="cart-item-total">₹${(prod.price * item.quantity).toLocaleString()}</strong>
            <button class="cart-item-remove" onclick="removeFromCart(${prod.id})" title="Remove item">
              <i data-lucide="trash-2" class="icon-xs"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  initLucide();
}

function openCartDrawer() {
  if (cartDrawer && cartDrawerOverlay) {
    cartDrawer.classList.add("active");
    cartDrawerOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
    updateCartUI();
  }
}

window.closeCartDrawer = function() {
  if (cartDrawer && cartDrawerOverlay) {
    cartDrawer.classList.remove("active");
    cartDrawerOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
};

// WhatsApp Direct Checkout for Entire Cart
window.checkoutCartViaWhatsApp = function() {
  if (cartItems.length === 0) {
    showToast("Your cart is empty! Add items first.", "info");
    return;
  }

  let subtotal = 0;
  let itemsSummary = cartItems.map((item, index) => {
    const prod = PRODUCTS_DATA.find(p => p.id === item.id) || item.product;
    const itemTotal = prod.price * item.quantity;
    subtotal += itemTotal;
    return `${index + 1}. *${prod.name}* (${prod.brand})\n   Qty: ${item.quantity} x ₹${prod.price} = ₹${itemTotal.toLocaleString()}`;
  }).join("\n\n");

  const message = `Hello *Fish & Pets Paradise*! 👋\n\nI would like to order the following pet products from your website:\n\n${itemsSummary}\n\n━━━━━━━━━━━━━━━━━━━━\n💰 *Total Order Amount: ₹${subtotal.toLocaleString()}*\n━━━━━━━━━━━━━━━━━━━━\n\nPlease confirm availability and delivery address details. Thank you!`;

  const encodedMsg = encodeURIComponent(message);
  const checkoutUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodedMsg}`;

  // Trigger celebration confetti
  if (window.confetti) {
    window.confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
  }

  window.open(checkoutUrl, "_blank");
  closeCartDrawer();
  showToast("Opening WhatsApp to complete your order! 🚀", "success");
};

// Favorites / Wishlist Management
window.toggleFavorite = function(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const index = favoriteProductIds.indexOf(productId);
  if (index > -1) {
    favoriteProductIds.splice(index, 1);
    showToast(`Removed ${product.name} from wishlist`, "info");
  } else {
    favoriteProductIds.push(productId);
    showToast(`Saved ${product.name} to wishlist! ❤️`, "success");
  }

  localStorage.setItem("petparadise_favs", JSON.stringify(favoriteProductIds));
  updateFavoritesUI();
  renderProducts();
};

function updateFavoritesUI() {
  const count = favoriteProductIds.length;
  if (favBadgeCount) {
    favBadgeCount.textContent = count;
    favBadgeCount.classList.add("pop");
    setTimeout(() => favBadgeCount.classList.remove("pop"), 300);
  }
  if (favDrawerCount) {
    favDrawerCount.textContent = count;
  }
  renderDrawerFavorites();
}

function openFavoritesDrawer() {
  if (favDrawer && favDrawerOverlay) {
    favDrawer.classList.add("active");
    favDrawerOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
    renderDrawerFavorites();
  }
}

window.closeFavoritesDrawer = function() {
  if (favDrawer && favDrawerOverlay) {
    favDrawer.classList.remove("active");
    favDrawerOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
};

function renderDrawerFavorites() {
  if (!drawerFavList) return;

  if (favoriteProductIds.length === 0) {
    drawerFavList.innerHTML = `
      <div class="empty-state" style="padding: 2.5rem 0;">
        <div class="empty-icon"><i data-lucide="heart-off"></i></div>
        <h4>No saved products yet</h4>
        <p style="font-size: 0.85rem; color: var(--text-secondary);">Click the heart icon on any product to save it to your wishlist.</p>
      </div>
    `;
    initLucide();
    return;
  }

  const favProducts = PRODUCTS_DATA.filter(p => favoriteProductIds.includes(p.id));

  drawerFavList.innerHTML = favProducts.map(prod => `
    <div class="fav-item">
      <img src="${prod.image}" alt="${prod.name}" class="fav-thumb" onerror="this.onerror=null; this.src='assets/images/hero_dog.jpg';">
      <div class="fav-details">
        <h4>${prod.name}</h4>
        <span>${prod.brand} • ₹${prod.price.toLocaleString()}</span>
        <div class="fav-actions">
          <button class="fav-meet-btn" onclick="addToCart(${prod.id}); closeFavoritesDrawer();">
            Add to Cart
          </button>
          <button class="fav-remove-btn" onclick="toggleFavorite(${prod.id})" title="Remove">
            <i data-lucide="trash-2" class="icon-xs"></i>
          </button>
        </div>
      </div>
    </div>
  `).join("");

  initLucide();
}

// Product Quick View & WhatsApp Instant Order Modal
window.openProductModal = function(productId) {
  const prod = PRODUCTS_DATA.find(p => p.id === productId);
  if (!prod) return;

  const specsList = Object.entries(prod.specs || {}).map(([key, val]) => `
    <div class="modal-spec-item">
      <small>${key}</small>
      <strong>${val}</strong>
    </div>
  `).join("");

  const directWhatsAppMsg = encodeURIComponent(
    `Hello Fish & Pets Paradise! I want to buy *${prod.name}* (Price: ₹${prod.price}). Is this currently in stock for local delivery?`
  );

  modalContentContainer.innerHTML = `
    <!-- Left Column: Product Visual & Specs -->
    <div class="modal-col-left">
      <div class="modal-img-wrap">
        <img src="${prod.image}" alt="${prod.name}" onerror="this.onerror=null; this.src='assets/images/hero_dog.jpg';">
      </div>

      <div class="modal-badges-row">
        <span class="product-badge ${prod.badgeType}">${prod.badge}</span>
        <span class="tag-badge"><i data-lucide="shield-check" class="icon-xs text-success"></i> 100% Genuine</span>
      </div>

      <h2 class="modal-product-title">${prod.name}</h2>
      <div class="modal-product-meta">Brand: <strong>${prod.brand}</strong> • Category: <strong>${prod.category.replace('_', ' ').toUpperCase()}</strong></div>

      <p class="modal-bio-text">${prod.fullDesc}</p>

      <div class="modal-specs-grid">
        ${specsList}
      </div>
    </div>

    <!-- Right Column: Pricing & Quick Purchase -->
    <div class="modal-col-right" id="modal-form-col">
      <div class="product-buy-box">
        <div class="modal-price-card">
          <div class="price-header-row">
            <span class="modal-current-price">₹${prod.price.toLocaleString()}</span>
            ${prod.originalPrice ? `<span class="modal-original-price">₹${prod.originalPrice.toLocaleString()}</span>` : ''}
            ${prod.discount ? `<span class="discount-pill">${prod.discount}</span>` : ''}
          </div>
          <p class="modal-inclusive-tax"><i data-lucide="check" class="icon-xs text-success"></i> Inclusive of all taxes • Ready for immediate local dispatch</p>
        </div>

        <div class="modal-actions-container">
          <button class="btn btn-primary w-full btn-lg-action" onclick="addToCart(${prod.id}); closeProductModal(); openCartDrawer();">
            <i data-lucide="shopping-cart" class="icon-sm"></i>
            <span>Add to Cart & Checkout</span>
          </button>

          <a href="https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${directWhatsAppMsg}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp w-full btn-lg-action mt-3">
            <i data-lucide="message-circle" class="icon-sm"></i>
            <span>Order Instantly on WhatsApp</span>
          </a>

          <a href="https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=Hello%20Harman%20ji!%20I%20have%20a%20question%20regarding%20${encodeURIComponent(prod.name)}." target="_blank" rel="noopener noreferrer" class="btn btn-secondary w-full mt-2">
            <i data-lucide="help-circle" class="icon-xs"></i>
            <span>Ask Consultant About This Product</span>
          </a>
        </div>

        <div class="modal-trust-points">
          <div class="m-trust-item">
            <i data-lucide="truck" class="icon-xs text-primary"></i>
            <span>Same-Day Local Delivery in Jalandhar</span>
          </div>
          <div class="m-trust-item">
            <i data-lucide="award" class="icon-xs text-primary"></i>
            <span>Authentic Sealed Product Guarantee</span>
          </div>
          <div class="m-trust-item">
            <i data-lucide="headphones" class="icon-xs text-primary"></i>
            <span>Free 24/7 Pet Feeding Guidance</span>
          </div>
        </div>
      </div>
    </div>
  `;

  if (productModalOverlay) {
    productModalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
  initLucide();
};

window.closeProductModal = function() {
  if (productModalOverlay) {
    productModalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
};

window.handleModalOverlayClick = function(e) {
  if (e.target === productModalOverlay) {
    closeProductModal();
  }
};

// Pet Care Knowledge Tabs Switcher
window.switchCareTab = function(tabId) {
  const tabs = ["nutrition", "puppy", "health", "checklist"];
  const navBtns = document.querySelectorAll(".care-nav-btn");

  tabs.forEach(id => {
    const el = document.getElementById(`care-tab-${id}`);
    if (el) {
      el.style.display = (id === tabId) ? "block" : "none";
    }
  });

  navBtns.forEach(btn => {
    btn.classList.remove("active");
    if (btn.getAttribute("onclick") && btn.getAttribute("onclick").includes(tabId)) {
      btn.classList.add("active");
    }
  });
};

// Theme Toggling
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("petparadise_theme", newTheme);
  updateThemeIcon(newTheme);
  showToast(`Switched to ${newTheme === "dark" ? "Dark 🌙" : "Light ☀️"} mode`);
}

function updateThemeIcon(theme) {
  if (!themeIcon) return;
  if (theme === "dark") {
    themeIcon.setAttribute("data-lucide", "sun");
  } else {
    themeIcon.setAttribute("data-lucide", "moon");
  }
  initLucide();
}

// Toast Notifications
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  const iconName = type === "success" ? "check-circle-2" : "info";

  toast.innerHTML = `
    <i data-lucide="${iconName}" class="icon-sm"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  initLucide();

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Fluid Typewriter Headline Effect
function initTypewriter() {
  const target = document.getElementById("typewriter-text");
  if (!target) return;

  const phrases = [
    "24/7 Free Pet Consultation.",
    "Premium Dog & Cat Nutrition.",
    "Authentic Pet Medicines.",
    "Grooming & Hygiene Care.",
    "Toys, Clothes & Accessories."
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 75;

  function typeStep() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      target.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 35;
    } else {
      target.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 65 + Math.random() * 25;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      typingSpeed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 400;
    }

    setTimeout(typeStep, typingSpeed);
  }

  setTimeout(typeStep, 350);
}
