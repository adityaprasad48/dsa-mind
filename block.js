let a = 10
const c = 100

var b = 50

// let a = 20

var b = 80

 {
  let a = 20; // Valid block-scoped variable
  var b = 90; // Declaring b correctly

  a = 900; // Updating a (valid since it's declared with let)
  b = 30;  // Updating b (valid since var allows reassignment)
  
  

  console.log('block a', a); // Logs: block a 900
  console.log('function scope b', b); // Logs: function scope b 30
}; // IIFE is correctly invoked

// check()

console.log('a', a, 'b', b)


