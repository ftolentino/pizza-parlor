// Business Logic
// Pizza Constructor Blueprint
function Pizza(size) {
  this.size = size;
  this.toppings = {};
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
    // console.log(Object.values(pizza));
    console.log(displayPizzaOrder(pizza));

    // $("#pizza-order").html(pizza);
  });
});