const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");
const navLinks = document.querySelector(".nav-links");
const imgContainer = document.querySelectorAll(".img-container");

hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.add("active");
  closeIcon.classList.add("active");
  navLinks.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  hamburgerIcon.classList.remove("active");
  closeIcon.classList.remove("active");
  navLinks.classList.remove("active");
});

imgContainer.forEach((pic, id) => {
  const filter = document.querySelectorAll(".filter");
  const descriptionImg = document.querySelectorAll(".description-img");
  pic.addEventListener("mouseenter", () => {
    filter[id].classList.add("active");
    descriptionImg[id].classList.add("active");
  });
  pic.addEventListener("mouseleave", () => {
    filter[id].classList.remove("active");
    descriptionImg[id].classList.remove("active");
  });
});
