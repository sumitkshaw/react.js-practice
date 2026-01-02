/*
  This custom hook extracts API fetching logic.
  It centralizes loading and data state.
  Makes components cleaner and reusable.
*/

import { useEffect, useState } from "react";

function useFetch(url) {
  // data stores API response, loading tracks fetch state
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch runs when URL changes
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);      // store response
        setLoading(false);    // stop loader
      });
  }, [url]);

  return { data, loading };
}

// Component consuming fetched data
function Users() {
  // Hook abstracts away fetch logic
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default Users;
