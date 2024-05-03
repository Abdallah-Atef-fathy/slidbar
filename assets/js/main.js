let bar = document.querySelector(".fa-bars");
let exite = document.querySelector(".fa-xmark");
let menu = document.querySelector(".menue");

bar.addEventListener("click", function () {
  menu.classList.toggle("show");
});

exite.addEventListener("click", function () {
  menu.classList.toggle("show");
});
