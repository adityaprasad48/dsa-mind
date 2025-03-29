for (var step = 0; step < 5; step++) {
  console.log("Walking east one step", step);
}

// reverse order
for (var i = 5; i > 1; i--) {
  console.log('rev', i)
}

let arr = [1, 4, 8]
let index = 0
let sum = 0
while(index < arr.length) {
  sum = sum + arr[index]
  index++;
}

console.log('sum', sum)

// running sum of arr
function runningSum(inputArr) {
  let sumArr = []
  sumArr[0] = inputArr[0]
  for(let i = 1; i < sumArr.length; i++) {
    sumArr[i] = inputArr[i] + sumArr[i - 1]
  }
  return sumArr
}

// TC: O(n), SC: O(1)

// running sum of arr
function runningSumOverwrittenInput(inputArr) {
  for(let i = 1; i < inputArr.length; i++) {
    inputArr[i] = inputArr[i - 1] + inputArr[i]
  }
  return sumArr
}
// TC: O(n), SC: O(1)


function maxValfromArr(list) {
  let max_val = 0
  for(let index = 0; index < list.length; index++) {
      let item = list[index];
      if(item > max_val) {
          max_val = item
      }
  }
  return max_val
}

console.log(maxValfromArr([2, 8, 29, 99, 44]))


const {randomName} = require('random_math')

const name = randomName()
console.log('randomName:::: ', name)