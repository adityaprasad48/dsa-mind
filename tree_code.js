// Tree:- Binary Tree
// if root is null it means tree is empty

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

let root = new Node(40);

root.left = new Node(30);
root.right = new Node(20);
root.left.left = new Node(15);

console.log("root", root);
