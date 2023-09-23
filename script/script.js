const hamburger = document.getElementsByClassName("hamburger")[0];

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("show-menu");
  document.getElementsByClassName("navbar")[0].classList.toggle("show-menu");
});
