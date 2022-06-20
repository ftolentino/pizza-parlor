// Business Logic
function Pizza() {
  this.size = 0;
  this.toppings = {};
  this.sizeCost = 0;
}

let pizza = new Pizza();

Pizza.prototype.selectSize = function () {
  let pizzaSize = $("input[name='size']:checked").val();
  this.size = pizzaSize;
};

Pizza.prototype.selectToppings = function (element) {
  element = $('input[type="checkbox"]:checked').map(function() {
    return $(this).val();
  })
  this.toppings = element;
};

Pizza.prototype.sizePrice = function () {
  if (this.size === 'small') {
    this.sizeCost = 10;
  } else if (this.size === 'medium') {
    this.sizeCost = 14;
  } else if (this.size === 'large') {
    this.sizeCost = 18;
  }
}



// UI Logic
function displayPizzaOrder(pizzaOrder) {
  // Object.keys(pizzaOrder).reduce((accum, currKey) => accum + 
  // `<div>
  //   <div>${currKey}</div>
  //   <div>${pizzaOrder[currKey].toppings}</div>
  // </div>`,'');
  return pizzaOrder;
}
// const pizzaOrder = Object.keys(pizza).reduce((accum, currKey) => accum + 
//   `<div
//   `,'');

$(document).ready(function () {
  $("#pizza-form").submit(function (event) {
    event.preventDefault();
    pizza.selectSize();
    pizza.selectToppings();
    pizza.sizePrice();
  
    console.log(pizza.sizeCost);
    console.log(displayPizzaOrder(pizza));

    // $("#pizza-order").html(pizza);
  });
});