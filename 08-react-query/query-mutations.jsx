/*
  useMutation handles create/update/delete.
  It does NOT auto-run like queries.
  Cache can be refreshed after mutation.
*/

import { useMutation, useQueryClient } from "@tanstack/react-query";

function addUser(user) {
  return fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-Type": "application/json" },
  });
}

function AddUser() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      // Refresh users list after mutation
      queryClient.invalidateQueries(["users"]);
    },
  });

  return (
    <button
      onClick={() =>
        mutation.mutate({ name: "New User" })
      }
    >
      Add User
    </button>
  );
}

export default AddUser;
