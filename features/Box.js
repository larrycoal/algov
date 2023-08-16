import React from "react";
import { Rect, Text,Line } from "react-konva";

const Box = ({ value,positionX,positionY,tail = false,head = false }) => {
  return (
    <>
      {head && (
        <Text
          text="HEAD:"
          padding={10}
          fontSize={20}
          x={positionX - 10}
          y={positionY - 35}
        />
      )}
      <Text
        text={value}
        padding={10}
        fontSize={25}
        x={positionX}
        y={positionY + 5}
      />
      <Text
        text="value:"
        padding={10}
        fontSize={10}
        x={positionX}
        y={positionY - 5}
      />
      <Rect width={50} height={50} stroke="black" x={positionX} y={positionY} />
      <Text
        text="Next"
        padding={10}
        fontSize={15}
        x={positionX + 70}
        y={positionY - 10}
      />
      <Line
        x={positionX + 50}
        y={positionY + 20}
        stroke="black"
        points={[0, 0, 90, 0, 0, 0]}
        //tension={0.5}
      />
      {tail && (
        <>
        <Text
          text="Null"
          padding={10}
          fontSize={30}
          x={positionX + 130}
          y={positionY}
        />
         <Text
          text="TAIL:"
          padding={10}
          fontSize={20}
          x={positionX - 10}
          y={positionY + 45}
        />
        </>
      )}
    </>
  );
};

export default Box;
