import React, { useState, useEffect } from "react";
import "./styles.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div className="clock">{time.toLocaleTimeString()}</div>;
};

export default Clock;
