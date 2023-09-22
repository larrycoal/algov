class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(val) {
    this.head = new Node(val);
    this.tail = this.head;
    this.length = 1;
    return this;
  }
  push(val) {
    if (!this.head) {
      this.head = new Node(val);
      this.tail = this.head;
    } else {
      let newNode = new Node(val);
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  unshift(val) {
    if (!this.head) {
      this.head = new Node(val);
      this.tail = this.head;
    } else {
      let newNode = new Node(val);
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let curr = this.tail;
    let prev = this.tail.next;
    let next = prev.next;
    while (next) {
      prev.next = curr;
      curr = prev;
      prev = next;
      next = next.next;
    }
    this.tail.next = null;
    console.log(this);
  }
}

export default LinkedList;
