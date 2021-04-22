// const btnMenu = document.querySelector("#btnMenu")
const menu = document.querySelector("#menu");

// btnMenu.addEventListener("click", function(){
//     menu.classList.toggle("mostrar");
// })

const btnMenu = document.querySelector(".menu-container");

btnMenu.addEventListener("click", function() {
  btnMenu.classList.toggle("is-menu-open");
  menu.classList.toggle("mostrar");
})