// LinkList

// new Node("1") creates an instance of Node, properly setting this.val and this.next.
// Without new, the function runs like a normal function, and this won’t refer to a new object.
function Node(val) {
  this.val = val;
  this.next = null;
}

let a = new Node("1");
let b = new Node("3");

a.next = b;
b.next = new Node("4");

function showAll(head) {
  let start = head;
  while (start) {
    console.log("start", start.val);
    start = start.next;
  }
}

// showAll(a);

function r_showAll(head) {
  let start = head;
  if (start == null) return;
  console.log("r_showAll ", start.val);
  r_showAll(start.next);
}

// r_showAll(a);

function addFront(head, val) {
  // if (!head) {
  //   head = node;
  //   return head;
  // }
  let node = new Node(val);
  node.next = head;
  return node;
}

function addBack(head, val) {
  let node = new Node(val);
  let start = head;
  if (!head) return node;
  while (start.next != null) {
    start = start.next;
  }
  start.next = node;
  return head;
}

function delFirst(head) {
  if (head == null) {
    return null;
  }
  head = head.next;
  return head;
}

function delLast(head) {
  if (head == null) {
    return null;
  }
  let cur = head;
  while (cur.next.next != null) {
    cur = cur.next;
  }
  cur.next = null;
  return head;
}

let head = null;
head = addFront(head, 4);
head = addFront(head, 5);
head = addFront(head, 6);
head = addFront(head, 7);

console.log("after addFront", head);

head = addBack(head, 9);
head = addBack(head, 10);

console.log("after addBack", head);

head = delFirst(head);
head = delFirst(head);

console.log("after deleting first", head);

head = delLast(head);
head = delLast(head);
console.log("after deleting last", head);

// Add Nodes
// let k = new Node(-1);
// for (let i = 0; i < 10; i++) {
//   let j = new Node(i)
//   k.next = new Node(i);
// }

// console.log("k", k);
