import React from "react";

function DesktopIcon({ name, onClick }) {
  return (
    <div className="desktop-icon" onClick={onClick}>
      <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/1be2dc8fa21a2d194749295562381aaec4d3aab6_my-computer.png" alt="Document Icon" />
      <p>{name}</p>
    </div>
  );
}

export default DesktopIcon;
