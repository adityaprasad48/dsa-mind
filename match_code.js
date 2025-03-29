// Count of digit : theta(num of digit)
function countNumOfDigit(num) {
  let count = 0;
  while (num !== 0 || num > 0) {
    num = Math.trunc(num / 10);
    count++;
  }
  console.log("count", count);
  return count;
}

countNumOfDigit(82533);

function pallidroneNumber(originalNum) {
  let rev = 0;
  let num = originalNum;
  while (num > 0) {
    let lastD = num % 10;
    rev = rev * 10 + lastD;
    num = Math.trunc(num / 10);
  }
  const isEqual = rev == originalNum;
  console.log("rev", rev, originalNum, isEqual);
  return isEqual;
}

pallidroneNumber(823);
pallidroneNumber(343);

// factorial of number
// Example Factorial of number 5 is 5 * 4 * 3 * 2 * 1

function factorial(num) {
  if (num == 0) return 0;
  if (num == 1) return 1;
  let res = 1;
  for (let i = 0; i < num; i++) {
    res = res * (num - i);
  }
  console.log("factorial of num ", num, "is ", res);
  return res;
}

factorial(4);
factorial(5);
factorial(6);

// This function calculates the factorial using recursion, which means it calls itself repeatedly until it reaches a base case.
function fact_r(num) {
  if (num == 0 || num == 1) return 1;
  num = num * fact_r(num - 1);
  console.log("fact_r ", num);
  return num;
}

fact_r(5);

function gcd(num1, num2) {
  let i = 2; // 16 % 0 get NaN and also 16 % 1 get 0
  while (true) {
    if (num1 % i == 0 && num2 % i == 0) break;
    i++;
  }
  console.log("gcd", i);
  return i;
}

function lcm(num1, num2) {
  let res = 0;
  res = (num1 * num2) / gcd(num1, num2);
  console.log("lcm res ", res);
  return res;
}

gcd(4, 6);
lcm(4, 6);

console.log("modulo by zero", 16 % 1);


// A leap year is a year that has 366 days instead of 365 (extra day: February 29).Not every 4th year is a leap year because of additional conditions.

// year % 100 == 0 and year % 400 == 0
// year % 4 == 0 and year % 100 != 0

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}




// let num = 2500;
// console.log(num.toString().replace(/0+$/, ''));

// A trailing zero is a zero at the end of a number after a nonzero digit.
// 230, 2500

// A leading zero is a zero (0) that appears at the beginning of a number before any nonzero digit.
// 03, 007

// In JavaScript, numbers automatically remove leading zeros when treated as numbers.
let numStr = "007";
let num = Number(numStr);
console.log(num); // Output: 7

// for octal
let octal = 0o75;
console.log(octal); // Output: 61

// Nullish Coalescing Operator
// It returns the right-hand value only if the left-hand value is null or undefined. Otherwise, it returns the left-hand value.
var city = 0 || "Bhilai";
var newCity = "" ?? "Raipur";

city;
newCity;

// !! operator kind of type conversion to boolean
null;
!null;
!!null;
