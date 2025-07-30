const menuToggle = document.getElementById("menu-toggle");
const drawer = document.getElementById("drawer");
const closeDrawer = document.getElementById("close-drawer");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
  drawer.classList.remove("-translate-x-full");
  overlay.classList.remove("hidden");
});

closeDrawer.addEventListener("click", () => {
  drawer.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  drawer.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
});

// drawers menu
function navigateToScheme() {
  Toaster.postMessage("navigateScheme");
}

function navigateToBankDetails() {
  Toaster.postMessage("navigateBankDetails");
}

function navigateToKyc() {
  Toaster.postMessage("navigateKyc");
}

function navigateToRate() {
  Toaster.postMessage("navigateRate");
}

function navigateSchemeRecords() {
  Toaster.postMessage("navigateSchemeRecords");
}

function navigateToCustomerCard() {
  Toaster.postMessage("navigateCustomerCard");
}

function navigateTransactionHistory() {
  Toaster.postMessage("navigateTransactionHistory");
}

function navigateToMyOrder() {
  Toaster.postMessage("navigateToMyOrder");
}

function navigateToUserProfile() {
  Toaster.postMessage("navigateToUserProfile");
}

function navigateToDigitalGold() {
  Toaster.postMessage("navigateToDigitalGold");
}

function navigateToPanchang() {
  Toaster.postMessage("navigateToPanchang");
}

function navigateToFeedback() {
  Toaster.postMessage("navigateToFeedback");
}

function navigateToSetting() {
  Toaster.postMessage("navigateToSetting");
}

function setUserName(username) {
  // Find the element by ID and set the text content
  document.getElementById("user-name-display").innerText =
    "Welcome, " + username;
}
function navigateToHomePage() {
  Toaster.postMessage("navigateToHomePage");
}

// brandingSwiper

const headerSwiper = new Swiper("#BrandingSwiper", {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 1000,
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: ["-100%", 0, -500],
      rotate: [0, 0, -15],
      scale: 0.85,
      opacity: 0.7,
    },
    next: {
      translate: ["100%", 0, -500],
      rotate: [0, 0, 15],
      scale: 0.85,
      opacity: 0.7,
    },
  },
});

// Initialize AOS
AOS.init({
  duration: 800,
  once: false,
});

const tabs = [
  {
    label: "Scheme",
    icon: "https://cdn-icons-png.flaticon.com/128/10150/10150740.png",
    action: () => navigateToScheme(),
  },
  {
    label: "Bank",
    icon: "https://cdn-icons-png.flaticon.com/128/522/522554.png",
    action: () => navigateToBankDetails(),
  },
  {
    label: "KYC",
    icon: "https://cdn-icons-png.flaticon.com/128/18282/18282110.png",
    action: () => navigateToKyc(),
  },
  {
    label: "Rate",
    icon: "https://cdn-icons-png.flaticon.com/128/592/592015.png",
    action: () => navigateToRate(),
  },
  {
    label: "Records",
    icon: "https://cdn-icons-png.flaticon.com/128/2910/2910768.png",
    action: () => navigateSchemeRecords(),
  },
  {
    label: "Card",
    icon: "https://cdn-icons-png.flaticon.com/128/3037/3037255.png",
    action: () => navigateToCustomerCard(),
  },
  {
    label: "History",
    icon: "https://cdn-icons-png.flaticon.com/128/3503/3503786.png",
    action: () => navigateTransactionHistory(),
  },
  {
    label: "Order",
    icon: "https://cdn-icons-png.flaticon.com/128/10597/10597732.png",
    action: () => navigateToMyOrder(),
  },
  {
    label: "Profile",
    icon: "https://cdn-icons-png.flaticon.com/128/1946/1946429.png",
    action: () => navigateToUserProfile(),
  },
  {
    label: "Gold",
    icon: "https://cdn-icons-png.flaticon.com/128/1473/1473430.png",
    action: () => navigateToDigitalGold(),
  },
  {
    label: "Panchang",
    icon: "https://cdn-icons-png.flaticon.com/128/3013/3013143.png",
    action: () => navigateToPanchang(),
  },
  {
    label: "Settings",
    icon: "https://cdn-icons-png.flaticon.com/128/2099/2099058.png",
    action: () => navigateToSetting(),
  },
];

const tabsContainer = document.getElementById("tabs");

tabs.forEach((tab, index) => {
  const div = document.createElement("div");
  div.className = `
        relative w-[110px] h-[110px] flex flex-col items-center justify-center cursor-pointer 
        rounded-full text-center transition-all duration-300
        ${index > 5 ? "hidden sm:flex extra-tab" : ""}
      `;
  div.setAttribute("data-aos", "zoom-in");
  div.onclick = tab.action;

  div.innerHTML = `
        <svg class="w-full" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pattern${index}" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="10" fill="#f9a825"/>
            </pattern>
            <radialGradient id="grad${index}" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#c62828"/>
              <stop offset="100%" stop-color="#8e0000"/>
            </radialGradient>
          </defs>
          <circle cx="150" cy="150" r="145" fill="url(#pattern${index})" />
          <circle cx="150" cy="150" r="125" fill="url(#grad${index})" />
          <circle cx="150" cy="150" r="110" fill="none" stroke="white" stroke-width="3" />
        </svg>
        <img src="${tab.icon}" alt="${tab.label}" class="absolute top-10 md:top-11 left-1/2 w-10 h-10 -translate-x-1/2 -translate-y-1/2 invert" />
        <p class="text-sm mt-1 ">${tab.label}</p>
      `;
  tabsContainer.appendChild(div);
});

// Toggle for mobile
const toggleBtn = document.getElementById("toggleBtn");
const toggleText = document.getElementById("toggleText");
const toggleIcon = document.getElementById("toggleIcon");
let expanded = false;

toggleBtn.addEventListener("click", () => {
  expanded = !expanded;
  document.querySelectorAll(".extra-tab").forEach((el) => {
    el.classList.toggle("hidden", !expanded);
  });
  toggleText.textContent = expanded ? "Show Less" : "Show More";
  toggleIcon.classList.toggle("rotate-180", expanded);
});




  // back to top
const btn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    btn.classList.remove("hidden");
  } else {
    btn.classList.add("hidden");
  }
});

// Scroll to top smoothly
btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


