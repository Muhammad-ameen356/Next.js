import React from "react";
import Link from "next/link";
import { sort } from "fast-sort";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  const fetchUser = await fetch(
    "https://jsonplaceholder.typicode.com/comments",
    { next: { revalidate: 2 } }
  );

  const users: User[] = await fetchUser.json();
  const ascSorted = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <Link href="/users?sortOrder=name">Name</Link>
          </th>
          <Link href="/users?sortOrder=email">Email</Link>
        </tr>
      </thead>
      <tbody>
        {ascSorted.map((user) => (
          <>
            <tr key={user.id}>
              <td> {user.name}</td>
              <td> {user.email}</td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
