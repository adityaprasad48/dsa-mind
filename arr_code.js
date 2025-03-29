// 1. Largest Element in array
function largest(arr) {
  let largestItem = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentItem = arr[i];
    if (currentItem > largestItem) {
      largestItem = currentItem;
    }
  }
  return largestItem;
}

largest([2, 8, 3, 9, 16, 1]);

// Write a Naive solution for this as well

// second largest element
function secondLargest(arr) {
  let fl = 0,
    sl = 0;
  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i];
    if (cur > fl) {
      fl = cur;
    } else {
      sl = fl;
    }
  }
  if (fl == sl) {
    return { fl, sl: 0 };
  }
  return { fl, sl };
}

secondLargest([10, 5, 8, 20]);
secondLargest([20, 20, 20]);

// 2. Reverse Array Naive Solution
function reverseItems(arr) {
  let i = arr.length - 1;
  let rev = [];
  while (i >= 0) {
    let cur = arr[i--];
    rev.push(cur);
  }
  return rev;
}

reverseItems([2, 4, 8]);

// two pointer approach of swaping
// Time Complexity : Theta(n)
function swapReverse(arr) {
  let low = 0,
    high = arr.length - 1,
    item;

  while (low < high) {
    item = arr[high];
    arr[high] = arr[low];
    arr[low] = item;
    low++;
    high--;
  }

  return arr;
}

swapReverse([2, 4, 3]);
