import { useEffect, useState } from "react";

function Fetch() {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then((data) => setPosts(data))
      .catch(err => setError(err));
  }, []);

  return (
    <div>
      {error && <p>Error: {error.message}</p>}
      {posts && <pre>{JSON.stringify(posts, null, 2)}</pre>}
    </div>
  );
}
export default Fetch;