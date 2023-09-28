import { notFound } from "next/navigation";
import React from "react";

interface UserParam {
  params: { id: number };
}

const UserDynamicPage = ({ params: { id } }: UserParam) => {
  if (id > 10) notFound();
  return <div>userPage {id}</div>;
};

export default UserDynamicPage;
