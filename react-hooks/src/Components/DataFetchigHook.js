import axios from "axios";
import React, { useEffect, useState } from "react";

function DataFetchigHook() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idOnClick, setIdOnClick] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idOnClick}`)
      .then(
        (response) => {
          console.log(response);
          setPost(response.data);
        },
        [idOnClick]
      )
      .catch((error) => {
        console.log(error);
      });
  }, [idOnClick]);

  const handleClick = () => {
    setIdOnClick(id);
  };

  return (
    <div>
      <button onClick={handleClick}>fetch post</button>
      <input type={"text"} value={id} onChange={(e) => setId(e.target.value)} />
      {post.title}
      {/* <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul> */}
    </div>
  );
}

export default DataFetchigHook;
