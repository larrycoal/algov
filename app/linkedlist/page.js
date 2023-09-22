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
import Description from "./description";
import Usecase from "./Usecase";
import Codesnippet from "./Codesnippet";
import Complexity from "./Complexity";
const Canvas = dynamic(() => import("../../features/Canvas"), {
  ssr: false,
});
const Box = dynamic(() => import("../../features/Box"), { ssr: false });

const page = () => {
  const [list, setList] = useState(null);

  const [openModal, setOpenModal] = useState(false);
  const [action, setAction] = useState("");
  let position = 10;
  const handleCreateLinkedList = (val) => {
    setOpenModal(false);
    let temp = null;
    switch (action) {
      case "CREATE":
        const newLinkedList = new LinkedList(val);
        setList(newLinkedList);
        break;
      case "PUSH":
        temp = list.push(val);
        setList(temp);
        break;
      case "UNSHIFT":
        temp = list.unshift(val);
        setList(temp);
        break;
      case "REVERSE":
        temp = list.reverse();
      // setList(temp)
      default:
        break;
    }
  };

  const handleOpenModal = (actionType = "CREATE") => {
    setAction(actionType);
    if (actionType === "REVERSE") {
      handleCreateLinkedList();
      return;
    } else {
      setOpenModal(!openModal);
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
          <button onClick={() => handleOpenModal("CREATE")}>
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
              onClick={() => handleOpenModal("PUSH")}
            >
              Push
            </Button>
            <Button
              colorScheme="teal"
              size="md"
              onClick={() => handleOpenModal("UNSHIFT")}
            >
              Unshift
            </Button>
            <Button
              colorScheme="teal"
              size="md"
              onClick={() => handleOpenModal("REVERSE")}
            >
              Reverse
            </Button>
          </div>
        </div>
      )}

      <Tabs className={styles.tabWrapper} isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Description</Tab>
          <Tab>Use-Case</Tab>
          <Tab>Code Snippet</Tab>
          <Tab>Complexity</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Description />
          </TabPanel>
          <TabPanel>
            <Usecase />
          </TabPanel>
          <TabPanel>
            <Codesnippet />
          </TabPanel>
          <TabPanel>
            <Complexity />
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
