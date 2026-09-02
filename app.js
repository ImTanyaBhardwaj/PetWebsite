/**
 * BarkHaven — Web Application Logic & Interactions
 */

// Comprehensive Dog Data Set
const DOGS_DATA = [
  {
    id: 1,
    name: "Cooper",
    breed: "Golden Retriever",
    age: 2,
    ageLabel: "2 Years",
    gender: "Male",
    size: "Large",
    weight: "65 lbs",
    badge: "Available",
    badgeType: "available",
    image: "assets/images/hero_dog.jpg",
    energyScore: 75,
    energyLabel: "Moderate to High",
    categories: ["family", "active"],
    tags: ["Good with Kids", "Cat Friendly", "House Trained", "Loves Water"],
    description: "Cooper is a joyful, affectionate Golden Retriever who lives for game days at the park, swimming in calm streams, and warm snuggles on the rug. He has mastered sit, stay, down, and paw.",
    medical: "Fully vaccinated, microchipped, neutered, negative for heartworms.",
    backstory: "Cooper's previous family had to relocate overseas. He was lovingly surrendered so he could find a devoted household with room to play.",
    compatibility: ["Suburban Homes", "Families with Children", "Outdoor Adventurers"]
  },
  {
    id: 2,
    name: "Bella",
    breed: "French Bulldog",
    age: 0.35,
    ageLabel: "4 Months",
    gender: "Female",
    size: "Small",
    weight: "14 lbs",
    badge: "New Arrival",
    badgeType: "new",
    image: "assets/images/frenchie.jpg",
    energyScore: 40,
    energyLabel: "Calm & Snuggly",
    categories: ["apartment", "puppy", "family"],
    tags: ["Apartment Pro", "Couch Cuddler", "Gentle Temperament"],
    description: "Bella is an inquisitive little sweetheart with expressive bat ears and an adoration for soft laps. She enjoys calm afternoon strolls followed by long naps beside you.",
    medical: "Up to date on puppy booster shots, dewormed, microchip enrolled.",
    backstory: "Bella was rescued from an overcrowded regional shelter. She is thriving in her foster home and quickly learning potty pad routines.",
    compatibility: ["Apartments & Condos", "First-time Parents", "Relaxed Lifestyles"]
  },
  {
    id: 3,
    name: "Ghost",
    breed: "Siberian Husky",
    age: 3,
    ageLabel: "3 Years",
    gender: "Male",
    size: "Large",
    weight: "58 lbs",
    badge: "Available",
    badgeType: "available",
    image: "assets/images/husky.jpg",
    energyScore: 92,
    energyLabel: "High Endurance",
    categories: ["active"],
    tags: ["Athletic", "Trail Ready", "Snow Lover", "Vocal Talker"],
    description: "Ghost has hypnotic icy blue eyes and an adventurous spirit. He is the ultimate hiking and jogging companion for someone with an active outdoor lifestyle.",
    medical: "Neutered, vaccinated, recent orthopedic clearance, microchipped.",
    backstory: "Rescued from a northern mountain trail community, Ghost loves working alongside humans and responds excellently to positive harness training.",
    compatibility: ["Active Hikers", "Fenced Yards", "Experienced Owners"]
  },
  {
    id: 4,
    name: "Willow",
    breed: "Australian Shepherd",
    age: 0.5,
    ageLabel: "6 Months",
    gender: "Female",
    size: "Medium",
    weight: "28 lbs",
    badge: "Available",
    badgeType: "available",
    image: "assets/images/aussie.jpg",
    energyScore: 88,
    energyLabel: "High & Eager",
    categories: ["active", "puppy", "family"],
    tags: ["Super Smart", "Agility Star", "Eager to Learn"],
    description: "Willow is an extraordinarily bright Aussie pup with a striking blue merle coat. She loves puzzle toys, fetch, learning tricks, and participating in agility games.",
    medical: "Vaccinated, dewormed, scheduled for routine spay (included with adoption).",
    backstory: "Willow came to BarkHaven as part of a rural ranch litter rescue. She is socialized, friendly with other dogs, and loves people.",
    compatibility: ["Suburban/Acreage Homes", "Agility Enthusiasts", "Families"]
  },
  {
    id: 5,
    name: "Barnaby",
    breed: "Pembroke Welsh Corgi",
    age: 1.5,
    ageLabel: "1.5 Years",
    gender: "Male",
    size: "Small",
    weight: "26 lbs",
    badge: "Urgent Foster",
    badgeType: "urgent",
    image: "assets/images/corgi.jpg",
    energyScore: 60,
    energyLabel: "Moderate & Cheerful",
    categories: ["apartment", "family"],
    tags: ["Charming", "Great with Other Dogs", "Leash Trained"],
    description: "With his foxy smile and signature waddle, Barnaby brings an infectious positivity wherever he goes. He loves greeting neighbors and doing zoomies in the grass.",
    medical: "Neutered, vaccinated, flea/tick preventative up to date, clear vet check.",
    backstory: "Barnaby's former owner had severe health complications. He is looking for a warm, dedicated adopter to shower with loyalty.",
    compatibility: ["Apartments or Houses", "Couples/Singles", "Dog-Friendly Parks"]
  },
  {
    id: 6,
    name: "Sunny",
    breed: "Golden Retriever",
    age: 0.25,
    ageLabel: "3 Months",
    gender: "Male",
    size: "Large",
    weight: "16 lbs",
    badge: "New Arrival",
    badgeType: "new",
    image: "assets/images/golden_pup.jpg",
    energyScore: 70,
    energyLabel: "Playful Puppy",
    categories: ["puppy", "family", "apartment"],
    tags: ["Ultra Sweet", "Eager Learner", "Loves Toys", "Gentle"],
    description: "Sunny is as warm and cheerful as his name suggests. He sleeps through the night in his crate, loves chew bones, and makes friends with everyone he meets.",
    medical: "Core puppy vaccinations commenced, microchipped, dewormed.",
    backstory: "Surrendered from an unexpected litter, Sunny was nurtured in our puppy kindergarten nursery and is ready for his forever home.",
    compatibility: ["Any Loving Home", "Patient Adopter", "Kids & Pets"]
  }
];

// App State
let currentFilter = "all";
let currentSearchTerm = "";
let currentSort = "featured";
let favoriteDogIds = [];
let quizAnswers = { environment: null, activity: null, experience: null };

// DOM Elements
const dogsGrid = document.getElementById("dogs-grid");
const emptyState = document.getElementById("empty-state");
const searchInput = document.getElementById("dog-keyword-search");
const clearSearchBtn = document.getElementById("clear-search");
const sortSelect = document.getElementById("sort-select");
const catTabs = document.querySelectorAll(".cat-tab");
const favBadgeCount = document.getElementById("fav-badge-count");
const favDrawer = document.getElementById("favorites-drawer");
const favDrawerOverlay = document.getElementById("fav-drawer-overlay");
const drawerFavList = document.getElementById("drawer-favorites-list");
const drawerCount = document.getElementById("drawer-count");
const dogModal = document.getElementById("dog-modal");
const dogModalOverlay = document.getElementById("dog-modal-overlay");
const modalContentContainer = document.getElementById("modal-content-container");
const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const navMenu = document.getElementById("nav-menu");

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  loadSavedPreferences();
  setupEventListeners();
  renderDogs();
  updateFavoritesUI();
  initTypewriter();
  initLucide();
});

function initLucide() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Load Favorites & Theme from LocalStorage
function loadSavedPreferences() {
  const savedFavs = localStorage.getItem("barkhaven_favs");
  if (savedFavs) {
    try {
      favoriteDogIds = JSON.parse(savedFavs);
    } catch (e) {
      favoriteDogIds = [];
    }
  }

  const savedTheme = localStorage.getItem("barkhaven_theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("data-theme", "dark");
    updateThemeIcon("dark");
  }
}

// Event Listeners Setup
function setupEventListeners() {
  // Category tabs
  catTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      catTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentFilter = tab.getAttribute("data-category");
      renderDogs();
    });
  });

  // Keyword Search
  searchInput.addEventListener("input", (e) => {
    currentSearchTerm = e.target.value.trim().toLowerCase();
    clearSearchBtn.style.display = currentSearchTerm ? "block" : "none";
    renderDogs();
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    currentSearchTerm = "";
    clearSearchBtn.style.display = "none";
    renderDogs();
  });

  // Sort Selection
  sortSelect.addEventListener("change", (e) => {
    currentSort = e.target.value;
    renderDogs();
  });

  // Hero Quick Search
  const heroSearchBtn = document.getElementById("hero-search-submit");
  if (heroSearchBtn) {
    heroSearchBtn.addEventListener("click", () => {
      const breedVal = document.getElementById("hero-breed-select").value;
      const sizeVal = document.getElementById("hero-size-select").value;
      const ageVal = document.getElementById("hero-age-select").value;

      // Scroll to dogs section
      const targetSec = document.getElementById("dogs-section");
      if (targetSec) {
        targetSec.scrollIntoView({ behavior: "smooth" });
      }

      // Filter dogs according to criteria
      filterHeroDogs(breedVal, sizeVal, ageVal);
    });
  }

  // Reset Filters Button
  const resetBtn = document.getElementById("reset-filters-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      currentFilter = "all";
      currentSearchTerm = "";
      searchInput.value = "";
      clearSearchBtn.style.display = "none";
      catTabs.forEach(t => t.classList.remove("active"));
      if (catTabs[0]) catTabs[0].classList.add("active");
      renderDogs();
    });
  }

  // Favorites Drawer Trigger
  const favTrigger = document.getElementById("fav-drawer-trigger");
  if (favTrigger) {
    favTrigger.addEventListener("click", openFavoritesDrawer);
  }

  // Theme Toggle Trigger
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", toggleTheme);
  }

  // Mobile Navigation
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("mobile-open");
    });
  }

  // Quick Search icon in header
  const searchTriggerBtn = document.getElementById("search-trigger-btn");
  if (searchTriggerBtn) {
    searchTriggerBtn.addEventListener("click", () => {
      const dogsSec = document.getElementById("dogs-section");
      if (dogsSec) {
        dogsSec.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => searchInput.focus(), 400);
      }
    });
  }
}

// Hero Search logic
function filterHeroDogs(breed, size, ageStage) {
  let matched = DOGS_DATA.filter(dog => {
    let matchesBreed = (breed === "all" || dog.breed.toLowerCase().includes(breed.toLowerCase()));
    let matchesSize = (size === "all" || dog.size === size);
    let matchesAge = true;
    if (ageStage === "puppy") matchesAge = dog.age < 1;
    else if (ageStage === "young") matchesAge = dog.age >= 1 && dog.age <= 3;
    else if (ageStage === "adult") matchesAge = dog.age > 3 && dog.age < 7;
    else if (ageStage === "senior") matchesAge = dog.age >= 7;

    return matchesBreed && matchesSize && matchesAge;
  });

  renderFilteredDogs(matched);
  showToast(`Found ${matched.length} dog${matched.length === 1 ? '' : 's'} matching your search!`, "info");
}

// Render Dogs Grid
function renderDogs() {
  let filtered = [...DOGS_DATA];

  // Category filter
  if (currentFilter !== "all") {
    if (currentFilter === "senior") {
      filtered = filtered.filter(d => d.age >= 7);
    } else if (currentFilter === "puppy") {
      filtered = filtered.filter(d => d.age < 1 || d.categories.includes("puppy"));
    } else {
      filtered = filtered.filter(d => d.categories.includes(currentFilter));
    }
  }

  // Keyword search
  if (currentSearchTerm) {
    filtered = filtered.filter(d => {
      const text = `${d.name} ${d.breed} ${d.description} ${d.tags.join(" ")}`.toLowerCase();
      return text.includes(currentSearchTerm);
    });
  }

  // Sort
  if (currentSort === "youngest") {
    filtered.sort((a, b) => a.age - b.age);
  } else if (currentSort === "oldest") {
    filtered.sort((a, b) => b.age - a.age);
  } else if (currentSort === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  renderFilteredDogs(filtered);
}

function renderFilteredDogs(dogsList) {
  if (!dogsGrid) return;

  if (dogsList.length === 0) {
    dogsGrid.innerHTML = "";
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";
  dogsGrid.innerHTML = dogsList.map(dog => {
    const isFav = favoriteDogIds.includes(dog.id);
    const genderIcon = dog.gender === "Male" ? "mars" : "venus";
    const genderClass = dog.gender.toLowerCase();

    return `
      <article class="dog-card" data-id="${dog.id}">
        <div class="dog-card-img-wrap">
          <img src="${dog.image}" alt="${dog.name}, a ${dog.breed}" class="dog-card-img" loading="lazy">
          <span class="card-badge ${dog.badgeType}">${dog.badge}</span>
          <button class="card-fav-btn ${isFav ? 'active' : ''}" 
                  onclick="toggleFavorite(${dog.id})" 
                  title="${isFav ? 'Remove from' : 'Add to'} favorites" 
                  aria-label="Favorite ${dog.name}">
            <i data-lucide="heart" class="icon-sm" ${isFav ? 'style="fill: #EF4444; color: #EF4444;"' : ''}></i>
          </button>
        </div>

        <div class="dog-card-body">
          <div class="card-title-row">
            <h3 class="card-dog-name">${dog.name}</h3>
            <span class="gender-pill ${genderClass}">
              <i data-lucide="${genderIcon}" class="icon-xs"></i> ${dog.gender}
            </span>
          </div>

          <div class="card-dog-breed">${dog.breed}</div>

          <div class="card-meta-pills">
            <span class="meta-pill"><i data-lucide="calendar" class="icon-xs"></i> ${dog.ageLabel}</span>
            <span>•</span>
            <span class="meta-pill"><i data-lucide="scale" class="icon-xs"></i> ${dog.weight}</span>
            <span>•</span>
            <span class="meta-pill"><i data-lucide="maximize-2" class="icon-xs"></i> ${dog.size}</span>
          </div>

          <div class="energy-meter-container">
            <div class="energy-label-row">
              <span>Energy: ${dog.energyLabel}</span>
              <span>${dog.energyScore}%</span>
            </div>
            <div class="energy-bar-bg">
              <div class="energy-bar-fill" style="width: ${dog.energyScore}%;"></div>
            </div>
          </div>

          <div class="card-tags">
            ${dog.tags.slice(0, 3).map(tag => `<span class="tag-badge">${tag}</span>`).join("")}
          </div>

          <div class="card-actions">
            <button class="btn btn-primary w-full" onclick="openDogModal(${dog.id})">
              <span>Meet ${dog.name}</span>
              <i data-lucide="arrow-right" class="icon-xs"></i>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  initLucide();
}

// Favorites Management
window.toggleFavorite = function(dogId) {
  const dog = DOGS_DATA.find(d => d.id === dogId);
  if (!dog) return;

  const index = favoriteDogIds.indexOf(dogId);
  if (index > -1) {
    favoriteDogIds.splice(index, 1);
    showToast(`Removed ${dog.name} from saved favorites`, "info");
  } else {
    favoriteDogIds.push(dogId);
    showToast(`Added ${dog.name} to saved favorites! ❤️`, "success");
  }

  localStorage.setItem("barkhaven_favs", JSON.stringify(favoriteDogIds));
  updateFavoritesUI();
  renderDogs();
};

function updateFavoritesUI() {
  const count = favoriteDogIds.length;
  if (favBadgeCount) {
    favBadgeCount.textContent = count;
    favBadgeCount.classList.add("pop");
    setTimeout(() => favBadgeCount.classList.remove("pop"), 300);
  }
  if (drawerCount) {
    drawerCount.textContent = count;
  }
  renderDrawerFavorites();
}

function openFavoritesDrawer() {
  favDrawer.classList.add("active");
  favDrawerOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
  renderDrawerFavorites();
}

window.closeFavoritesDrawer = function() {
  favDrawer.classList.remove("active");
  favDrawerOverlay.classList.remove("active");
  document.body.style.overflow = "";
};

function renderDrawerFavorites() {
  if (!drawerFavList) return;

  if (favoriteDogIds.length === 0) {
    drawerFavList.innerHTML = `
      <div class="empty-state" style="padding: 2.5rem 0;">
        <div class="empty-icon"><i data-lucide="heart-off"></i></div>
        <h4>No saved dogs yet</h4>
        <p style="font-size: 0.85rem;">Click the heart icon on any dog's card to keep track of pups you love.</p>
      </div>
    `;
    initLucide();
    return;
  }

  const favDogs = DOGS_DATA.filter(d => favoriteDogIds.includes(d.id));

  drawerFavList.innerHTML = favDogs.map(dog => `
    <div class="fav-item">
      <img src="${dog.image}" alt="${dog.name}" class="fav-thumb">
      <div class="fav-details">
        <h4>${dog.name}</h4>
        <span>${dog.breed} • ${dog.ageLabel}</span>
        <div class="fav-actions">
          <button class="fav-meet-btn" onclick="closeFavoritesDrawer(); openDogModal(${dog.id});">
            Meet Me
          </button>
          <button class="fav-remove-btn" onclick="toggleFavorite(${dog.id})" title="Remove">
            <i data-lucide="trash-2" class="icon-xs"></i>
          </button>
        </div>
      </div>
    </div>
  `).join("");

  initLucide();
}

// Dog Modal & Adoption Application
window.openDogModal = function(dogId) {
  const dog = DOGS_DATA.find(d => d.id === dogId);
  if (!dog) return;

  const isFav = favoriteDogIds.includes(dog.id);

  modalContentContainer.innerHTML = `
    <!-- Left Column: Dog Profile -->
    <div class="modal-col-left">
      <div class="modal-img-wrap">
        <img src="${dog.image}" alt="${dog.name}">
      </div>

      <div class="modal-badges-row">
        <span class="card-badge ${dog.badgeType}">${dog.badge}</span>
        <span class="tag-badge"><i data-lucide="activity" class="icon-xs"></i> Energy: ${dog.energyLabel}</span>
      </div>

      <h2 class="modal-dog-title">${dog.name}</h2>
      <div class="modal-dog-meta">${dog.breed} • ${dog.ageLabel} • ${dog.gender}</div>

      <p class="modal-bio-text">${dog.description}</p>

      <div class="modal-quick-stats">
        <div class="quick-stat-box">
          <small>Medical Status</small>
          <span>100% Cleared</span>
        </div>
        <div class="quick-stat-box">
          <small>Ideal Environment</small>
          <span>${dog.compatibility[0] || "Flexible"}</span>
        </div>
        <div class="quick-stat-box">
          <small>Weight</small>
          <span>${dog.weight}</span>
        </div>
        <div class="quick-stat-box">
          <small>Adoption Fee</small>
          <span>$150 (Includes Kit)</span>
        </div>
      </div>
    </div>

    <!-- Right Column: Adoption Application -->
    <div class="modal-col-right" id="modal-form-col">
      <div class="adopt-form-header">
        <span class="section-tag"><i data-lucide="file-check-2" class="icon-xs"></i> Fast-Track Adoption</span>
        <h3>Express Interest in ${dog.name}</h3>
        <p>Complete this quick questionnaire to schedule your private meet-and-greet.</p>
      </div>

      <form class="adoption-form" onsubmit="handleAdoptionSubmit(event, '${dog.name}')">
        <div class="form-row-2">
          <div class="form-group">
            <label for="adopt-first-name">First Name *</label>
            <input type="text" id="adopt-first-name" required placeholder="Jane">
          </div>
          <div class="form-group">
            <label for="adopt-last-name">Last Name *</label>
            <input type="text" id="adopt-last-name" required placeholder="Doe">
          </div>
        </div>

        <div class="form-row-2">
          <div class="form-group">
            <label for="adopt-email">Email Address *</label>
            <input type="email" id="adopt-email" required placeholder="jane@example.com">
          </div>
          <div class="form-group">
            <label for="adopt-phone">Phone Number *</label>
            <input type="tel" id="adopt-phone" required placeholder="(555) 000-1234">
          </div>
        </div>

        <div class="form-group">
          <label for="adopt-home-type">Your Living Space *</label>
          <select id="adopt-home-type" required>
            <option value="">Select living space type...</option>
            <option value="apartment">Apartment / Flat (No Yard)</option>
            <option value="condo">Condo / Townhouse (Patio)</option>
            <option value="house_yard">Single Family Home with Fenced Yard</option>
            <option value="rural">Rural Property / Farm</option>
          </select>
        </div>

        <div class="form-group">
          <label for="adopt-experience">Prior Dog Ownership Experience *</label>
          <select id="adopt-experience" required>
            <option value="first_timer">First-time dog guardian</option>
            <option value="experienced">Have cared for dogs before</option>
            <option value="current_owner">Currently have pets at home</option>
          </select>
        </div>

        <div class="form-group">
          <label for="adopt-notes">Why would ${dog.name} be a great fit for you? (Optional)</label>
          <textarea id="adopt-notes" rows="2" placeholder="Tell us about your daily routine, favorite parks, or family members..."></textarea>
        </div>

        <button type="submit" class="btn btn-primary w-full mt-4">
          <i data-lucide="send" class="icon-sm"></i>
          <span>Submit Adoption Application</span>
        </button>
      </form>
    </div>
  `;

  dogModalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
  initLucide();
};

window.closeDogModal = function() {
  dogModalOverlay.classList.remove("active");
  document.body.style.overflow = "";
};

window.handleModalOverlayClick = function(e) {
  if (e.target === dogModalOverlay) {
    closeDogModal();
  }
};

window.handleAdoptionSubmit = function(event, dogName) {
  event.preventDefault();

  // Trigger celebration confetti
  if (window.confetti) {
    window.confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  const reservationCode = "BARK-" + Math.floor(1000 + Math.random() * 9000) + "-PAW";
  const modalFormCol = document.getElementById("modal-form-col");

  modalFormCol.innerHTML = `
    <div class="modal-success-state">
      <div class="success-icon-burst">
        <i data-lucide="check-check" class="icon-lg"></i>
      </div>
      <h3>Application Received!</h3>
      <p>Thank you! Your adoption application for <strong>${dogName}</strong> has been submitted to our canine placement coordinators.</p>
      
      <div class="adoption-code-badge">
        Reference Code: ${reservationCode}
      </div>

      <p style="font-size: 0.85rem; color: var(--text-secondary);">
        Our adoption team will review your application and contact you within 24 hours to schedule an in-person or virtual meet & greet!
      </p>

      <button class="btn btn-primary mt-4" onclick="closeDogModal()">
        <span>Back to Browse Dogs</span>
      </button>
    </div>
  `;

  initLucide();
  showToast(`Application submitted for ${dogName}! Check your email shortly.`, "success");
};

// Breed Matchmaker Quiz Logic
window.selectQuizAnswer = function(step, val) {
  if (step === 1) {
    quizAnswers.environment = val;
    document.getElementById("quiz-step-1").style.display = "none";
    document.getElementById("quiz-step-2").style.display = "block";
    document.getElementById("quiz-progress").style.width = "66%";
    document.getElementById("quiz-step-indicator").textContent = "Question 2 of 3";
  } else if (step === 2) {
    quizAnswers.activity = val;
    document.getElementById("quiz-step-2").style.display = "none";
    document.getElementById("quiz-step-3").style.display = "block";
    document.getElementById("quiz-progress").style.width = "100%";
    document.getElementById("quiz-step-indicator").textContent = "Question 3 of 3";
  } else if (step === 3) {
    quizAnswers.experience = val;
    document.getElementById("quiz-step-3").style.display = "none";
    document.getElementById("quiz-step-indicator").style.display = "none";
    showQuizResults();
  }
  initLucide();
};

function showQuizResults() {
  const resultCard = document.getElementById("quiz-result");
  const matchesGrid = document.getElementById("quiz-matches-grid");
  resultCard.style.display = "block";

  // Match scoring logic
  let matches = DOGS_DATA.map(dog => {
    let score = 70;
    if (quizAnswers.environment === "apartment" && dog.categories.includes("apartment")) score += 20;
    if (quizAnswers.environment === "house_yard" && (dog.categories.includes("family") || dog.categories.includes("active"))) score += 20;
    if (quizAnswers.environment === "farm_country" && dog.categories.includes("active")) score += 25;

    if (quizAnswers.activity === "chill" && dog.energyScore <= 50) score += 15;
    if (quizAnswers.activity === "moderate" && dog.energyScore >= 50 && dog.energyScore <= 80) score += 15;
    if (quizAnswers.activity === "athlete" && dog.energyScore > 75) score += 20;

    score = Math.min(99, score + Math.floor(Math.random() * 5));
    return { ...dog, matchScore: score };
  });

  matches.sort((a, b) => b.matchScore - a.matchScore);
  const topMatches = matches.slice(0, 2);

  matchesGrid.innerHTML = topMatches.map(dog => `
    <div class="dog-card">
      <div class="dog-card-img-wrap">
        <img src="${dog.image}" alt="${dog.name}" class="dog-card-img">
        <span class="card-badge available" style="background: rgba(16, 185, 129, 0.95); font-weight:800;">
          ${dog.matchScore}% Match
        </span>
      </div>
      <div class="dog-card-body">
        <div class="card-title-row">
          <h3 class="card-dog-name">${dog.name}</h3>
          <span class="gender-pill ${dog.gender.toLowerCase()}">${dog.gender}</span>
        </div>
        <div class="card-dog-breed">${dog.breed} • ${dog.ageLabel}</div>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">
          ${dog.description.substring(0, 95)}...
        </p>
        <button class="btn btn-primary w-full" onclick="openDogModal(${dog.id})">
          Meet ${dog.name}
        </button>
      </div>
    </div>
  `).join("");

  initLucide();
}

window.restartQuiz = function() {
  quizAnswers = { environment: null, activity: null, experience: null };
  document.getElementById("quiz-result").style.display = "none";
  document.getElementById("quiz-step-1").style.display = "block";
  document.getElementById("quiz-step-2").style.display = "none";
  document.getElementById("quiz-step-3").style.display = "none";
  document.getElementById("quiz-progress").style.width = "33%";
  const indicator = document.getElementById("quiz-step-indicator");
  indicator.style.display = "block";
  indicator.textContent = "Question 1 of 3";
  initLucide();
};

// Care Tabs
window.switchCareTab = function(tabId) {
  const tabs = ["nutrition", "training", "health", "checklist"];
  const navBtns = document.querySelectorAll(".care-nav-btn");

  tabs.forEach((id, index) => {
    const el = document.getElementById(`care-tab-${id}`);
    if (el) {
      el.style.display = (id === tabId) ? "block" : "none";
    }
  });

  navBtns.forEach(btn => {
    btn.classList.remove("active");
    if (btn.getAttribute("onclick").includes(tabId)) {
      btn.classList.add("active");
    }
  });
};

// Newsletter Handler
window.handleNewsletter = function(e) {
  e.preventDefault();
  const input = document.getElementById("newsletter-email");
  if (input && input.value) {
    showToast("🎉 You're subscribed to BarkHaven weekly pet updates!", "success");
    input.value = "";
  }
};

// Theme Toggling
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("barkhaven_theme", newTheme);
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

// Fluid Typewriter Effect for Hero Headline
function initTypewriter() {
  const target = document.getElementById("typewriter-text");
  if (!target) return;

  const phrases = [
    "Furry Best Friend.",
    "Loyal Adventure Partner.",
    "Cuddle Champion.",
    "Four-Legged Soulmate."
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 80;

  function typeStep() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      target.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 40; // Quick smooth backspace
    } else {
      target.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      // Subtle human timing variation
      typingSpeed = 70 + Math.random() * 30;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      // Pause at complete phrase
      typingSpeed = 2400;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Move to next phrase
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 450;
    }

    setTimeout(typeStep, typingSpeed);
  }

  // Smooth entry delay
  setTimeout(typeStep, 400);
}

