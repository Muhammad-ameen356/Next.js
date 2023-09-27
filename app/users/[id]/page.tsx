import React from "react";

interface UserParam {
  params: { id: number };
}

const UserDynamicPage = ({ params: { id } }: UserParam) => {
  return <div>userPage {id}</div>;
};

export default UserDynamicPage;
