import React from "react";
import { Stage, Layer, Rect, Circle,Text } from "react-konva";
const Canvas = ({ children }) => {
  return (
    <Stage width="500" height="500">
      <Layer>
        <Text text="2" padding={20}fontSize={30}/>
        <Rect width={50} height={50} stroke="red" />
      </Layer>
    </Stage>
  );
};

export default Canvas;
