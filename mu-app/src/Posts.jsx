import { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => setError(err));
  }, []);

  if (error) return <div>Error: {error.message}</div>;
  if (posts.length === 0) return <div>Loading...</div>;

  return (
    <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
    </ul>
  );
}

export default Posts;