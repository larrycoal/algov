"use client";
import DashboardLayout from "@/features/DashboardLayout";
import React, { useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
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

  const handleCreateLinkedList = (val) => {
    setOpenModal(!openModal);
    const newLinkedList = new LinkedList(val);
    console.log(newLinkedList);
    setList(newLinkedList);
  };
  const handleShowCanvas = () => {
    if (!list) {
      return;
    }
    if (list && list.length === 1) {
      return (
        <Canvas>
          <Box
            value={list.head.value}
            positionX={10}
            positionY={100}
            head={true}
            tail={true}
          />
        </Canvas>
      );
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
        handleShowCanvas()
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
