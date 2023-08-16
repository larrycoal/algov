import React from "react";
import { Stage, Layer, Rect, Text } from "react-konva";
const Canvas = ({ children }) => {
  return (
    <Stage width="500" height="500">
      <Layer>{children}</Layer>
    </Stage>
  );
};

export default Canvas;
