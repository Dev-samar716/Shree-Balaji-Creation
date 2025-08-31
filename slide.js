// --- Image Slider Setup ---
const sliderImages = [
  'pexels-fauxels-3182750.jpg',
  'pexels-yankrukov-7693707.jpg',
  'pexels-ivan-samkov-8117405.jpg'
];
const slidesContainer = document.querySelector('.slides');

if (slidesContainer) {
  sliderImages.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = "Slide Image";
    slidesContainer.appendChild(img);
  });

  let currentSlideIndex = 0;
  setInterval(() => {
    currentSlideIndex = (currentSlideIndex + 1) % sliderImages.length;
    slidesContainer.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
  }, 5000);
}

// --- Toggle Function for Showing/Hiding Sections ---
function toggleSectionById(id) {
  const el = document.getElementById(id);
  if (!el) return;

  el.classList.toggle('Open');

  if (el.classList.contains('Open')) {
    setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  }
}

// --- Attach Event Listeners Safely ---
function safeAddListener(id, event, handler) {
  const el = document.getElementById(id);
  if (el) el.addEventListener(event, handler);
}

// --- Buttons toggling specific sections ---
safeAddListener("btn", "click", () => toggleSectionById("flex-container"));
safeAddListener("button-1", "click", () => toggleSectionById("temp-container"));
safeAddListener("button-2", "click", () => toggleSectionById("dev-temp"));
safeAddListener("button-3", "click", () => toggleSectionById("Printing-services"));
safeAddListener("button-4", "click", () => toggleSectionById("Branding"));
safeAddListener("button-5", "click", () => toggleSectionById("photography-services"));

// --- Cycle through image groups with fade-in/out ---

function cycleImages(selector, activeClass, interval = 5000) {
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  let currentIndex = 0;
  elements.forEach((el, i) => el.classList.remove(activeClass)); // reset all first
  elements[currentIndex].classList.add(activeClass);

  setInterval(() => {
    elements[currentIndex].classList.remove(activeClass);
    currentIndex = (currentIndex + 1) % elements.length;
    elements[currentIndex].classList.add(activeClass);
  }, interval);
}

// Use cycleImages for each container group:
cycleImages('.gr-image', 'active');
cycleImages('.d-image', 'show');
cycleImages('.b-image', 'show');
cycleImages('.p-image', 'show');
cycleImages('.ph-image', 'show');
