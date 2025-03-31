import React from "react";
import { Rnd } from "react-rnd";

export default function Window({ id, title, children, onClose }) {
  return (
    <Rnd
      key={id}
      default={{ x: 100, y: 100, width: 350, height: 250 }}
      bounds="window"
      className="absolute bg-winGray border-4 border-black shadow-lg"
    >
      <div className="flex justify-between bg-pastelPink text-white px-2 py-1">
        <span>{title}</span>
        <button onClick={() => onClose(id)}>✖</button>
      </div>
      <div className="p-4">{children}</div>
    </Rnd>
  );
}
