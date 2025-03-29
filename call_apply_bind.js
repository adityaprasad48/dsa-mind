// Call, Apply, Bind

// call, apply, and bind are used to change the this context of a function. Here's how they work with practical use cases.

// Call: Borrow a Method from Another Object

// It allows reusing functions without duplicating code.
// The first argument of call is the object that this should refer to.

const user1 = {
  name: "Alice",
  greet: function (city) {
    console.log(`Hello, my name is ${this.name} and I'm from ${city}.`);
  },
};

const user2 = { name: "Bob" };
user1.greet.call(user2, "New York");

// Apply: You're using a function that expects multiple arguments, but you have them in an array.

// When you have arguments in an array instead of separate values.
// Useful when dealing with dynamic arguments, e.g., Math.max.apply(null, array)

const user = {
  name: "Charlie",
  number: "798782****",
  introduce: function (age, city, third_p) {
    console.log(
      `I'm ${this.name}, ${age} years old from ${city}. Third Value, ${third_p}`
    );
  },
};

user.introduce.apply(user, [25, "Los Angeles", "Appling Learned Stuff"]);

// bind - Create a New Function with a Fixed this
// You want to ensure a function always has the correct this, even when passed as a callback.

const user3 = {
  name: "David",
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
  showNumber: function () {
    console.log(`Your Number: ${this.number}`);
  },
};

const sayHello = user3.sayHello.bind(user2);
const showNumber = user3.showNumber.bind(user);

sayHello();
showNumber();

// const btn = document.createElement("button");
// btn.id = "myButton";
// btn.textContent = "Click Me";
// document.body.appendChild(btn);

// const button = document.querySelector("#myButton");

// If we pass `user.sayHello` directly, `this` will refer to the button.
// button.addEventListener("click", user3.sayHello.bind(user3));
// Now, clicking the button correctly logs: "Hello, my name is David"

// Ensures the function always uses the correct this value.
// Useful for event handlers, timers, and callbacks.


// Use bind() to fix this in event handlers
// ✅ Use bind() to fix this in callbacks like setTimeout
// ✅ Helps avoid "undefined" or unexpected this values


const restaurant = {
  name: "Gourmet Hub",
  orders: [],
  takeOrder(order) {
    console.log(`Order received: ${order} at ${this.name}`);
    this.orders.push(order);
  }
};

let waiter = restaurant.takeOrder; // Assigning function to a variable
// waiter("Pasta"); // ❌ ERROR: `this.name` is undefined

waiter

// waiter = restaurant.takeOrder.bind(restaurant)
// waiter('Veg Roll')

// Example with setTimeout, and btn click



// Bind 

// Using call(), we can preset arguments before execution.

// Example: Reusing a Function with Different Prefixes
function multiply(x, y) {
  console.log(x * y);
}

// 🔹 Create specialized functions
const double = multiply.call(null, 2); // Fix `x` as 2
const triple = multiply.call(null, 3); // Fix `x` as 3

double(5); // Output: 10
triple(4); // Output: 12
✅ Use Case: Efficient function reuse by presetting arguments.


// Some built-in objects, like arguments or NodeList, are not real arrays.
// We can use call() with Array.prototype.slice() to convert them into real arrays.

// Example: Converting arguments to an Array
function listItems() {
  const argsArray = Array.prototype.slice.call(arguments);
  console.log(argsArray);
}

listItems(1, 2, 3, 4);
// Output: [1, 2, 3, 4]

