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

        
      <div className="desktop-icon" onClick={() => openWindow("skills & interests", 
        <p> <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>skills</span> <br />
          <ins>programming</ins> - python, react, tailwind, node.js, p5.js, html/css/js <br />
          <ins>design</ins> - figma, canva, aseprite, procreate, inkscape, ibis paint x<br />
          <ins>other</ins> - kicad, blender, fusion 360, tinkercad, ableton <br/>
          <br />
          <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>interests</span> <br />
          music (indie, pop, country), music production, film (mainly murder mysteries and thrillers), baking, napping, doomscrolling on twitter
        </p>
      )}>
        <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/02bb271cb5f3e932f48aacbc82bc090641f2fd3d_text_file.png" alt="Skills" />
        <span>skills</span>
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
        <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/7a46ccc4ea709002fae604db519bbf91db56d79d_workspace.png" alt="projects" />
        <span>projects</span>
      </div>
      
      <div className="desktop-icon" onClick={() => openWindow("social media", 
        <p>
          <span style={{ fontSize: '1.4em', fontWeight: 'bold' }}>reach out</span> <br />
        ─  mail arsoninstigator@proton.me <br />
        ─  text @ anne on <a href="#">hack club slack</a> <br />
        ─  text on <a href="#">discord</a> and signal <br />
        <br />
        <span style={{ fontSize: '1.4em', fontWeight: 'bold' }}>socials</span> <br />
        github: arsoninstigator <br />
        twitter: luvsohara <br />
        buymeacoffee: <a href="https://ko-fi.com/fairyluv">click here</a>
        </p>)}>
        <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/790d87c8f1026757a960ffafd27c535aa43df16f_contact_book.png" alt="socials" />
        <span>socials</span>
      </div>

      <div className="desktop-icon" onClick={() => openWindow("media", 
        <p>
        h
          </p>
      )}>
        <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/fa8707a19b95ba1f8ec7d27a8af1674e1064450c_image_editor.png" alt="Media" />
        <span>media</span>
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
