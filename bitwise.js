// binary

function binary(d) {
  let o = {
    original: d,
    d: d.toString(2),
    MultiplyByPowof2: d << 3,
    divideByPowof2: d >> 1,
  };
  console.log(o);
  return o;
}

// binary(4);
// binary(10);
// binary(3);
// binary(5);
// binary(7);

13 >> 1;

// even or odd
function isEven(n) {
  let even = (n & 1) == 0;
  console.log({ n, even });
  return even;
}

isEven(3);
isEven(4);
isEven(5);
isEven(6);

function countSetBit(bin) {
  let count = 0;
  console.log("bin", bin);
  while (bin != 0) {
    ld = bin % 10;
    console.log("ld", ld);
    if (ld == 1) {
      count++;
    }
    bin = Math.floor(bin / 10);
  }
  console.log("count", count);
}

let n = binary(10);
countSetBit(n.d);

let a = 1011;

console.log(Math.floor(a));

function isPowerOf2(n) {
  if (n == 0) return true;
  while (n != 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = Math.floor(n / 2);
  }
  return true;
}

let bool;
bool = isPowerOf2(4);
console.log({ bool });

bool = isPowerOf2(8);
console.log({ bool });

bool = isPowerOf2(9);
console.log({ bool });


// power of 2 by right most bit unset



