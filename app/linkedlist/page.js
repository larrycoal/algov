"use client";
import DashboardLayout from "@/features/DashboardLayout";
import React, { useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import styles from "./linkedlist.module.css";
import dynamic from "next/dynamic";
const Canvas = dynamic(() => import("../../features/Canvas"), {
  ssr: false,
});
const Box = dynamic(() => import("../../features/Box"), { ssr: false });

const page = () => {
  const [list, setList] = useState(null);

  const handleCreateLinkedList = () => {
    setList(true);
  };
  return (
    <DashboardLayout>
      {!list ? (
        <div className={styles.emptyStateWrapper}>
          <p>Create a linkedlist</p>
          <button onClick={handleCreateLinkedList}>Create New List</button>
        </div>
      ) : (
        <Canvas>
          <Box
            value="5"
            positionX={10}
            positionY={100}
            head={true}
            tail={true}
          />
        </Canvas>
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
    </DashboardLayout>
  );
};

export default page;
