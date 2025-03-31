import React, { useState } from "react";
import Taskbar from "./components/Taskbar";
import Window from "./components/Window";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Socials from "./pages/Socials";

const windows = {
  about: { title: "About Me", content: <About /> },
  projects: { title: "Projects", content: <Projects /> },
  socials: { title: "Socials", content: <Socials /> },
};

export default function App() {
  const [openWindows, setOpenWindows] = useState(["about"]);

  const toggleWindow = (id) => {
    setOpenWindows((prev) =>
      prev.includes(id) ? prev.filter((win) => win !== id) : [...prev, id]
    );
  };

  return (
    <div className="h-screen w-screen bg-beige text-black font-poppins flex flex-col">
      <header className="w-full bg-pastelBlue text-white p-3 text-center font-semibold">
        <h1>My Retro Personal Website</h1>
      </header>

      <div className="flex gap-4 p-4">
        {Object.keys(windows).map((id) => (
          <button
            key={id}
            onClick={() => toggleWindow(id)}
            className="bg-winGray px-4 py-2 border-2 border-black shadow-md hover:bg-gray-300"
          >
            {windows[id].title}
          </button>
        ))}
      </div>

      {openWindows.map((id) => (
        <Window key={id} id={id} title={windows[id].title} onClose={toggleWindow}>
          {windows[id].content}
        </Window>
      ))}

      <Taskbar toggleWindow={toggleWindow} />
    </div>
  );
}
