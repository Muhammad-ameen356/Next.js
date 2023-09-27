import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex bg-slate-200 p-5">
      <Link href="/">Home</Link>
      &nbsp;
      <Link href="/users">Users</Link>
    </div>
  );
};

export default Navbar;
