// A generator function is a special type of function that can pause execution and resume later. It is defined using function* and uses the yield keyword.

function* sendCount() {
  yield 1;
  yield 2;
}

let count = sendCount();

count.next();
count.next();
count.next();

function* getSomeName() {
  const names = ["Aditya", "Rajan", "Ram", "Hanuman"];

  let index = 0;
  yield names[index];
  // it should start from this for second next() functions call
  index = index + 1;
  yield names[index];

  index = index + 1;
  yield names[index];

  index = index + 1;
  yield names[index];
}

const personName = getSomeName();

// personName.next();
// personName.next();
// personName.next();

// # Each next() call resumes execution from the last yield.
// forEach does not pause execution, so yield cannot work inside it.

function* getSomeUpdatedName() {
  const names = ["Aditya", "Rajan", "Ram", "Hanuman", "Jhon", "Newton"];
  // let index = 0;
  // while (index < names.length) {
  //   const name = names[index];
  //   yield name;
  //   index = index + 1;
  // }
  for (const name of names) {
    yield name; // ✅ Directly yielding values
  }
}

const updatedName = getSomeUpdatedName();

console.log("using for loop");

for (const item of updatedName) {
  console.log("item", item);
}

const nodeUpdateName = getSomeUpdatedName();
let node = nodeUpdateName.next();

while (!node.done) {
  console.log(node);
  node = nodeUpdateName.next();
}

// The Call Stack Does NOT Wait → The generator pauses and exits the stack when yield is encountered.
// Execution Resumes on next() → The function continues only when next() is called.
// It Doesn't Block Other Code → While the generator is paused, the main program keeps running.
// This Makes Generators Useful for Async Operations → You can use them to handle tasks like fetching data in steps.


// genrator has three state running, suspended, closed

function* myGenerator() {
  console.log("Start");
  yield "A"; // ⏸️ Function pauses here
  console.log("Middle");
  yield "B"; // ⏸️ Function pauses here
  console.log("End");
}

const gen = myGenerator();

console.log("Before first next()");
console.log(gen.next().value); // ✅ Logs: "Start", returns "A"
console.log("After first next()");

console.log(gen.next().value); // ✅ Logs: "Middle", returns "B"
console.log("After second next()");

console.log(gen.next().value); // ✅ Logs: "End", returns undefined
console.log("After third next()");


function* pipeline() {
    let input = yield "Enter a number:";
    let squared = yield `Square: ${input * input}`;
    let double = yield `Double: ${squared * 2}`;
    yield `Final result: ${double + 5}`;
}

const gen = pipeline();

console.log(gen.next().value); // "Enter a number:"
console.log(gen.next(4).value); // "Square: 16"
console.log(gen.next(16).value); // "Double: 32"
console.log(gen.next(32).value); // "Final result: 37"



function* textTransformer(text) {
    let modifiedText = text;

    while (true) {
        const command = yield modifiedText;
        
        if (command === "uppercase") {
            modifiedText = modifiedText.toUpperCase();
        } else if (command === "lowercase") {
            modifiedText = modifiedText.toLowerCase();
        } else if (command === "reverse") {
            modifiedText = modifiedText.split("").reverse().join("");
        } else if (command === "capitalize") {
            modifiedText = modifiedText.replace(/\b\w/g, char => char.toUpperCase());
        }
    }
}

const transformer = textTransformer("hello world");

console.log(transformer.next().value);  // "hello world"
console.log(transformer.next("uppercase").value);  // "HELLO WORLD"
console.log(transformer.next("reverse").value);  // "DLROW OLLEH"
console.log(transformer.next("lowercase").value);  // "dlrow olleh"
console.log(transformer.next("capitalize").value);  // "Dlrow Olleh"






