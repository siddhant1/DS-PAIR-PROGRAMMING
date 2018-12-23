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

  setHead(head) {
    this.head = head;
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
let l2 = new LinkedList();
l.push(1);
l.push(2);
l.push(3);
l.push(4);
l.push(5);
l2.push(2);
l2.push(3);
l2.push(5);
l2.push(6);
l2.push(2);
function Union(head, head1) {
  let hash = {};
  let current = head;
  while (current) {
    hash[current.value] = hash[current.value] + 1 || 1;
    current = current.next;
  }
  console.log(hash);
  let current1 = head1;
  while (current1) {
    hash[current1.value] = hash[current1.value] + 1 || 1;
    current1 = current1.next;
  }
  console.log(hash);
  let n = new LinkedList();
  for (let key in hash) {
    n.push(key);
  }
  console.log(n.print());
  return n;
}

// Union(l.head, l2.head);

function removeDuplicate(head) {
  let hashtable = {};

  let current = head;
  while (current) {
    if (hashtable.hasOwnProperty(current.value)) {
      hashtable[current.value] += 1;
    } else {
      hashtable[current.value] = 1;
    }
    current = current.next;
  }

  console.log(hashtable);
}
function betterRemoveDuplcate(head) {
  let i = head;
  let c = i;

  while (c) {
    if (i.value === c.value) {
      c = c.next;
    } else {
      i.next = c;
      i = c;
    }
  }
  i.next = c;
  i = c;
}

function remove_duplicates(head) {
  let current = head;
  while (current.next) {
    if (current.value === current.next.value) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
}

function rotation(head, k) {
  let prev = head;
  let current = prev.next;
  while (current.next) {
    prev = prev.next;
    current = current.next;
  }
  prev.next = null;
  current.next = head;
  l.setHead(current);
}
// betterRemoveDuplcate(l.head);
rotation(l.head, 2, l);
console.log(l);
console.log(l.print());
