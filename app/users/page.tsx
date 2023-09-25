import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UserPage = async () => {
  const fetchUser = await fetch(
    "https://jsonplaceholder.typicode.com/comments",
    { next: { revalidate: 2 } }
  );

  const users: User[] = await fetchUser.json();
  return (
    <>
      <h1>User Page</h1>
      <ul>
        {users.map((user) => (
          <>
            <li key={user.id}> Email: {user.email}</li>
            <li>Name : {user.name}</li>
            <br />
          </>
        ))}
      </ul>
    </>
  );
};

export default UserPage;
