// Business Logic
function Pizza() {
  this.size = 0;
  this.toppings = {};
  this.sizeCost = 0;
  this.toppingCost = 0;
  this.totalCost = 0;
}


Pizza.prototype.selectToppings = function (element) {
  element = $('input[type="checkbox"]:checked').map(function () {
    return $(this).val();
  });
  this.toppings = element;
};

Pizza.prototype.sizePrice = function () {
  if (this.size === "small") {
    this.sizeCost = 10;
  } else if (this.size === "medium") {
    this.sizeCost = 14;
  } else if (this.size === "large") {
    this.sizeCost = 18;
  }
};

Pizza.prototype.toppingPrice = function () {
  let total = this.toppings.length;
  this.toppingCost = total;
};

Pizza.prototype.sumTotal = function () {
  this.totalCost = this.sizeCost + this.toppingCost;
};

// UI Logic


$(document).ready(function () {
  $("#pizza-form").submit(function (event) {
    event.preventDefault();
    let pizza = new Pizza();

    const sizeInput = $("input[name='size']:checked").val();
    pizza.size = sizeInput;



    pizza.selectToppings();
    pizza.sizePrice();
    pizza.toppingPrice();
    pizza.sumTotal();

    $("#pizza-order").html(`$${pizza.totalCost}`);
  });
});
