// Array methods

// Double the Number

let arr_1 = [1, 2, 3, 4];
let output = arr_1.map((item) => item * 2);
console.log("double", output);

// Filter Even Number
let arr = [1, 2, 3, 4, 5, 6];
output = arr.filter((item) => item % 2 == 0);
console.log("even array", output);

// Find first Long Word
arr = ["cat", "parrot", "elephant", "dog"];
output = arr.find((item) => item.length > 5);
console.log("Length more than Five", output);

// Sum of Integers
arr = [10, 20, 30];
output = arr.reduce((item, temp) => item + temp, 0);
console.log("Sum of Integers", output);

// Check If All Are Positive
arr = [2, 4, 6, 8];
output = arr.every((item) => item > 0);
console.log("all are positive", output);

// Check if the array contains any negative numbers.
arr = [3, -1, 5, 7];
output = arr.some((item) => item < 0);
console.log("any negative number", output);

// Sort Array alphabatically
arr = ["Steve", "Anna", "Mike", "John"];
output = arr.sort();
console.log("arr sort", output);

//  Reverse an Array
arr = [1, 2, 3, 4];
output = arr.reverse();
console.log("reversed", output);

// Flatten a Nested Array
arr = [2, 3, [4, 5], [8, 9]];
arr_2 = [2, 3, 8, [3, 4, [0, 9]]];
output = arr_2.flat();
console.log("flat", output);

// Remove dublicates
arr = [1, 2, 2, 3, 4, 4, 5];
output = [...new Set(arr)]; // error if remove new:- Constructor Set requires 'new
console.log("remove dublicates using Set", output);

output = arr.filter((item, i) => arr.indexOf(item) == i);
console.log("using filter + indexOf", output);
