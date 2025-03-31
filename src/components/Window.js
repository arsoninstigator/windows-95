import React from "react";
import { Rnd } from "react-rnd";
import "../styles.css";

const Window = ({ title, children, onClose }) => {
  return (
    <Rnd
  default={{
    x: 100, 
    y: 100, 
    width: 400, 
    height: 300
  }}
  bounds="parent" 
  enableResizing={{
    top: false,
    right: true,
    bottom: true,
    left: false
  }}
  dragHandleClassName="window-header"
>
  <div className="window">
    <div className="window-header">
      <span>{title}</span>
      <button onClick={onClose} className="close-btn">X</button>
    </div>
    <div className="window-content">
      {children}
    </div>
  </div>
</Rnd>
  );
};

export default Window;
