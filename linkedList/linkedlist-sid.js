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
      this.tail = this.head;
      this.length++;
      return node;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }
  }

  pop() {
    if (this.head === this.tail) {
      let node = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return node;
    }
    let prev = this.head;
    let current = prev.next;
    while (current.next) {
      current = current.next;
      prev = prev.next;
    }
    prev.next = null;
    this.tail = prev;
    this.length--;
  }

  shift() {
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
    node.next = this.head;
    this.head = node;
    this.length++;
    return node;
  }

  get(index) {
    if (index < 0 || index > this.length) {
      return null;
    }
    let counter = 0;
    let current = this.head;
    while (counter < index) {
      counter++;
      current = current.next;
    }
    return current;
  }

  set(index, value) {
    let node = this.get(index);
    if (node) {
      node.value = value;
      return node;
    }
  }

  insert(index, value) {
    let node = new Node(value);
    if (this.length === index - 1) {
      this.push(value);
      return;
    }
    if (index === 0) {
      this.unshift(value);
      return;
    }
    let prev = this.head;
    let current = prev.next;
    let counter = 0;
    while (counter < index - 1) {
      counter++;
      prev = prev.next;
    }
    current = prev.next;
    prev.next = node;
    node.next = current;
    this.length++;
    return node;
  }

  remove(index) {
    if (index === this.length - 1) {
      this.pop();
    } else if (index === 0) {
      this.shift();
    } else {
      let prev = this.head;
      let current = prev.next;
      let counter = 0;
      while (counter < index - 1) {
        counter++;
        prev = prev.next;
      }
      current = prev.next;
      prev.next = current.next;
      return;
    }
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next = node.next;
    let prev = null;
    while (node !== null) {
      node.next = prev;
      prev = node;
      node = next;
      if (node === null) {
        break;
      }
      next = node.next;
    }
    this.tail = next;
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

let l = new LinkedList();
l.push(1);
l.push(2);
l.push(3);
l.push(4);
l.push(5);
l.pop();
l.shift();
l.unshift(5);
l.set(3, 5);
l.insert(2, 100);
l.insert(2, 101);
l.remove(4);
l.push(300);
console.log(l.print());
l.reverse();
console.log(l.print());
