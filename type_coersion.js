// Type Coercion Rules for ==
// Here’s what happens when a == b:

// Types Compared	What Happens
// Same Type =>	Compare directly (no coercion)
// null & undefined =>	Always true only when compared to each other
// Object & Primitive =>	Convert object to primitive via valueOf / toString
// Boolean & Any =>	Convert boolean to number (true → 1, false → 0)
// String & Number =>	Convert string to number
// Anything else =>	Use ToPrimitive on object, then retry

// JavaScript can automatically convert types during operations like:

// Operation	Coercion To
// + (with string)	string
// + (with numbers)	number
// Comparison (==)	tries to match types
// Template strings	string
// Boolean context	boolean (truthy/falsy)

console.log([] + []); // '' + '' => '' // convert to primitive use valueOf()=> object => not primitive => toString()

console.log([] + {}); // ?
console.log({} + []); // ?

console.log(true + false);

console.log("5" - 1); // ?

const obj = {
  value: 5,
  toString() {
    return "10";
  },
  // valueOf() {
  //   return this.value;
  // },
};

console.log(obj + 1); // default valueOf if does not exist toString

const x = {
  i: 1,
  [Symbol.toPrimitive]() {
    return this.i++;
  },
};

console.log(false == 0); // true
console.log(false === 0); // false
console.log("" == 0); // true
console.log(null == undefined); // true
console.log(null == 0); // false

console.log(null == null);
console.log({} == {});
console.log([] == []);

console.log([] + 1 + 2); // left to right : '' + 1 + 2

console.log(false == "0");

console.log([] == true);

console.log(typeof NaN); // number

console.log(!!"false" == !!"true"); // true

console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(
  "some typeof",
  typeof [],
  typeof true,
  typeof "aditya",
  typeof {},
  typeof function newOne() {}
);

console.log(null == undefined);
console.log(null === undefined);

// Unary plus
console.log(+true); // ?
console.log(+false); // ?
console.log(+[]); // ?

let y = [1];
y.toString = y.shift;
console.log(y + 1); // ?

console.log([] == ![]);
// ↓
// [] == false
// ↓
// [] == 0
// ↓
// "" == 0
// ↓
// 0 == 0
// ↓
// true

// [].valueOf() → still object
// [].toString() → ""  (empty string)

let e = [];

console.log({
  e: e.valueOf(),
  a: e.toString(),
});

class MyArray extends Array {
  valueOf() {
    // console.log('super', Object.entries(super));
    return "33";
  }
}

let o = [3];
console.log(o.valueOf());

let u = new MyArray(9);

console.log(u.valueOf());
