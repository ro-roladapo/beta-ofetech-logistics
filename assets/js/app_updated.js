function toggleMobileNav() {
  const el = document.getElementById("nav-mobile");
  if (!el) return;
  const isOpen = el.style.display === "flex";
  el.style.display = isOpen ? "none" : "flex";
}

// Dynamic year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Simple fake quote calculator
const quoteForm = document.getElementById("quote-form");
if (quoteForm) {
  quoteForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const pickup = quoteForm.pickup.value.trim();
    const dropoff = quoteForm.dropoff.value.trim();
    const pkg = quoteForm.package.value;
    const resultEl = document.getElementById("quote-result");

    if (!pickup || !dropoff) {
      resultEl.textContent = "Please enter pickup and drop-off ZIP codes.";
      return;
    }

    let base = 65;
    if (pkg === "medium") base = 85;
    if (pkg === "large") base = 110;
    if (pkg === "furniture") base = 140;
    if (pkg === "pallet") base = 180;

    resultEl.textContent =
      "Estimated starting rate: $" +
      base +
      " – final pricing depends on distance, time, and load details.";
  });
}

// Fake driver application handler
const driverForm = document.getElementById("driver-form");
if (driverForm) {
  driverForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const resultEl = document.getElementById("driver-result");
    resultEl.textContent =
      "Thank you! Your driver application has been received. A team member will follow up by email.";
  });
}

// Fake login
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const resultEl = document.getElementById("login-result");
    resultEl.textContent =
      "Preview only: in a real system you’d be redirected after authentication. For now, open dashboard.html.";
  });
}

// Dashboard logout preview
function logoutPreview() {
  alert("Preview only: when authentication is added, this will log you out.");
}
