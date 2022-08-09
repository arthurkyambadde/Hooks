import React, { useEffect } from "react";
import { useState } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse event after logging out");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("use effect called");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("mouse moved");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      Hook X-{x} Y-{y}
    </div>
  );
}

export default HookMouse;
