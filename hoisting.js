// Top 5 Questions

// Function vs Variable Hoisting

console.log(foo()); // ?
// console.log(bar()); // Type Error: bar is not a function

function foo() {
  return "I am foo";
}

var bar = function () {
  return "I am bar";
};

//  Function and var with same name
console.log(typeof greet); // ?

var greet = "hello";

function greet() {
  console.log("hi");
}

// let + var + TDZ (Temporal Dead Zone)

console.log(a); // undefined
// console.log(b); // ReferenceError: Cannot access 'b' before initialization

var a = 1;
let b = 2;

// var a is hoisted and initialized as undefined
// let b is hoisted too, but not initialized — it's in the Temporal Dead Zone (TDZ)

function test() {
  console.log(typeof a); // undefined
  // console.log(typeof b); // ReferenceError: Cannot access 'b' before initialization
  console.log(typeof c); // function

  var a = 1;
  let b = 2;
  function c() {}
}

test();

console.log(o); // function body
function o() {}
var o = 5;
console.log(o); // 5

// Both var and function are hoisted to the top regardless of the order you write them.

// But function declarations get hoisted with body first, then var declarations are hoisted (without value).

// The behavior changes inside a function or strict module — here's a wild version:

function outer() {
  console.log(typeof greet);

  var greet = "hello";

  function greet() {
    console.log("hi");
  }
}

outer();

// in non strict mode can assign variable it will create create variable in global scope
function no_outer() {
  console.log(typeof msg); // 'undefined' but if we remove initialization then also gives 'undefined' but if we just log msg and remove initialization it will give error 'msg is not defined'

  msg = "hello";

  // function greet() {
  //   console.log("hi");
  // }
}

no_outer();
