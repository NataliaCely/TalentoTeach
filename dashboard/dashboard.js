const sidebar = document.querySelector("#sidebar");
const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

window.addEventListener("resize", function () {
  if (window.innerWidth < 760) {
    sidebar.classList.remove("expand");
  }
});