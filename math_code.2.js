// Armstrong Number
function armstrong(num) {
  let res = 0;
  let orignalNum = num;
  while (num > 0) {
    let ld = num % 10;
    res = res + Math.pow(ld, 3);
    num = parseInt(num / 10) || Math.trunc(num / 10);
  }
  console.log("armstrong ", res);
  return orignalNum == res;
}

armstrong(153);
armstrong(155);

// Celcius to Farehite F = (c * 9 / 5) + 32
function cel2Frh(cel) {
  cel = Number(cel);
  let frh = (cel * 9) / 5 + 32;
  return frh;
}

cel2Frh(30);
cel2Frh(40);

// A natural number greater than 1 that has exactly two distinct positive divisors: 1 and itself.
// 2 and 3 are prime because (2, 1), (3, 1)

function isPrime(num) {
  if (num == 1) return false; // not prime

  if (num == 2 || num == 3) return true; // prime

  if (num % 2 == 0 || num % 3 == 0) return false; // not prime

  let i = 4;
  while (i < num) {
    if (num % i == 0) {
      // if other number divides its not prime
      return false;
    }
    i++;
  }
  return true; // prime
}

isPrime(1);
isPrime(3);

// isPrime(5);

// isPrime(6);
// isPrime(7);
// isPrime(8);

// Compute Power
function computePower(num, a) {
  // a = 0 : retun 1 any number with power zero value one;
  if (a == 0) {
    return 1;
  }
  let res = 1;
  while (a !== 0 || a > 0) {
    res = res * num;
    a--;
  }
  return res;
}

computePower(2, 3);
computePower(4, 4);
computePower(5, 2);

computePower(5, 0);

// Remove trailing zeros from float values
function removeZeroAfterDecimalPoint(num) {
  console.log("num ", num.toString());
  console.log("parseFloat", parseFloat(num.toString()));
}

console.log(removeTrailingZeros(120.0)); // 120
console.log(removeTrailingZeros(450.5)); // 450.5
console.log(removeTrailingZeros(0.0001)); // 0.0001
console.log(removeTrailingZeros(1000.0)); // 1000

function removeTrailingZeros(num) {
  while (num % 10 == 0) {
    num = num / 10;
  }
  return num;
}

removeTrailingZeros(200); // 2
removeTrailingZeros(324); // 324
removeTrailingZeros(204000); // 204

324 % 10 == 0;
6 % 5;

// Russian Pleasant Multiply
function rp(a, b) {
  let sum = 0;
  while (a != 0) {
    console.log({ a, b });
    if (a % 2 != 0) {
      sum = sum + b;
    }
    b = b * 2;
    a = Math.floor(a / 2);
  }
  console.log("sum", sum);
}

rp(2, 5);
rp(8, 5);








