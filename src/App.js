import React, { useState } from "react";
import Desktop from "./components/Desktop";
import BottomPanel from "./components/BottomPanel";
import Window from "./components/Window";
import SpotifyWidget from "./components/SpotifyWidget";
import "./styles.css";

function App() {
  const [openWindows, setOpenWindows] = useState([]);

  const openWindow = (title, content) => {
    if (!openWindows.some((win) => win.title === title)) {
      setOpenWindows([...openWindows, { title, content }]);
    }
  };

  const closeWindow = (title) => {
    setOpenWindows(openWindows.filter((win) => win.title !== title));
  };

  return (
    <div className="app">
      <Desktop openWindow={openWindow} />
      <BottomPanel />
      {openWindows.map((win) => (
        <Window
          key={win.title}
          title={win.title}
          content={win.content}
          onClose={() => closeWindow(win.title)}
        />
      ))}
      <SpotifyWidget />
    </div>
  );
}

export default App;
