// Promise, Creating Promise
// Always return a promise inside .then() to ensure chaining works.
// If you don't return a promise, the next .then() executes immediately.
// This can cause issues if later steps depend on previous results.

// ✔ If .catch() is in the middle and doesn't return a promise, the chain continues with undefined.
// ✔ If .catch() returns a value, the next .then() receives it.
// ✔ If .catch() is at the end, the chain stops on error.

// ✔ You can nest .then() inside another .then(), but it's bad practice.
// ✔ Chaining .then() by returning promises keeps the code clean and readable.
// ✔ Proper chaining automatically propagates errors to a single .catch() block.

 // More Readable & Maintainable – Flat structure instead of deep nesting.
// ✔ Automatic Error Propagation – If fetchData() fails, the .catch() at the end will handle it.
// ✔ Each Step Waits for the Previous One – No need to manually manage async flow.


// Problems with This Approach
// Callback Hell (Pyramid of Doom)
// Code gets deeply nested and harder to read.
// Error Handling Becomes Difficult
// If fetchData() fails, handling the error properly is tricky.
// Loses the Benefits of Promise Chaining
// We aren't using proper .then() chaining, making it harder to manage.



// When you want full control over when the promise resolves/rejects.
// When wrapping callback-based functions in a promise.

// where don't use Promise
// When using APIs that already return a Promise (like fetch, axios, or fs.promises).
// When chaining another Promise-returning function instead of manually handling the execution.


// Feature	| new Promise()	| Function That Returns a Promise
// Manual Creation | 	Yes | 	No
// Error Handling	| You must explicitly call reject() |	Errors propagate naturally
// Use Case |	Wrapping callbacks, custom logic |	Using existing Promise-based APIs

// ✔ Use new Promise() only when necessary (e.g., converting callback-based functions to Promises).
// ✔ Use Promise-returning functions when possible to avoid unnecessary complexity.

// When you need a pre-resolved or pre-rejected promise.
// When converting non-promise values into a promise.

// Use Promise.resolve(value) instead of new Promise((resolve) => resolve(value)).
// Use existing Promise-based APIs directly (fetch(), axios.get(), etc.).
// Only use new Promise() when handling callback-based functions (like setTimeout, fs.readFile in Node.js before fs.promises).

// Promise.resolve(value) returns an already-resolved Promise.
// It is useful for ensuring a function always returns a Promise.
// Unlike new Promise(), it can't delay execution or provide manual control.

// If a class requires new, the only way to call its instance methods is by instantiating it. However, static methods, factories, and singletons allow you to call methods without needing new.


let p_resolved = Promise.resolve("Done!");
console.log(p_resolved); // Promise {<fulfilled>: "Done!"}

p_resolved.then(console.log); // Logs: "Done!"

let p_with_control = new Promise((resolve) => {
  setTimeout(() => resolve("Delayed!"), 2000);
});

p_with_control.then(console.log); // Logs: "Delayed!" after 2 seconds

// A static method belongs to the class itself, not to instances of the class. This allows calling methods directly without instantiating the class.

class Utility {
  static greet(name) {
    return `Hello, ${name}!`;
  }
}

console.log(Utility.greet("Alice")); // ✅ Works without `new`

// Singleton Pattern
class Logger {
  log(message) {
    console.log(`[LOG]: ${message}`);
  }
}

// Create a single instance manually
const logger = new Logger();

// Call method without `new`
logger.log("This works without new!");


// Instead of forcing new, a factory method creates an instance internally and returns it.

class Database {
  constructor(connection) {
    this.connection = connection;
  }

  static connect() {
    return new Database("Connected to DB");
  }
}

const db = Database.connect(); // ✅ Works without `new`
console.log(db.connection); // "Connected to DB"

// A class with only static methods behaves like a namespace.
// Example: Static Utility Class
class MathUtils {
  static square(n) {
    return n * n;
  }
}

console.log(MathUtils.square(4));


// A factory function is simply a regular function that returns an object (instead of requiring new to instantiate a class).

function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  };
}

// You define a static method directly on the constructor function itself, not on its prototype.

// ✅ No `new` needed
const user = createUser("Alice", 25);

function User(name) {
  this.name = name;
}

// Adding a static method
User.sayHello = function () {
  return "Hello from User!";
};

const user1 = new User("Alice");

// 🔹 Calling the static method
console.log(User.sayHello()); // ✅ "Hello from User!"

// 🔹 Calling it on an instance will NOT work
console.log(user1.sayHello); // ❌ undefined


// Why Doesn’t sayHello() Work on user1?
// Instance methods go on User.prototype, so every instance can use them.
// Static methods are directly attached to User, so they are not inherited by instances.

const cart = ['shoes', 'pants', 'Tshirt'];


function getOrderId() {
  const id = Math.floor((Math.random() * 10) + 1)
  return id;
}

console.log('getOrderId', getOrderId())
console.log('getOrderId', getOrderId())

function validateCart(cart) {
  if(cart.length < 3) {
    // You have to buy atleast 3 products
    return false;
  } else {
    return true;
  }
}

function createOrder(cart) {
  // Using Promise constructor
  const p = new Promise(function(resolve, reject) {
    // createOrder
    if(validateCart(cart)) {
      // resolve({
      //   id: getOrderId(),
      //   msg: 'Order Created'
      // })
      setTimeout(() => {
         resolve({
        id: getOrderId(),
        msg: 'Order Created'
      })
      }, 2000)
    } else {
      const err = new Error('Cart is not valid');
      reject({
        id: getOrderId(),
        msg: "Order Cancelled with unexpected error",
        err
      })
    }
  });
  
  return p;
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    if(orderId > 4) {
      setTimeout(resolve('Payment Successfull ' + orderId), 2000);
    } else {
      setTimeout(reject('Payment Rejected ' + orderId), 2000)
    }
  })
}


const orderCreate = createOrder(cart);

function taskBeforeOrder() {
  return new Promise((resolve, reject) => {
    let _resolve = resolve('Checking Availabilty of Products & showing Loader')
    setTimeout(_resolve, 2000)
  })
}

taskBeforeOrder().then(function(res) {
  return createOrder(cart);
})
.then(function(res) {
  console.log('resolved', res);
  let orderId = res.id
  return proceedToPayment(orderId);
})
.then(function(res) {
  console.log('Hurray We are packing your orders Keep Shoping....', res);
})
.catch((err) => {
  console.log('Error:', err)
}).finally(() => {
    console.log("Hiding loader...");
})





