import React from "react";
import { Stage, Layer, Rect, Text } from "react-konva";
const Canvas = ({ children }) => {
  return (
    <Stage width="400" height="350">
      <Layer>{children}</Layer>
    </Stage>
  );
};

export default Canvas;
