import React from "react";
import { Stage, Layer, Rect, Text } from "react-konva";
const Canvas = ({ children }) => {
  return (
    <Stage width="1000" height="350">
      <Layer>{children}</Layer>
    </Stage>
  );
};

export default Canvas;
