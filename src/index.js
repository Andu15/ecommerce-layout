const nav = document.querySelector("#btn-toggle");
const items = document.querySelectorAll(".item");
const cartBtn = document.querySelector("#cart-btn");
const minusBtn = document.querySelector("#minus-btn");
const plusBtn = document.querySelector("#plus-btn");
const counterText = document.querySelector("#counter");

let counter = 0;

function decreaseCounter () {
  if(counter > 0) {
    counter--
  }
  updateCounter ();
}

function increaseCounter () {
  counter++;
  updateCounter ();
}

function updateCounter () {
  counterText.textContent = counter;
}

// activa el navbar
nav.addEventListener("click", function (){
  for(var i = 0; i < items.length; i++)
    items[i].classList.toggle("active")
});

//activar el contador
minusBtn.addEventListener("click", decreaseCounter);
plusBtn.addEventListener("click", increaseCounter);

