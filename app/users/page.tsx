import React from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: { sortOrder: string };
}

const UserPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>User Page</h1>
      <Link className="btn btn-primary" href="/users/new">
        Go to New Page
      </Link>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UserPage;
