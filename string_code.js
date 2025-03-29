// String:-

function isPallindrome(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  console.log("str", str);
  console.log("rev", rev);
  return rev == str;
} // Theta(n): time, Theta()

isPallindrome("Adi");
isPallindrome("ABBA");

function isPal(str) {
  let left = 0,
    right = str.length - 1;
  let pal = true;
  while (left < right) {
    console.log("inside loop");
    if (str[left] != str[right]) {
      pal = false;
      break;
    }
    console.log(left, right);
    left++;
    right--;
  }
  return pal;
} // Big(n) means best case:- (1) and worst case (n)

// isPal("Robot");
// isPal("Robocraze");
// isPal("ABBA");

console.log("isSubSeq........");

function isSubSeq(str1, str2) {
  if (str2.length == 0) return true;
  if (str2.length == 1) return str1.includes(str2);
  let seq = true,
    i = 0,
    j = 0;
  while (i < str1.length) {
    if (str1[i] == str2[j]) {
      i++;
      j++;
    } else {
      i++;
    }
  }
  if (j == str2.length) {
    return true;
  }
  return false;
} // O(n + m) Space: O(1)
let output;
// output = isSubSeq("ABC", "");
// console.log("output", output);

// output = isSubSeq("ABC", "A");
// console.log("output", output);

output = isSubSeq("ABC", "BC");
console.log("output", output);

output = isSubSeq("ABC", "AB");
console.log("output", output);

output = isSubSeq("ABC", "CB");
console.log("output", output);
