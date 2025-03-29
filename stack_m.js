const _ = require("lodash");

export class Stack {
  constructor() {
    this.data = [];
  }

  // Push element to the stack
  push(value) {
    this.data.push(value);
  }

  // Pop element from the stack
  pop() {
    return _.last(this.data) !== undefined ? this.data.pop() : null;
  }

  // Get top element without removing it
  peek() {
    return _.last(this.data);
  }

  // Check if stack is empty
  isEmpty() {
    return _.isEmpty(this.data);
  }

  // Get stack size
  size() {
    return _.size(this.data);
  }
}

// Example Usage
const stack = new Stack();
let pushed;
pushed = stack.push(10);
console.log("pushed", pushed);
pushed = stack.push(20);
console.log("pushed", pushed);
console.log(stack.peek()); // Output: 20
console.log(stack.pop()); // Output: 20
console.log(stack.isEmpty()); // Output: false
console.log(stack.size()); // Output: 1
