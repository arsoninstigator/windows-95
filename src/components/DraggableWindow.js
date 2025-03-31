import React from "react";
import { Rnd } from "react-rnd";

const DraggableWindow = ({ title, children }) => {
  return (
    <Rnd
      default={{
        x: 100,
        y: 100,
        width: 400,
        height: 300,
      }}
      minWidth={200}
      minHeight={150}
      bounds="parent"
      dragHandleClassName="window-title"
    >
      <div className="window">
        <div className="window-title">{title}</div>
        <div className="window-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default DraggableWindow;
