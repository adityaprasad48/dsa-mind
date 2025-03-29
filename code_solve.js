// let index = "Aditya".indexOf("b");

// console.log('index', index)

// function getIndex(str, letter) {
//   let index = -1
//   for(let i = 0; i < str.length; i++) {
//     const strLtr = str[i]
//     if(strLtr == letter) {
//       index = i
//     }
//   }
//   console.log('getIndex log', index)
// }

// getIndex('Aditya', 'C')

// let app_name = "abcd";

// let new_name = app_name.substring(0, 3) + app_name.substring(3 + 1);

// console.log({ new_name });

// nums = [2, 7, 11, 15];
// target = 9;

// let hashmap = {};
// for (let i = 0; i <= nums.length - 1; i++) {
//   hashmap[nums[i]] = i;
// }
// console.log("in check", 55 in hashmap);
// console.log("hashmap", hashmap);
// for (let i = 0; i <= nums.length - 1; i++) {
//   complement = target - nums[i];
//   c1 = 7;
//   c2 = 2;
//   c3 = -2;
//   c4 = -6;
//   console.log("com", complement);
//   if (complement in hashmap && hashmap[complement] != i) {
//     return [i, hashmap[complement]];
//   }
// }
// console.log(hashmap);

let subStrArr = [];

console.log("index", subStrArr.push('Adi'));


function elementWithGreaterLen(arr) {
  let curLen = 0;
  let curIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    if (word.length > curLen) {
      curLen = word.length;
      curIndex = i;
    }
  }
  return curIndex;
  console.log({ curLen, curIndex });
}

elementWithGreaterLen(['a', 'SomnathBaba', 'abcde', 'Aditya'])