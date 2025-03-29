function sum(a) {
  console.log(a)
  return function (b) {
    return b ? sum(a + b) : a;
  };
}

// const sum = createSum();
const sumVal = sum(1)(2)(3)(4)(5);

console.log("sumVal", sumVal());


function sum2(a) {
  console.log('a2', a)
  return function (b) {
    return b ? sum2(a + b) : a;
  };
}

// const sum = createSum();
const sumVal2 = sum2(1)(2)(3)(4)(5)();

console.log("sumVal2", sumVal2);


// one thing  noticed
// i did not foucus upon output what i need to return instead on input
// I had a idea to take one arg and sum with other arg then passed this to again back to sum function so recursion go one
// i really concerned on creating and returning function















