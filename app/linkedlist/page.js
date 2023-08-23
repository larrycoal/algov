"use client";
import DashboardLayout from "@/features/DashboardLayout";
import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
} from "@chakra-ui/react";
import styles from "./linkedlist.module.css";
import LinkedList from "../../features/algo/linkedlist";
import dynamic from "next/dynamic";
import Modal from "@/features/utils/Modal";
const Canvas = dynamic(() => import("../../features/Canvas"), {
  ssr: false,
});
const Box = dynamic(() => import("../../features/Box"), { ssr: false });

const page = () => {
  const [list, setList] = useState(null);

  const [openModal, setOpenModal] = useState(false);
  let position = 10;
  useEffect(() => {}, []);
  const handleCreateLinkedList = (val) => {
    setOpenModal(!openModal);
    if (!list) {
      const newLinkedList = new LinkedList(val);
      setList(newLinkedList);
    } else {
      const temp = list.push(val);
      setList(temp);
    }
  };
  const handleShowCanvas = () => {
    if (!list) {
      return;
    }
    if (list && list.length === 1) {
      return (
        <Box
          value={list.head.value}
          positionX={10}
          positionY={100}
          head={true}
          tail={true}
        />
      );
    } else {
      let tempLinkedList = [];
      let temp = list.head;
      while (temp) {
        tempLinkedList.push(temp.value);
        temp = temp.next;
      }
      return tempLinkedList.map((val, idx) => {
        if (idx !== 0) {
          position = position + 140;
        }
        return (
          <Box
            value={val}
            positionX={position}
            positionY={100}
            head={idx === 0}
            tail={idx === list.length - 1}
          />
        );
      });
    }
  };
  return (
    <DashboardLayout>
      {!list ? (
        <div className={styles.emptyStateWrapper}>
          <p>Create a linkedlist</p>
          <button onClick={() => setOpenModal(!openModal)}>
            Create New List
          </button>
        </div>
      ) : (
        <div className={styles.canvasWrapper}>
          <div className={styles.left}>
            <Canvas>{handleShowCanvas()}</Canvas>
          </div>
          <div className={styles.right}>
            <Button
              colorScheme="teal"
              size="md"
              onClick={() => setOpenModal(!openModal)}
            >
              Push
            </Button>
          </div>
        </div>
      )}

      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Description</Tab>
          <Tab>Use-Cases</Tab>
          <Tab>Code Snippet</Tab>
          <Tab>Complexity</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>Description</p>
          </TabPanel>
          <TabPanel>
            <p>Use cases</p>
          </TabPanel>
          <TabPanel>
            <p>Code snippet</p>
          </TabPanel>
          <TabPanel>
            <p>Complexity</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(!openModal)}
        onSubmit={handleCreateLinkedList}
      />
    </DashboardLayout>
  );
};

export default page;
