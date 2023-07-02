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









