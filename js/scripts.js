// Business Logic
// Pizza Constructor Blueprint
function Pizza() {
  // this.size = size;
  this.toppings = {};
  this.totalPrice = 0;
}

Pizza.prototype.selectToppings = function () {
  let toppings = $('input[type="checkbox"]:checked').map(function() {
    return $(this).val();
  })
  console.log(toppings);
};



// UI Logic
let pizzaOrder = new Pizza();

$(document).ready(function () {
  $("#pizza-form").submit(function (event) {
    event.preventDefault();
    let toppingsSelection = pizzaOrder.selectToppings();
    console.log(toppingsSelection);

    $("#pizza-order").text(toppingsSelection);
  });
});