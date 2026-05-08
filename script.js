const yearEl = document.getElementById("year");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "Thank you. Your message has been received by IDC Bank.";
    contactForm.reset();
  });
}
