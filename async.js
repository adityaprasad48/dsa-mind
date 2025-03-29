// asynch function
// 1. always returns a promise. even if return no promise value it will wrap value inside a promise

// await only be used inside async function

const p = new Promise((resolve, reject) => {
  setTimeout(resolve("Promise resolved Value"), 5000);
});

async function getData() {
  // return 'Got some data...'
  return p;
}

// handle promise using then
const data = getData().then(console.log);

console.log("data", data);

// asynch await combo use to handle promises.
// how used to handle before async await

// const percentage = await navigator.getBattery()

// console.log('percentage', percentage .level* 100)

async function handlePromise() {
  console.log("Hello handlePromise:::");
  const val = await p;
  console.log(
    "waiting for promise to resolve line 28. once promise below code excuted"
  );
  console.log({ val });
}

handlePromise();

function getNewData() {
  p.then((res) => console.log("p", res));
  console.log("JS engine will not wait for this promise ");
}

getNewData();


const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve('Promise p1 resolved'), 10000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(resolve('Promise p1 resolved'), 5000)
})

async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    let data = await response.json();
    console.log("Data:", data);
  } catch (error) {
    console.error("Fetch Error:", error);
  }
}

fetchData();

// Empty 
// callstack: handlePromise(); await p1 (handlePromise() function is suspended removed from callstack;) till p1 is resolved move ahead;
// after 5 sec will start executing after 5 sec from that point it got suspended


// by that time p2 already gets reolved because p2 resolved in 5 sec

// callstack can not be blocked.

// use callstack to check in dev tools

// use fetch: 
// fetch returns promise response object
// .json() return promise json string


// using try catch or using handlePromise().catch((err) => console.log(err))



// what is aysnc await explain with example

// synthetical sugar means
// easier to read and debug
