const counter = createCounter();

console.log('counter()', counter())
console.log('counter()', counter())
console.log('counter()', counter())
console.log('counter()', counter())

function createCounter() {
  let count  = 0
  function counter() {
    count = count + 1
    return count
  }
  
  return counter;
}


// 2 Question

const account = createBankAccount(100);
account.deposit(50);
console.log(account.getBalance()); // 150
console.log(account.balance);

function createBankAccount(bal) {
  let accountBalance = bal || 0;
  function getBalance() {
    return accountBalance;
  }
  function deposit(bal) {
    accountBalance = accountBalance + bal
    return accountBalance
  }
  return {
    getBalance,
    deposit
  }
}

// 3 Question


const init = once(() => console.log("Initialized!"));
init(); // "Initialized!"
init(); // Nothing happens
init(); // Nothing happens


function once(cb) {
  let is_init = false
  
  function _init() {
   if(!is_init) {
     is_init = true;
      cb()
   }
  }
  
  return _init;
}


// Each call to outer() creates a new execution context with its own count variable.

// Encapsulation: The count variable is encapsulated within the closure created by the outer function. It is not accessible from the outside, providing a form of data privacy.
// Persistent State: Each closure retains its own state between function calls. This is why counter1 and counter2 maintain separate counts.

function outer() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const counter1 = outer();
const counter2 = outer();

counter1(); 
counter1(); 
counter2();
counter2();


let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count);
  }
  console.log(count);
})();


console.log(typeof foo);
var foo = function () {
  return "Hello!";
};
console.log(typeof foo);



// Synchronous Code:
console.log("Start")
console.log("End")

// Microtasks:
Promise.resolve().then(() => console.log("Promise"))

// Macrotasks:
setTimeout(() => console.log("Timeout"), 0)