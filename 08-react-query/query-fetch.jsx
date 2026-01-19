/*
  useQuery fetches and caches server data.
  It automatically handles loading & errors.
  Data stays fresh using background refetching.
*/

import { useQuery } from "@tanstack/react-query";

function fetchUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json());
}

function Users() {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <ul>
      {data.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}

export default Users;
