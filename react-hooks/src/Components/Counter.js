import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={increaseCount}>Count {count}</button>
    </div>
  );
}

export default Counter;
