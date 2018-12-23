class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.length = 1;
  }

  unshift(value) {
    if (this.length === 0) {
      let node = new Node(value);
      this.head = node;
      this.length++;
      return node;
    } else {
      let node = new Node(value);
      node.next = this.head;
      this.head = node;
      this.length++;
      return node;
    }
  }

  pop() {
    let head = this.head;
    if (this.length === 1) {
      this.head = null;
      this.length--;
      return head;
    }

    let prev = this.head;
    let current = prev.next;
    while (current.next) {
      prev = prev.next;
      current = prev.next;
    }

    prev.next = null;
    this.length--;
    return current;
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

  insert(index, value) {
    if (this.length === 0) {
      this.unshift(value);
    }

    if (this.length - 1 === index) {
      this.push(value);
    }

    let prev = this.head;
    let current = prev.next;
    let counter = 0;
    while (counter < index - 1) {
      prev = prev.next;
      counter++;
    }
    current = prev.next;
    let node = new Node(value);
    node.next = current;
    prev.next = node;
    this.length++;
    return node;
  }

  push(value) {
    let node = new Node(value);
    if (this.length === 0) {
      this.head = node;
      this.length++;
      return node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.length++;
      return node;
    }
  }
}
let l = new LinkedList(1);
l.unshift(2);
l.push(3);
l.push(5);
l.push(7);
l.push(8);
l.push(9);
l.push(10);
l.pop();
l.pop();
l.insert(2, 1000);
console.log(l.print());
