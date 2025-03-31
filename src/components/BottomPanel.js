import React from "react";
import "../styles.css";
import startIcon from "./assets/icons/start-icon.png";

function BottomPanel() {
  return (
    <div className="bottom-panel">
      <img src={startIcon} alt="Start" className="start-button" />
    </div>
  );
}

export default BottomPanel;
