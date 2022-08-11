import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  isLoading: true,
  posts: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESFUL":
      return {
        isLoading: false,
        posts: action.payload,
        error: "",
      };

    case "FETCH_ERROR":
      return {
        isLoading: false,
        posts: {},
        error: "somethimg went wrong",
      };

    default:
      return state;
  }
};

function ReducerHookCounters() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);
  return (
    <div>
      {state.isloading ? "Loading........" : state.posts.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default ReducerHookCounters;
