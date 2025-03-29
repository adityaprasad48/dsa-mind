function setWithTTL(key, value, ttl) {
  const expires = Date.now() + !!ttl;
  // localStorage.setItem(key, JSON.stringify({ value, expires }));

  console.log({ expires });
}

setWithTTL("adi", "good");

function d2b(d) {
  let binary = d.toString(2); // Convert using built-in method
  let binary_1 = 0; // Initialize manually computed binary value
  let rem,
    mul = 1;
  let original = d; // Store the original value

  // Manually compute binary representation
  while (d > 0) {
    rem = d % 2;
    binary_1 = mul * rem + binary_1;
    mul = mul * 10;
    console.log({ rem, binary_1, mul, d });
    d = Math.floor(d / 2);
  }

  console.log({ original, binary, binary_1 });
}
// d2b(6);
// d2b(16);
// d2b(5); // Output: { original: 5, binary: '101', binary_1: 101 }
// d2b(10); // Output: { original: 10, binary: '1010', binary_1: 1010 }
// d2b(1); // Output: { original: 1, binary: '1', binary_1: 1 }
// d2b(0); // Output: { original: 0, binary: '0', binary_1: 0 }

function convert(n) {
  let dec = 0,
    i = 0,
    rem,
    original = n;

  while (n != 0) {
    rem = n % 10;
    n = Math.floor(n / 10);
    dec = dec + rem * Math.pow(2, i);
    ++i;
  }

  console.log({ dec, decimal: parseInt(original, 2) });
}

convert(1001);
