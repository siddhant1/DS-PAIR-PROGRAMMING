class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
      return node;
    }
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return node;
  }

  pop() {
    if (!this.head) {
      return null;
    }
    if (this.head === this.tail) {
      let node = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return node;
    }
    let prevNode = this.head;
    let nextNode = this.head.next;
    while (nextNode.next) {
      nextNode = nextNode.next;
      prevNode = prevNode.next;
    }
    this.tail = prevNode;
    this.tail.next = null;
    this.length--;
    return nextNode;
  }

  shift() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return node;
    }
    this.head = node.next;
    this.length--;
    return node;
  }

  unshift(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
      this.length++;
      return node;
    }
    let currentHead = this.head;
    this.head = node;
    this.head.next = currentHead;
    this.length++;
    return node;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let i = 0;
    let current = this.head;
    while (i < index) {
      current = current.next;
      i++;
    }
    return current;
  }

  set(index, value) {
    let current = this.get(index);
    if (current) {
      current.value = value;
      return current;
    }
  }

  insert(index, value) {
    let node = new Node(value);
    // let prev = this.head;
    // let next;
    // let i = 0;
    // while (i < index - 1) {
    //   i++;
    //   prev = prev.next;
    // }
    // next = prev.next;
    // prev.next = node;
    // node.next = next;

    let prev = this.get(index - 1);
    let next = this.get(index);
    if (!next) {
      return null;
    }
    if (!prev) {
      this.unshift(value);
      return;
    }
    prev.next = node;
    node.next = next;
    this.length++;
  }

  remove(index) {
    let prev = this.get(index - 1);
    let current = this.get(index);
    if (!current) {
      return null;
    }
    if (!prev) {
      this.shift();
      return;
    }
    prev.next = current.next;
  }

  print() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values.join(" --> ");
  }
}

let linked = new LinkedList();
linked.push(44);
linked.push(42);
linked.push(48);
linked.push(49);
linked.push(50);
linked.pop();
linked.shift();
linked.unshift(6);
linked.unshift(9);
linked.unshift(19);
linked.set(5, 8);
linked.unshift(10);
linked.insert(1, 5);
linked.insert(8, 5);
linked.insert(0, 8);
linked.remove(1);
// linked.insert(17, 5);

// console.log(linked.get(5));

console.log(linked.print());
// console.log(linked);
