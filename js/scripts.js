// Business Logic
// Pizza Constructor Blueprint
function Pizza() {
  this.size = size;
  this.toppings = {};
  this.totalPrice = 0;
}

Pizza.prototype.selectToppings = function () {

};



// UI Logic
let pizzaOrder = new Pizza();

$(document).ready(function () {
  $("#pizza-form").submit(function (event) {
    event.preventDefault();
    const pizzaSizeInput = $("input:radio[name=size]:checked").val(); 
    const toppingsInput = $("input[type='checkbox']").val();
    console.log(toppingsInput);

    $("#pizza-order").text(pizzaSizeInput);
  });
});