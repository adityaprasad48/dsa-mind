// load efficently external script

// aynch

// defer

// what is html parsing

// normal: parsing html encouters script tag then parsing of html gets paused fetch script get into browser and start excuting after continues parsing of html

// async: html parsing any of script with async fetch from intenet asyncronously after that it pauses html parsing and start excuting script after completion html parsing contines.

// defer: html parsing script encounter it fetch script and excutes after html parsing

// does not garenties excuted in particur order some code is dependent to other code then do not use async

// independent: use defer, external script maintain order

// Webstorage api
// Localstorage, Session Storage

// session storage data is cleared when the tab (or window) is closed.

// 5md session storage capacity
// cookies: 4kb storage capcity

// Form data retention
// Shopping carts
// Session-specific flags and preferences
// Navigation and UI state in SPAs
// Preventing duplicate actions

// Same Tab: If you navigate from https://example.com/cart to https://example.com/products in the same browser tab, they share the same session storage because they have the same origin.
// Different Tabs: If you open these URLs in different tabs, each tab will have its own separate session storage.

// On https://example.com/products
function displayCartCount() {
  const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  console.log(`Items in cart: ${cart.length}`);
}
window.addEventListener("load", displayCartCount);

// Debouncing is very similar to throttling. The key difference is that throttling enforces limits on continuous operations,
// while debouncing waits for invocations to stop for a specific time to consolidate many noisy invocations into one single invocation.

// The first call to search is known as the leading edge.
// For every next call to search, if it is within 10 milliseconds from the previous call, it is in the same "batch" as the previous call.
// After 10 milliseconds have elapsed from the last call to search, if no other calls have happened, we have reached the trailing edge.

// Throttling:-
// Throttling originally meant slowing down the rate of fluid flow using an obstruction. In the context of programming, it refers to slowing down a process such that an operation can only be performed at a certain rate.

// Throttling is very similar to debouncing. The key difference is that when invocations happen continuously, throttling ensures that the operation is still performed at a certain maximum rate, while debouncing waits indefinitely until the invocations stop for a certain amount of time.

// Jank refers to sluggishness in a user interface, usually caused by executing long tasks on the main thread, blocking rendering, or expending too much processor power on background processes.

// HTML parser
const parser = new DOMParser();
const htmlString = `<div><p>Hello, Parser!</p></div>`;
const doc = parser.parseFromString(htmlString, "text/html");

console.log(doc.querySelector("p").textContent); // Output: "Hello, Parser!"
