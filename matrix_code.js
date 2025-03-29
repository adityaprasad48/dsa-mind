// Matrix:-

console.log("matrix");

// print in snake pattern

function snakePrint(mat) {
  for (let row = 0; row < mat.length; row++) {
    // console.log("row", mat[row]);
    const sub_arr = mat[row];
    if (row % 2 == 0) {
      let str = "";
      for (let col = 0; col < sub_arr.length; col++) {
        // console.log("col even", sub_arr[col]);
        str = str + sub_arr[col];
        str += ",";
      }
      console.log("arr", str);
    } else {
      let str = "";
      for (let col = sub_arr.length - 1; col >= 0; col--) {
        // console.log("col odd", sub_arr[col]);
        str += sub_arr[col];
        str += ",";
      }
      console.log("arr", str);
    }
  }
}

const mat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [9, 10, 15],
];

console.log(mat);

snakePrint(mat);

const b_mat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function boundaryPrint(b_mat) {
  console.log("boundaryMatrix");
  let top = 0;
  if (b_mat.length == 0) return [];
  if (b_mat.length == 1) return b_mat;
  for (let row = 0; row < b_mat.length; row++) {
    if (row == 0) {
      for (let col = 0; col < b_mat[row].length; col++) {
        item = b_mat[row][col];
        console.log("item", item);
      }
    }

    if (row != 0 && row != b_mat.length - 1) {
      for (let col = 0; col < b_mat[row].length; col++) {
        if (col == b_mat[row].length - 1) {
          top += 1;
          console.log("item", b_mat[row][col]);
        }
      }
    }

    if (row == b_mat.length - 1) {
      for (let col = b_mat.length - 1; col >= 0; col--) {
        item = b_mat[row][col];
        console.log("item", item);
      }
    }
  }

  for (let row = top; row > 0; row--) {
    for (let col = 0; col < b_mat[row].length; col++) {
      if (col == 0) {
        console.log("item", b_mat[row][col]);
      }
    }
  }
}

// boundaryPrint(b_mat);
function boundaryPrintNew(b_mat) {
  let R = b_mat.length;
  let firstLength = b_mat[0].length;
  let C = b_mat.every((item) => item.length === firstLength);

  if (R == 1) {
    return b_mat;
  }
  if (C && firstLength == 1) {
    return b_mat;
  }
  console.log("left -> right");
  for (let c = 0; c < R; c++) {
    console.log(b_mat[0][c]);
  }

  console.log("top -> bottom");
  for (let r = 1; r < R - 1; r++) {
    let lastColIndex = R - 1;
    console.log(b_mat[r][lastColIndex]);
  }

  console.log("right -> left");
  for (let c = R - 1; c >= 0; c--) {
    let lastRowIndex = R - 1;
    console.log(b_mat[lastRowIndex][c]);
  }

  console.log("bottom -> right");
  for (let r = R - 1 - 1; r >= 1; r--) {
    console.log(b_mat[r][0]);
  }
}

console.log(b_mat);
boundaryPrintNew(b_mat);

let arr = [2, 4, 6, 8];
console.log("arr", arr);

function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;
}



swap(arr[0], arr[3]);

console.log("arr", arr);

// Swap using Destructing

let a = "hello", b = "world";
console.log({a, b})

[a, b] = [b, a];

console.log({a, b})



