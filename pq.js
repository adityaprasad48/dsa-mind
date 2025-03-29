// count char of strings

const str = 'practice makes you better'

const obj = {}
for(const char of str) {
  if(obj[char]) {
    obj[char] = obj[char] + 1
  } else {
    obj[char] = 1
  }
}

console.log('obj', obj)