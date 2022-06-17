// Business Logic
// Pizza Constructor Blueprint
function Pizza() {
  this.size = size;
  this.toppings = {};
}



// UI Logic


$(document).ready(function () {
  $("#pizza-form").submit(function (event) {
    event.preventDefault();
    const pizzaSizeInput = $("input:radio[name=size]:checked").val(); 
    const toppingsInput = $("input:radio[name=topping]:checked").val();


    $("#pizza-order").text(pizzaSizeInput);
  });
});