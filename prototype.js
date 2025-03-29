// inheritance in JS => When an object trying to access variables and properties of another object

// prototype is an Object that get attach to function/method/object and this object has some hidden properties

// Whenever we create object/ function/ methods/ array/ variable , these all are attached with some hidden properties, which we call prototype

// _proto_ is reference to prototype ( or it points towards prototype ), if we want to access prototype, we do _proto_

// prototype object has a prototype of its own, and so on until an object is reached with null as its prototype,  this is called prototype chaining

let arr = ["Akashay", "Aditya"];

let object = {
  name: "Aditya",
  city: "Bhilai",
  getState: function () {
    console.log("CG");
  },
};

// __proto__ same as .prototype
console.log(Object.getPrototypeOf(arr));

arr.__proto__.__proto__.__proto__

// array => object prototype => null

// function.prototype

// Everything in js is object because chain ends with object its protype is null

// Object.prototype


// Never do this

// object.__proto__ same as Object.prototype


object.__proto__ = object_3

// cheking in top of object it does not find it will go to __proto__ and find this its called prototypal inheritence

// it knows this context in that object

Function.prototype.mybind = function() {
  console.log('New Bind')
}

function fun_new() {
  
}

fun_new.mybind()

// __proto__ : why these kind name so that you don't mess up with __proto__


// assigns hidden

// In JavaScript, prototyping is a way to inherit properties and methods from one object to another. Every JavaScript object has a hidden [[Prototype]] (or __proto__) that allows it to access properties/methods from its prototype chain.

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hello, my name is ${this.name}.`);
  };
}

const alice = new Person("Alice", 25);
const bob = new Person("Bob", 30);

alice.greet(); // Hello, my name is Alice.
bob.greet();

// Every Person instance has its own copy of the greet function, which wastes memory.

function Person_1(name, age) {
  this.name = name;
  this.age = age;
}

// Add greet method to the prototype (shared across all instances)
Person_1.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}.`);
};

const alice_1 = new Person_1("Alice_1", 25);
const bob_1 = new Person_1("Bob_1", 30);

alice_1.greet(); // Hello, my name is Alice.
bob_1.greet(); // Hello, my name is Bob.

// Adding last method to Array prototype

Array.prototype.last = function () {
  return this[this.length - 1];
};

const numbers = [10, 20, 30, 40];
console.log("number.last()", numbers.last()); // 40

// 3. Parent Constructor

function Vehicle(type) {
  this.type = type;
}

// Shared method in prototype
Vehicle.prototype.start = function () {
  console.log(`${this.type} is starting...`);
};

// Child Constructor (inherits from Vehicle)
function Car(brand) {
  Vehicle.call(this, "Car"); // Call parent constructor
  this.brand = brand;
}

// Set up prototype inheritance
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// Add a method specific to Car
Car.prototype.honk = function () {
  console.log(`${this.brand} says Beep Beep!`);
};

// Create an instance
const myCar = new Car("Toyota");

myCar.start(); // Car is starting...
myCar.honk(); // Toyota says Beep Beep!

// Car inherits the start() method from Vehicle.prototype.
// Car can also have its own unique methods (honk()).

// 4.
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

console.log("hello".capitalize()); // Hello
console.log("javascript".capitalize()); // Javascript

// 5. creating custom logger
Object.prototype.log = function () {
  console.log(JSON.stringify(this, null, 2));
};

const user = { name: "Alice", age: 25 };
user.log();
// Output:
// {
//   "name": "Alice",
//   "age": 25
// }

const product = { id: 101, name: "Laptop", price: 999 };
product.log();

// pollyfill for map method
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
      newArr.push(callback(this[i], i, this));
    }
    return newArr;
  };
}

// Usage
const numbers_1 = [1, 2, 3, 4];
const squared = numbers_1.myMap((num) => num * num);
console.log(squared); // [1, 4, 9, 16]

// Creating a throttle function
Function.prototype.throttle = function (delay) {
  let lastCall = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) return;
    lastCall = now;
    this(...args);
  };
};

// Usage example
function onResize() {
  console.log("Resized at", new Date().toLocaleTimeString());
}

// Apply throttling (calls allowed once per 1 second)
window.addEventListener("resize", onResize.throttle(1000));

// Implementing a Queue with Prototypes
function Queue() {
  this.items = [];
}

// Enqueue method
Queue.prototype.enqueue = function (element) {
  this.items.push(element);
};

// Dequeue method
Queue.prototype.dequeue = function () {
  return this.items.shift();
};

// Peek method
Queue.prototype.peek = function () {
  return this.items[0];
};

const myQueue = new Queue();
myQueue.enqueue("Task 1");
myQueue.enqueue("Task 2");
console.log(myQueue.peek()); // Task 1
console.log(myQueue.dequeue()); // Task 1
console.log(myQueue.dequeue()); // Task 2

console.log("date", new Date().toLocaleTimeString());

navigator.vibrate(500);
