import React from 'react';
import styles from "./linkedlist.module.css"
const Description = () => {
    return (
      <div className={styles.descriptionWrapper}>
        <section>
          <h2>Summary:</h2>
          <p>
            A linked list is a fundamental data structure used in computer
            science to organize and store a collection of elements, also known
            as nodes. Unlike arrays, which store elements in contiguous memory
            locations, a linked list consists of individual nodes that are
            connected together through pointers or references.
          </p>
        </section>
        <section>
          <h2>Key characteristics</h2>
          <ul>
            <li>
              <span>Node Structure:</span>
              <span>
                Each node in a linked list contains two main components:<br/>
                <b>Data:</b>This is the actual value or information that the
                node holds.<br/>
                <b>Pointer/Reference:</b>This points to the next node in the
                sequence.
              </span>
            </li>
            <li>
              <span>Head:</span>
              <span>
                The first node in a linked list is called the head. It serves as
                the starting point for traversing the list.
              </span>
            </li>
            <li>
              <span>Tail:</span>
              <span>
                The last node in a linked list is called the tail. Its
                pointer/reference usually points to null, indicating the end of
                the list.
              </span>
            </li>
            <li>
              <span>Singly Linked List:</span>
              <span>
                In a singly linked list; which this is, each node points only to
                the next node in the sequence. The tail node's pointer points to
                null.
              </span>
            </li>
            <li>
              <span>Doubly Linked List:</span>
              <span>
                In a doubly linked list, each node contains pointers to both the
                next and the previous nodes. This allows for more efficient
                traversal in both directions.
              </span>
            </li>
          </ul>
        </section>
      </div>
    );
};

export default Description;