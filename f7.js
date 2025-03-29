// Regex Master

const startWithHelloRegex = /^Hello/;

startWithHelloRegex.test('Hello World');
startWithHelloRegex.test('Keep World Clean');

const regex = /^\d+$/;

// Hoisting Read, What is undefined vs not defined;
const getAge = function (age) {
  console.log('getAge name', getAge.name)
  console.log('arguments', arguments)
  // console.log('function name', getAge.name)
  console.log('age', age)
  
  return age
}

getAge(34)


function greet(name, age) {  // `name` and `age` are parameters
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

greet("Alice", 25);  // "Alice" and 25 are arguments


const perPage = 10
const products = 90
const products2 = 88

const totalPages = Math.ceil(products2 / perPage)

products2 / perPage

'totalPages' ; totalPages



