console.log('There is no tomarrow');

const ctx = new AudioContext();
const oscillator = ctx.createOscillator();

oscillator.type = "sine";  // Default is sine, but can be "square", "sawtooth", or "triangle"
oscillator.frequency.value = 440;  // Set frequency to 440 Hz (A4 note)

oscillator.connect(ctx.destination); // Connect to output (speakers)

// oscillator.start(); // Start sound
// setTimeout(() => oscillator.stop(), 500); // Stop after 2 seconds


console.log({} == {} || {} === {})

const watch = {
  id: '1', 
  brand: 'Boat',
  price: '1500',
  currency: 'Rupee'
}

const watchKeys = Object.keys(watch)
const watchValues = Object.values(watch)
const watchEntries = Object.entries(watch)

console.log('watchValues', watchValues);
console.log('watchKeys', watchKeys);
console.log('watchEntries', watchEntries)

for(const key in watch) {
  console.log(key, watch[key])
}

for (const pair of Object.entries(watch)) {
  console.log('pair', pair);
}

// Array.from Example
// Convert a string into an array of characters.
// Convert a Set into an array.
// Convert a Map into an array.
// Convert an object’s keys into an array.

let str = 'Aditya';
let alpha_arr = Array.from('Aditya');
console.log('alpha_arr', alpha_arr)

// Set example and Array.from
const set_a = new Set([1,2,3,4])
set_a.add(5);
set_a.add(6);
set_a.add(4);

set_a.delete(0);

const set_a_arr = Array.from(set_a)
set_a_arr.forEach(item => console.log('item', item))
console.log('set_a', set_a_arr, 'size', set_a.size);

// nodelist to array
const all_ps = document.querySelectorAll('p');
const ps_arr = Array.from(all_ps);

// arguements to array
function findMaxNumber() {
  const nums = Array.from(arguments);
  return Math.max(...nums);
}

const maxNum = findMaxNumber(2, 4, 8, 9)
console.log('maxNum', maxNum)

// sequence of number
const numbers = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(numbers);

// Typed Array into a Regular Array
const int8 = new Int8Array([10, 20, 30]);

const fs = require("fs");

console.log('fs', fs)

fs.readFile("example.dat", (err, data) => {
    if (err) throw err;
    const binaryData = new Int8Array(data.buffer); // Convert buffer to Int8Array
    console.log(binaryData);
});

// Remove dublicates
const duplicateArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = Array.from(new Set(duplicateArray))
console.log('uniqueArr', uniqueArr)

// Random nums
const randomNums = Array.from({length: 20}, () => Math.floor(Math.random() * 20) + 1)
console.log('randomNums', randomNums)

// Map on array item make item double
const double_arr = Array.from([2, 4, 8], (item, i) => item * 2)
console.log('double_arr', double_arr)






// Generate an Alphabet Array
const letterArr = Array.from({length: 26}, (_, i) => ({ 'code': (65 + i), 'char': String.fromCharCode(65 + i) }) );
                             
console.log('letterArr', letterArr)
console.log('fromCharCode', String.fromCharCode(65 + 1))

function* generator() {
    yield 1;
    yield 2;
    yield 3;
}
const genArray = Array.from(generator());


const iterable = {
    *[Symbol.iterator]() {
        yield 'a';
        yield 'b';
        yield 'c';
    }
};
const arr = Array.from(iterable);
console.log(arr); // ['a', 'b', 'c']

// find, findIndex, indexOf, includes

// find
const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" }
];

const user = users.find(user => user.email === "bob@example.com");

console.log('user', user);

// findIndex
const nameIndex = users.findIndex(user => user.name == 'Bob')

const nameIndex_2 = users.findIndex(user => user.name == 'Aditya')

console.log('nameIndex', nameIndex)
console.log('nameIndex_2', nameIndex_2)

// includes
const possibleRoles = ['admin', 'editor', 'subscriber']
const userRole = 'editor'
const isAdmin = possibleRoles.includes(userRole)

console.log('isAdmin', isAdmin)

// indexOf
const cart = ["Laptop", "Smartphone", "Headphones"];

const itemIndex = cart.indexOf("Smartphone");

itemIndex !== -1 ? console.log('item found in cart') : console.log('Not fount in cart')


// splice 

const skills = ['problem_solving', 'creating_thinking', 'ReactJs', 'Filtering and Searching', 'NextJS'];

skills.splice(1, 1);

console.log('skills', skills)

skills.splice(2, 0, 'String')

console.log('skills', skills)

// Print of array and string methods 

// length
console.log('Aditya.length', 'Aditya'.length);

// toUppercase, toLowercase
console.log('lowercase', 'Aditya'.toLowerCase(), 'uppercase','Aditya'.toUpperCase());

console.log(String.fromCodePoint(97))

// '65 => A, 97 => a 97-65' 




'ABCD EFGH IJKL MNOP QRST UVWX YZ'


'   trimming'.trim()
'  trimStart'.trimStart()
'***trimEnd   '.trimEnd()
'This product is absolutely amazing and worth every penny!'.slice(0, 12).padEnd('***')
const fullName = "John Doe";
fullName.substring(0, fullName.indexOf(' '));

const comment = "This is a bad product!";
comment.replace('bad', 'good');

const message = "This is a bad, bad, bad product!";
message.replaceAll('bad', 'awesome')

"JavaScript is amazing".split(' ');

message.includes('product')

const url = "https://example.com";

url.startsWith('https:')
url.endsWith('.outlook.com')

const filePath = "/user/home/index.html"

filePath.indexOf('/')
filePath.lastIndexOf('/')

'Aditya'.padStart('Aditya'.length + 4, '*');
'Aditya'.padEnd('Aditya'.length + 10, '*');

console.log("-".repeat(20))

'Aditya '.repeat(6).trimEnd();

'Aditya'.charAt(3);
'Aditya'.charCodeAt(5)

'Aditya'.match('ya')


const names = ["Émile", "Alice", "Zoë"];
names.sort((a, b) => a.localeCompare(b));


// sort method
[7, 2, 4, 8].sort((a, b) => a - b);

[7, 2, 4, 8].sort();

[7, 2, 4, 8].sort((a, b) => b - a);

names.sort()

// sorting based on multiple factors
const employees = [
  { name: "John", age: 30, salary: 5000 },
  { name: "Alice", age: 25, salary: 7000 },
  { name: "Bob", age: 30, salary: 6000 }
];
employees.sort((a, b) => a.age - b.age || b.salary - a.salary); 


// Sorting Strings Case-Insensitive

const words_1 = ["banana", "Apple", "cherry"];

words_1.sort()

const words = ["banana", "Apple", "cherry"];
words.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

const players = [
  { name: "Player1", wins: 50, losses: 20 },
  { name: "Player2", wins: 30, losses: 10 }
];
players.sort((a, b) => (b.wins / (b.wins + b.losses)) - (a.wins / (a.wins + a.losses)));
console.log(players);


const numbers_2 = [2, 20, 10, 5];
numbers_2.sort((a, b) => a - b);


// Fresher Interview Video: 1 do deep analysis
// React Features: Adding Interectivity
// NextJS Features: Hold


'A'-1
'Aditya' + 100
2 + '2' + '2'

2 + '2' - '2'

const a = {
  name: 'aditya'
}

const b = {};

b[a] = 'Prasad'


console.log('b', b)

true - false
1 - {}
NaN == NaN
NaN === NaN


// sort method 
// shift and unshift

// Laxical Scoping
// HOC
// Function curring
// Infiniter currying: adding number upto 10 digits


// Array destructuring
// Object Destructuring
// Polyfill
// Temporal Dead Zone
// Weak Map
// Weak Set
// html structure
// figure and img tag
// anchor vs link tag
// async vs defer
// inline vs block level element
// void elements
// self closing tag
// em vs i tag
// bold vs strong

// CSS
// Selector Priority
// Postioning Property
// Css count
// display: none; visibilty: hidden; difference;


console.log('Mind Expectation')

const sortedLetters = Array.from('Aditya').sort()

console.log('sortedLetters', sortedLetters)


function abc() {
  console.log(abc.id)
}

abc()
abc.id = '233';


[...'string']

// Must Know Questions
// 1. Event Loop
// 2. Callback Hell
// 3. Promise Chaining
// 4. Hoisting
// 5. Closure
// 6. Prototype and Inheritence
// 7. Recursion concepts: flattening deeply nested object
// Two way conversation when machine learning round

// SD-2
// System Manager: round

// Most Challenging Question
// Design Patters

// Collaboration with different team like product manager, backend team member, peer


localStorage.setItem('name', 'Aditya');
localStorage.setItem('age', 25);
localStorage.setItem('phone_size', 6.3);
localStorage.setItem('known_os', ['Mac', "Linux", "Windows"]);
localStorage.setItem('known_os_fy', JSON.stringify(['Mac', "Linux", "Windows"]));


localStorage.setItem('outfit', JSON.stringify({
  date: new Date(),
  cloths: ['white T-Shirt', 'blue Pent', 'Slipper', 'Black Ring']
}))

localStorage.getItem('name')

const outfitWithParse = localStorage.getItem('outfit')
// outfitWithParse

const outfit = JSON.parse(localStorage.getItem('outfit'))

// outfit

localStorage.getItem('age')

JSON.parse(localStorage.getItem('age'))

JSON.parse(localStorage.getItem('phone_size'))

localStorage.getItem('known_os') // 'Mac,Linux,Windows'

JSON.parse(localStorage.getItem('known_os_str')) 

// what if item does not exist returns null
localStorage.getItem('unknown_os')

// JSON

// Cookies

function setCookie(name, value) {
    const now = new Date();
    // Set expiration time to 6 PM today
    now.setHours(18, 0, 0, 0); // 18:00:00 (6 PM)
    document.cookie = `${name}=${value}; expires=${now.toUTCString()}; path=/`;
}

// Example usage
setCookie("user", "JohnDoe");

console.log(document.cookie);




