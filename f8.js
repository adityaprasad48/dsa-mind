
function createOrder(cart, callback) {
  setTimeout(() => {
    const orderId = "ORD12345"; // Simulating order creation
    console.log("Order Created:", orderId);
    callback(orderId); // Pass orderId to the callback
  }, 1000);
}

function proceedToPayment(orderId) {
  console.log("Proceeding to payment for Order:", orderId);
}

const cart = ['pants', 'shirt', 'kurta'];

createOrder(cart, function(orderId) {
  proceedToPayment(orderId);
});



// passing callback this way is not realibable. giving control of my code to other part of application
 
function createNewOrder(cart) {
  setTimeout(() => {
    const orderId = "ORD12345"; // Simulating order creation
    console.log("Order Created:", orderId);
  }, 1000);
};

const promise = new Promise createNewOrder(cart);

// attaching a function
promise.then(function() {
  proceedToPayment(orderId) //
})


fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(console.log);