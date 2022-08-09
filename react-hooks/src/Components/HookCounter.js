import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count} times</button>
    </div>
  );
}

export default HookCounter;
