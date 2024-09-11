//Function to update the total price
function updateTotalPrice() {
  let totalPrice = 0;
  document.querySelectorAll(".card").forEach((card) => {
    const unitprice = parseFloat(
      card.querySelector(".unit-price").textContent.replace("$", "")
    );
    const quantity = parseInt(card.querySelector(".quantity").textContent);
    totalPrice += unitprice * quantity;
  });
  document.querySelector(".total").textContent = `${totalPrice.toFixed(2)} $`;
}
//Increment quantity
document.querySelectorAll(".fa-plus-circle").forEach((button) => {
  button.addEventListener("click", function () {
    const quantityElement = this.nextElementSibling;
    let quantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = quantity + 1;
    updateTotalPrice();
  });
});

//Decrement quantity
document.querySelectorAll(".fa-minus-circle").forEach((button) => {
  button.addEventListener("click", function () {
    const quantityElement = this.previousElementSibling;
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 0) {
      quantityElement.textContent = quantity - 1;
    }
    updateTotalPrice();
  });
});

//Reset and update total price when trash icon is clicked
document.querySelectorAll(".fa-trash-alt").forEach((button) => {
  button.addEventListener("click", function () {
    const itemCard = this.closest(".card-body");
    const quantityElement = itemCard.querySelector(".quantity");
    quantityElement.textContent = 0;
    updateTotalPrice();
  });
});

// Function to toggle like/unlike
document.querySelectorAll(".fa-heart").forEach((button) => {
  button.addEventListener("click", function () {
    if (this.style.color === "red") {
      this.style.color = "black";
    } else {
      this.style.color = "red";
    }
  });
});
