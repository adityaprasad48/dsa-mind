fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(console.log);

// fetch(url) makes an HTTP request and returns a Promise that resolves to a Response object.
// .then(response => response.json())
// Extracts JSON from the Response object.
// Returns a new Promise that resolves to actual data.
// .then(user => console.log(user))
// Logs the parsed JSON data.
// .catch(error => console.error('Error:', error))
// Handles network failures or API errors.

// resolved onced
// users is immutable

// Promise is placeholder which will be filled certain point of time.

// container of future value

// Promise is an object representing the eventual completion or failure of an async operation.

// proced to dependent function using callback and it will become callback hell
function createOrder() {
  let msg = 'Order Created';
  return msg;
}

function orderSummary() {
  let msg = 'Order Summary'
  return msg
}

function updateWalletBalance() {
  let msg = 'Wallet Balance Update'
  return msg
}


// do this using then operation and return promise so data can be used or promise chaning


typeof [2,3]

NaN == NaN
NaN === NaN

console.log([] == [])

console.log({} === {})

null == null
null === null

typeof NaN

const numbers = [1,2,3]
numbers [20] = 10
numbers

let a = {name: 'adi'}
const names = [a]
a = {name: 'ravi'}
console.log('names', names)

console.log([2,3,4][0,3,1])

console.log([1,2,3] + [1,3,4])
// Convert arrays to strings:
// Concatenate the two strings:

051


// console.log(sum)
console.log(sumWithVar, sumWithVarNew)

const sum = function sum1() {
  return 2
}

let sumWithArrow = () =>  {
  return 3
}

var sumWithVar = () => {
  return 5
}


var sumWithVarNew = function sum() {
  return 5
}

