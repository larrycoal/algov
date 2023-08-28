import React from "react";
import styles from "./linkedlist.module.css";

const Codesnippet = () => {
  return (
    <div className={styles.descriptionWrapper}>
      <pre>
        <code>
          {`
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
    return this
  }
  push(val){
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
}`}
        </code>
      </pre>
    </div>
  );
};

export default Codesnippet;
