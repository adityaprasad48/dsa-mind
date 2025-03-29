// Higher Order Function

// 1. Follow DRY(Don't Repeat Yourself) principle while coding.
// 2. Use function to stop writing repeating line of codes.
// 3. Function that takes another function as argument(callback function) is known as Higher order functions.
// 4. It is this ability that function can be stored, passed and returned,  they are called first class citizens.
// 5. If we use Array.property.function-name. This function is accessible to any array in your code.
// 6. A higher-order function is a function that can take another function as an argument, or that returns a function as a result.

const radius = [1, 2, 3, 4, 5];

const calculate = (radius, cb) => {
  // return radius.map((r) => {
  //   return cb(r);
  // });
  let arr = []
  for(let i = 0; i < radius.length; i++) {
    arr.push(cb(radius[i]));
  }
  return arr;
}


const result1 = calculate(radius, area);
const result2 = calculate(radius, circumference);
const result3 = calculate(radius, diameter);

console.log('result1', result1);
console.log('result2', result2);
console.log('result3', result3);



function circumference(r) {
  return 2 * Math.PI * r;
}

function diameter(r) {  
  return 2 * r;
}


function area(r) {
  return Math.PI * r * r;
}

radius.map((item) => area(item))

radius.map(area)

