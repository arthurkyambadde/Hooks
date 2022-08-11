import React, { useEffect, useReducer } from "react";
import axios from "axios";

const FETCH_SUCCESFUL = "FETCH_SUCCESFUL";
const FETCH_ERROR = "FETCH_ERROR";

const initialState = {
  isLoading: true,
  post: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_SUCCESFUL:
      return {
        isLoading: false,
        post: action.payload,
        error: "",
      };

    case FETCH_ERROR:
      return {
        isLoading: false,
        post: {},
        error: "something went wrong",
      };
    default:
      return state;
  }
};

function ReducerHookFetch() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: FETCH_SUCCESFUL, payload: response.data });
      })
      .catch(dispatch({ type: FETCH_ERROR }));
  }, []);

  return (
    <div>
      {state.isLoading ? "Loading....." : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default ReducerHookFetch;
