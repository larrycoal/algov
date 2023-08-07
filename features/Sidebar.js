import Link from 'next/link';
import React from 'react';
import styles from "./sidebar.module.css"
import { SiThealgorithms, SiInstructure } from "react-icons/si";
import { AiOutlineHome } from "react-icons/ai";
import {TbBinaryTree2} from "react-icons/Tb"
const Sidebar = () => {
    return (
      <div className={styles.sidebarWrapper}>
        <div className={styles.mainlogo}>
          <SiThealgorithms />
          <span>LGO</span>
          <span>V</span>
        </div>
        <ul className={styles.navigation}>
          <li>
            <Link href="/">
              <AiOutlineHome /> <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/bst">
              <TbBinaryTree2 />
              <span>BST</span>
            </Link>
          </li>
          <li>
            <Link href="/linkedlist">
              <SiInstructure />
              <span>Linked List</span>
            </Link>
          </li>
          <li>
            <Link href="/dll">
              <SiInstructure />
              <span>DLL</span>
            </Link>
          </li>
        </ul>
      </div>
    );
};

export default Sidebar;