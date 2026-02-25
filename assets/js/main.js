// PRELOADER
window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
});

// AUTO YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// SCROLL PROGRESS
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / height) * 100;
  document.getElementById("progress-bar").style.width = progress + "%";
});

// SLIDER (3 slides fix)
let slideIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;

setInterval(() => {
  slideIndex = (slideIndex + 1) % totalSlides;
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}, 4000);

// MODAL
function openModal() {
  document.getElementById("consultModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("consultModal").style.display = "none";
}

let currentStep = 0;
function nextStep() {
  const steps = document.querySelectorAll(".step");
  if (currentStep < steps.length - 1) {
    steps[currentStep].classList.remove("active");
    currentStep++;
    steps[currentStep].classList.add("active");
  }
}

// WHATSAPP SUBMIT (Proper encoding fix)
document.getElementById("consultForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const message = `
New Consultation Request:

Full Name: ${name.value}
Email: ${email.value}
Phone: ${phone.value}
Company: ${company.value}
Project Type: ${project.value}
Project Details: ${details.value}
`;

  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/260772786809?text=${encodedMessage}`, "_blank");
});
