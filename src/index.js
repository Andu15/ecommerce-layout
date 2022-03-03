const nav = document.querySelector("#btn-toggle");
const items = document.querySelectorAll(".item");
const cartBtn = document.querySelector("#cart-btn");

nav.addEventListener("click", function (){
  for(var i = 0; i < items.length; i++)
    items[i].classList.toggle("active")
});