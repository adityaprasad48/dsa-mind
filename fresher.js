// 1.What is HTML?
// HTML (HyperText Markup Language) is the standard language used to create and structure web pages. It defines the content of a webpage using tags and elements.

// Key Features of HTML:
// Markup Language – Uses tags (<h1>, <p>, <a>) to structure content.
// HyperText – Allows linking to other web pages via <a href="url">.
// Basic Building Block – Forms the skeleton of any webpage.
// Not a Programming Language – It doesn’t perform logic like JavaScript.
// Works with CSS & JavaScript – HTML structures content, CSS styles it, and JavaScript adds interactivity.

// 2. Semantic Tags
// Semantic HTML tags clearly describe the meaning of the content they contain. Unlike non-semantic tags (<div> and <span>), semantic tags improve readability, accessibility, and SEO.

// For example, instead of using a <div> for a navigation menu, you use <nav>, which tells browsers, developers, and screen readers that this section is for navigation.

// 3. Tags and Atributes

// HTML tags define elements on a webpage. They are enclosed in angle brackets (<>) and usually come in pairs (opening and closing tags). also have self closing element

// Attributes provide additional information about an element. They are written inside the opening tag and always follow the pattern:
// title="Tooltip on hover" id="new_btn"

// Block elements take up the full width and start on a new line.
// Inline elements only take up as much width as needed and stay in the same line. :can not apply width and height
// CSS can change an element's default display behavior (display: block; or display: inline;, display: inline-block;).


// Feature	Canvas (<canvas>)	SVG (<svg>)
// Rendering Type	Pixel-based (Raster)	Vector-based
// Scalability	Loses quality when scaled	Infinite scalability (no pixelation)
// // Performance	Faster for many objects & animations	Slower when handling complex graphics
// Interaction	Requires manual event handling (JavaScript needed)	Has built-in event listeners (e.g., onclick)
// Use Case	Best for games, charts, real-time graphics	Best for icons, logos, maps, and static graphics
// Browser Support	✅ All major browsers	✅ All major browsers

// 🎮 Use <canvas> for animations, games, and real-time rendering (e.g., graphs, drawings).
// 🏞 Use <svg> for logos, charts, maps, and interactive vector graphics.


// The term "Cascading" in CSS (Cascading Style Sheets) refers to the way styles are applied to HTML elements when multiple rules conflict with each other. The cascade algorithm determines which style takes precedence based on:

// 📌 1. Source of Styles (Origin)
// CSS can come from different sources, and their priority follows this order:
// 1️⃣ User-Agent Stylesheet (Default browser styles)
// 2️⃣ User Styles (Custom styles set by the user in browser settings)
// 3️⃣ Author Styles (Styles written in the CSS file)
// 4️⃣ Inline Styles (Directly written inside an element using style="")
// 5️⃣ Important Rules (!important) (Overrides all other styles)

// Last Rule Wins

// CSS specificity determines which styles apply when multiple rules target the same element; it follows this order: Inline styles (1000) > IDs (100) > Classes, attributes, and pseudo-classes (10) > Elements and pseudo-elements (1), with !important overriding all

// Feature	Primitive Data Types	Non-Primitive Data Types
// Definition	Immutable (cannot be changed directly)	Mutable (modifiable after creation)
// Stored in	Stack memory (direct value storage)	Heap memory (stored by reference)
// Examples	string, number, boolean, null, undefined, symbol, bigint	object, array, function, map, set
// Comparison	Compared by value (=== checks actual data)	Compared by reference (=== checks memory address)
// Memory Allocation	Stores actual value	Stores reference (address pointing to actual value)


// display: flex; applies only to the direct children of the container.

// You can force inheritance or reset properties using:

// inherit → Forces inheritance even if not default
// initial → Resets to browser's default value
// unset → Removes user-defined styles, falling back to default behavior

// ✔ Text-related styles inherit automatically (e.g., color, font-size).
// ✖ Box-model properties do NOT inherit (e.g., margin, padding, border).
// 🔹 Use inherit if you want non-inherited properties to apply to children.

// static is the default positioning for all HTML elements.
// // Elements with position: static; follow the normal document flow.
// Top, right, bottom, and left properties have no effect on static elements.


// Aspect	Imperative	Declarative
// Definition	Focuses on how to do something (step-by-step instructions).	Focuses on what should be done, without specifying the exact steps.
// Style	Step-by-step, detailed instructions.	Describes the outcome and lets the system handle the implementation.
// Control Flow	You explicitly define each step.	The system determines the steps internally.
// Complexity	Can be more complex for large tasks.	Easier to read and maintain.
// Examples	Loops, for, while, if-else statements.	Functional programming, SQL, JSX, React.

// Imperative → You tell the system how to do something (step-by-step).
// Declarative → You describe what should happen, and the system handles it.
// Declarative is generally preferred because it’s easier to maintain and less error-prone.
  
// 1. GUESS OUTPUT::
 var x=20 
function foo(){
console.log(x)
var x=10
}
foo()

// if change x=10 to let x=10 what will happen?

// 2.
console.log('Start')

setTimeout(()=>{
console.log('timeout')
}, 0)

console.log('End')

//the order in which it will run?
// 3.
setTimeout(()=>{
console.log('timeout')
},0)

Promise.resolve().then(()=>console.log('Promise'))

console.log('End')

// 4.
async function foo() {
  return 'Hello World'
}

const result = foo();
console.log(result)

// 5.

[1,2]==[1,2]

// 6. 
const user1 = {
  name: 'john',
  age:25,
  address: {
    city:'Mumbai',
    state:'Mahrashtra'
  },
}

const user2 = user1
user2.name = 'Ramesh'
user2.address.city='Pune'
console.log(user1)
console.log(user2)

// 7.
const numbers= [0, 1 ,2 ,3 ,4 ,5 ,6] //filter out all values less than 3

// 8. Each word of letter to capital
let msg = "hello world this is javascript"; 
