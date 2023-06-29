// Smooth scroll animation for navigation links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

// Show/hide "Go to Top" button based on scroll position
window.addEventListener('scroll', () => {
  const goToTopButton = document.getElementById('goToTop');
  if (window.scrollY > 200) {
    goToTopButton.style.display = 'block';
  } else {
    goToTopButton.style.display = 'none';
  }
});

// Scroll to top function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

//ambient lighting
document.addEventListener("DOMContentLoaded", function () {
  const ambientLight = document.createElement("div");
  ambientLight.classList.add("ambient-light");

  const light = document.createElement("div");
  light.classList.add("light");
  ambientLight.appendChild(light);

  document.body.appendChild(ambientLight);

  document.body.classList.add("scrollable");
});

// Function to scroll to a section with a scroll offset
function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  var offset = section.offsetTop - 20; // Adjust the offset value as needed

  window.scrollTo({
    top: offset,
    behavior: "smooth",
  });
}

// Add an event listener to the navigation links
var navigationLinks = document.querySelectorAll("nav ul li a");

navigationLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    var sectionId = link.getAttribute("href").substring(1);
    scrollToSection(sectionId);
  });
});




