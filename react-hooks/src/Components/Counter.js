import React from "react";
import { useState } from "react";

function Counter() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const increaseCountBy5 = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increase Count
      </button>
      <button onClick={increaseCountBy5}>
        Count increase by a figure by 5
      </button>
      <div>{count}</div>
    </div>
  );
}

export default Counter;
