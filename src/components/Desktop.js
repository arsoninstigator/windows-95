import React, { useState } from "react";
import Window from "./Window";
import "../styles.css";

const Desktop = () => {
  const [openWindows, setOpenWindows] = useState([]);

  const openWindow = (title, content) => {
    setOpenWindows([...openWindows, { title, content }]);
  };

  const closeWindow = (index) => {
    const newWindows = [...openWindows];
    newWindows.splice(index, 1);
    setOpenWindows(newWindows);
  };

  return (
    <div className="desktop">
      {/* Icons */}
      <div className="desktop-icon" onClick={() => openWindow("about me", <p>i'm anne (she/her), an eighteen-year-old high school senior based in new delhi, india and have been a community member of hack club since 2024. <br /><br />i'll be attending virginia tech in the fall and will be pursuing a double degree in criminal justice and computer science.</p>)}>
        <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/8e72047bec9ed71107adc4b922b99c517e67180b_my-computer.png" alt="My Computer" />
        <span>about</span>
      </div>

      <div className="desktop-icon" onClick={() => openWindow("projects", 
        <p>
          ─ <b>sculptura @ hack club #infill</b> <br />
            building an entire open-source budget 3d printer from scratch :D<br /><br />
          ─ <b>concept cauldron</b> <br />
            non-devs throw in their wildest project ideas, & devs scoop them up to make magic happen.<br /><br />
          ─ <b>cryptpad @ #hackpad</b> <br />
            built a fully functional customized macropad with a custom pcb, case and handwritten firmware.
      </p>)}>
        <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/6f9f798a681d018eb01a3721f26d4df0395eddbe_paint.png" alt="projects" />
        <span>projects</span>
      </div>

      <div className="desktop-icon" onClick={() => openWindow("social media", <p>you can reach out to me via <br />─  mail arsoninstigator@proton.me <br />─  text on the <a href="#">hack club slack</a> <br />─  text on <a href="#">discord</a> and signal</p>)}>
        <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/d39e8f26f8b6a5814690819167df07cfad42803d_pdf-icon.png" alt="socials" />
        <span>socials</span>
      </div>

      {/* Render open windows */}
      {openWindows.map((win, index) => (
        <Window key={index} title={win.title} onClose={() => closeWindow(index)}>
          {win.content}
        </Window>
      ))}
    </div>
  );
};

export default Desktop;
