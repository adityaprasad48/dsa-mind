let totalSeconds = 7384;
totalSeconds = 900000;

// let h = totalSeconds / (60 * 60);
// let m = totalSeconds % (60 * 60);
// let sec = 7384 % 60;

// const hours = Math.floor(totalSeconds / 3600);
// const minutes = Math.floor((totalSeconds % 3600) / 60);
// const seconds = totalSeconds % 60;

// console.log("h", h);
// console.log("m", m);
// console.log("sec", sec);

const days = Math.floor(totalSeconds / 86400);
const hours = Math.floor((totalSeconds % 86400) / 3600);
const minutes = Math.floor((totalSeconds % 3600) / 60);
const seconds = totalSeconds % 60;

console.log({ days, hours, minutes, seconds });

// 2h 4m 3s
// make this string of length 2 by adding leading zero if already that length do nothing
const format = (n) => String(n).padStart(2, "0");

format(34);

let padStr = "33".padStart(4, "*");
console.log({ padStr });

for (let i = 0; i < 20; i++) {
  console.log(String(i).padStart(i, "#"));
}

for (let i = 0; i < 20; i++) {
  console.log(String(20 - i).padEnd(20 - i, "#"));
}

let totalSec = 90000;

console.log("a", 1500 * 60, 24 * 60 * 60);

let minInSec = 60;
let hourInSec = 60 * 60;
let daysInSec = 24 * 60 * 60;

// let totalDays = total / (60 * 60);
