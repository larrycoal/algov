import React from 'react';
import styles from "./linkedlist.module.css"
const Complexity = () => {
    return (
      <div className={styles.complexityWrapper}>
        <p>
          The complexity of operations in a linked list depends on the type of
          linked list (singly linked, doubly linked) and the specific operation
          being performed. Here's a breakdown of the complexities for various
          linked list operations:
        </p>
        <p>
          <span>Accessing an Element (Indexing):</span>
          <span>
            <b>O(n)</b>-In the worst case, you might need to traverse the entire
            list to reach the desired index.
          </span>
        </p>
        <p>
          <span>Insertion at the Beginning:</span>
          <span>
            <b>O(1)</b>- You just need to update the new node's next pointer and
            the head pointer.
          </span>
        </p>
        <p>
          <span>Insertion at the End:</span>
          <span>
            <b>O(n)</b>- You need to traverse the entire list to find the last
            node.
          </span>
        </p>
        <p>
          <span>Insertion at the Specific Index:</span>
          <span>
            <b>O(n)</b>- You might need to traverse the list to find the node
            before the target index.
          </span>
        </p>
        <p>
          <span>Deletion at the Beginning::</span>
          <span>
            <b>O(1)</b>- You just need to update the head pointer.
          </span>
        </p>
        <p>
          <span>Deletion at the End:</span>
          <span>
            <b>O(n)</b>- You need to traverse the list to find the
            second-to-last node.
          </span>
        </p>
        <p>
          <span>Deletion at a Specific Index:</span>
          <span>
            <b>O(n)</b>- You might need to traverse the list to find the node
            before the target index.
          </span>
        </p>
        <p>
          <span>Searching for an Element:</span>
          <span>
            <b>O(n)</b>- You might need to traverse the entire list to find the
            target element.
          </span>
        </p>
        <p>
          <span>Reverse the Linked List:</span>
          <span>
            <b>O(n)</b>- You need to traverse the entire list while adjusting
            the next pointers.
          </span>
        </p>
        <p>
          <span>Finding the Middle Element:</span>
          <span>
            <b>O(n)</b>- You might need to traverse the list to find the middle
            element.
          </span>
        </p>
      </div>
    );
};

export default Complexity;