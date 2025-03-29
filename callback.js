// Callbacks: due to callback we can achive asynchrous in js.
// we should not block main theread or js call stack

setTimeout(() => {
  console.log('Executed')
}, 2000);


function runTask(cb) {
  console.log('All Task listed here');
  cb()
}

runTask(() => {
  console.log('Task ran')
})


// Things learned:
// 1. Function that is passed on as argument to another function is called callback function.
// 2. setTimeout helps turn JS which is sinhlethreaded and synchronous into asynchronous.
// 3. Event listeners can also invoke closures with scope.
// 4. Event listeners consume a lot of memory which can potentially slow down the website therefore it is good practice to remove if it is not used.


function UpdateCount() {
  // when i click the button, callback function will be called and the count will be updated
  document.getElementById('#btn').addEventListener('click', function() {
    var count = parseInt(document.getElementById('#count').innerHTML);
    document.getElementById('#count').innerHTML = count + 1;
  });
}


UpdateCount();

// JavaScript executes code synchronously by default (one line after another). However, asynchronous operations like network requests, file reading, or timers need callbacks to avoid blocking the execution.


function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched!");
    callback("Fetched Data"); // Call the provided function
  }, 2000);
}

fetchData((data) => {
  console.log("Received:", data);
});

 // Without callbacks, JavaScript wouldn't wait for fetchData() to complete before using the data.


