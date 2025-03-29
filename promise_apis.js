
let p2_f = Promise.resolve("P2 Success");
let p1_reject = Promise.reject("P1 Reject");
let p3_f = new Promise((res) => setTimeout(() => res("p3 resolved"), 2000));

let p1_s = Promise.resolve("P1 Success");
let p2_s = Promise.resolve("P2 Success");
let p3_s = new Promise((res) => setTimeout(() => res("p3 resolved"), 2000));

Promise.all([p3_s, p2_s, p1_s]).then(function all(res) {
  console.log("res", res);
});

// any : any success, all fails Aggregate error
// race: any settle means don't care about resolve or reject {errors: []}


const p1_Error = Promise.reject("Error from P1");
const p2_Error = Promise.reject("Error from P2");
const p3_Error = Promise.reject("Error from P3");

Promise.any([p1_Error, p2_Error, p3_Error])
  .then((result) => {
    console.log("Resolved:", result);
  })
  .catch((error) => {
    console.log("All promises failed!");
    console.log(error instanceof AggregateError); // true
    console.log("Errors:", error.errors); // Array of all errors
  });



let p1 = Promise.reject("P1 Success");
let p2 = Promise.resolve("P2 Success");
let p3 = new Promise((res) => setTimeout(() => res("p3 resolved"), 8000));

Promise.allSettled([p1, p2, p3]).then(function all(res) {
  console.log("res", res);
});

// let p1 = Promise.resolve("P1 Resolve");
// let p2 = new Promise((res, rej) => setTimeout(() => res("p3 reject"), 4000));
// let p3 = new Promise((res) => setTimeout(() => res("p3 resolved"), 2000));

// Promise.all([p1, p2, p3]).then(function all(res) {
//   console.log("res", res);
// });


const fetchUser = fetch('/user.json').then(res => res.json());
const fetchPosts = fetch('/posts.json').then(res => res.json());
const fetchComments = fetch('/comments.json').then(res => res.json());

Promise.allSettled([fetchUser, fetchPosts, fetchComments]).then(results => {
  results.forEach(result => {
    if (result.status === 'fulfilled') {
      console.log("✅ Data:", result.value);
    } else {
      console.warn("❌ Error:", result.reason);
    }
  });
});

