import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  isLoading: true,
  posts: {},
  error: "",
};

function ReducerHookCounters() {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        console.log(response.data);
      });
  });
  return <div>ReducersHookCounters</div>;
}

export default ReducerHookCounters;
