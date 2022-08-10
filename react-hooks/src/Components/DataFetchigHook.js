import axios from "axios";
import React, { useEffect, useState } from "react";

function DataFetchigHook() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(
        (response) => {
          console.log(response);
          setPost(response.data);
        },
        [id]
      )
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
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
