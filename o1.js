// logging before defining a value 'undefined' beacuse checks in function scope
var x = 20;
function foo() {
  console.log(x);
  var x = 10;
}

foo();

console.log("Start");

setTimeout(() => {
  console.log("timeout");
}, 0);

console.log("End");

// output: End, Promise, timeout
setTimeout(() => {
  console.log("timeout");
}, 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// false
[1, 2] == [1, 2];

// Promise {<fulfilled>: 'Hello World'}
async function foo_async() {
  return "Hello World";
}
const res = foo_async();
console.log(res);

//

const user1 = {
  name: "john",
  age: 25,
  address: {
    city: "Mumbai",
    state: "Mahrashtra",
  },
};
const user2 = user1;
user2.name = "Ramesh";
user2.address.city = "Pune";
console.log(user1);
console.log(user2);

// just declearing variable without using any kind of keywords
// str;

// how do we know paramenter is array or not

console.log(typeof [2, 3]);

console.log("isArray", Array.isArray([1, 2]));

const isPlainObject = (value) =>
  typeof value === "object" && value !== null && !Array.isArray(value);

// 92 - 91 => 1 output is 1 than number is odd

const result = 92 - 91;

if (result & 1) {
  console.log(result, "is an odd number");
} else {
  console.log(result, "is an even number");
}
