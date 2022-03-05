const nav = document.querySelector("#btn-toggle");
const items = document.querySelectorAll(".item");
const cartBtn = document.querySelector("#cart-btn");
const minusBtn = document.querySelector("#minus-btn");
const plusBtn = document.querySelector("#plus-btn");
const counterText = document.querySelector("#counter");
const cartIcon = document.querySelector("#cart-icon");
const cartSubmit = document.querySelector("#shopping-submit");
const purchaseSummary = document.querySelector("#purchase-summary");
const deleteBtn = document.querySelector("#delete-btn");
const modal = document.querySelector("#modal");


let counter = 0;
let isOrder = false;
let isVisible = false;

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

function handleOrder () {
  isOrder = !isOrder;
  addOrder ();
  modal.classList.remove("hidden-modal");
}

function addOrder () {
  if (isOrder === false) {
    purchaseSummary.innerHTML = `<p class="cart-empty">Your cart is empty</p>`
  } else {
    purchaseSummary.innerHTML = `
    <section class="summary">
      <div class="summary-content">
        <img  class="img-product-info" src="./assets/images/image-product-1-thumbnail.jpg" alt="image product"/>
        <div class="product-info">
          <p>Fall Limited Edition Sneakers</p>
          <div class="summary-price-info">
            <p>$125.00 x 3</p>
            <p>$375.00</p>
          </div>
        </div>
        <button class="btns delete-btn" id="delete-btn"><img src="./assets/icons/icon-delete.svg" alt="delete-icon"/></button>
      </div>
      <button class="btns ready-order">Checkout</button>
    </section>`
  }
}

function handlerModal () {
  isVisible = !isVisible;
  activeModal ();
}

function activeModal () {
  if (isVisible === true) {
    modal.classList.remove("hidden-modal");
    return;
  } else {
    modal.classList.add("hidden-modal");
    return;
  }
}

// activa el navbar
nav.addEventListener("click", function (){
  for(var i = 0; i < items.length; i++)
    items[i].classList.toggle("active");
});

//activar el contador
minusBtn.addEventListener("click", decreaseCounter);
plusBtn.addEventListener("click", increaseCounter);

// shopping cart
cartSubmit.addEventListener("click", handleOrder);

//activar el carrito de compras
cartIcon.addEventListener("click", handlerModal);