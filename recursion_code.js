// Recursion

function toChars(str) {
  console.log("str", str);
  function printEachChar(str, index, str_new) {
    if (index == str.length) return str_new;
    console.log("letter", str[index]);
    str_new = str_new + str[str.length - 1 - index];
    return printEachChar(str, index + 1, str_new);
  }
  let a = printEachChar(str, 0, "");
  console.log("a", a);
}

toChars("March");

// console.log("print", toChars("Aditya"));

console.log("N2One....");
function N2One(n) {
  if (n == 0) return;
  console.log("n", n);
  N2One(n - 1);
}

N2One(4);

console.log("One2N_new....");
function One2N_new(n) {
  if (n == 0) return 0;
  One2N_new(n - 1);
  console.log("n", n);
}

One2N_new(6);
