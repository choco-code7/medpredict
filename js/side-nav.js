document.addEventListener("DOMContentLoaded", function () {
  const headerEl = document.querySelector(".header");
  const btnNavEl = document.querySelector(".btn-mobile-nav");
  const mainNavLinks = document.querySelectorAll(".main-nav-link");

  function toggleNavOpen() {
    headerEl.classList.toggle("nav-open");
  }

  btnNavEl.addEventListener("click", toggleNavOpen);

  mainNavLinks.forEach((link) => {
    link.addEventListener("click", toggleNavOpen);
  });
});
