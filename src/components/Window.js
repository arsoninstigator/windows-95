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
        height: 300,
      }}
      minWidth={300}
      minHeight={200}
      bounds="parent"
      dragHandleClassName="window-header"
    >
      <div className="window">
        <div className="window-header">
          <span className="window-title">{title}</span>
          <button className="window-close" onClick={onClose}>✖</button>
        </div>
        <hr className="window-divider" />
        <div className="window-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default Window;
