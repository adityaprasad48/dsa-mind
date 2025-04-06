// Basic Override
const obj = {
  valueOf() {
    return 5;
  },
};


// valueOf() is called during type coersion
console.log(ob)
console.log(obj + 0);

const obj = {
  toString() {
    return "10";
  },
  valueOf() {
    return 5;
  }
};

// toString() called 
console.log(String(obj)); // 10 
// valueOf() called
console.log(Number(obj)); // 5

// Custom Comparison
const a = {
  value: 1,
  valueOf() {
    return this.value++;
  }
};

console.log(a == 1 && a == 2 && a == 3); // true or false?

// Overload Object Behavior
const obj = {
  valueOf() {
    return [1, 2, 3];
  }
};

console.log(obj + 1); // ?
// "[object Object]" + 1 is expected, but since valueOf() returns an array → coercion continues to toString() on that array. Result: "1,2,3" + 1 → "1,2,31"

const obj = {
  value: 50,
  valueOf() {
    return () => this.value;
  }
};

console.log(obj + 10); // ?

// The hint is a string passed by the JS engine to indicate what type it’s trying to convert the object into.
const obj = {
  [Symbol.toPrimitive](hint) {
    console.log("hint:", hint);
    // return something primitive here
  }
};


{
  [Symbol.toPrimitive]() { return 1; },
  toString() { return "foo"; },
  valueOf() { return 99; }
}



