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
document.addEventListener("DOMContentLoaded", function () {
  sidebar.classList.add("expand");
});

function enviar() {
  alert("Datos Enviados al Foro")
  
}

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
});
