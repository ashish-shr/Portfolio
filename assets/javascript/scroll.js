// Scroll to top function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Function to handle the intersection of elements
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
}

// Create an Intersection Observer instance
const observer = new IntersectionObserver(handleIntersection, {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
});

// Get all elements with the class 'card-animate'
const cardAnimateElements = document.querySelectorAll(".card-animate");

// Observe each 'card-animate' element
cardAnimateElements.forEach((element) => {
  observer.observe(element);
});