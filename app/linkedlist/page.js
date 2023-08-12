"use client";
import DashboardLayout from "@/features/DashboardLayout";
import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import dynamic from "next/dynamic";
const Canvas = dynamic(()=>import("../../features/Canvas"),{
    ssr:false
})

const page = () => {
  return (
    <DashboardLayout>
      <Canvas/>

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
