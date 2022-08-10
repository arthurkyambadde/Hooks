import React from "react";
import { useReducer } from "react";

const initialState = {
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function ReducerCounter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count: {count.counter}</div>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        reset
      </button>
    </div>
  );
}

export default ReducerCounter;
