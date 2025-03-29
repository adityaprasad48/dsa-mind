// An iterator is an object that defines a method called next(), which returns an object with { value, done }


// Iterators are objects that follow the iterator protocol (having a next() method that returns { value, done }). Generators are a special type of iterator that simplify creating iterators.

const init_It = function (arr) {
  let index = 0;
  return {
    next: function () {
      if (arr.length <= index) {
        return { value: arr[index], done: true };
      } else {
        const obj = {
          value: arr[index],
          done: false,
        };
        index = index + 1;
        return obj;
      }
    },
  };
};

const it = init_It([1, 2, 3, 4]);

it.next();
it.next();
it.next();
it.next();
it.next();
it.next();
it.next();


const iterableObj = {
    data: ["X", "Y", "Z"],
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => ({
                value: this.data[index],
                done: index++ >= this.data.length
            })
        };
    }
};

for (const val of iterableObj) {
    console.log(val);
}

const details = {
  address: 'supela',
  codename: 'Adi'
}

details[Symbol('codename')] = 'Rajan';
details[Symbol('codename')] = 'DevAdi';


// for(const item in details) {
//   console.log(item, details[item])
// }

console.log('details', details)






