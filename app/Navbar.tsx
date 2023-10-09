"use client";

import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const { status, data } = useSession();

  return (
    <div className="flex bg-slate-200 p-5">
      <Link href="/">Home</Link>
      &nbsp;
      <Link href="/users">Users</Link>
      &nbsp;
      {status === "loading" && <div>Loading...</div>}
      {status === "authenticated" && (
        <>
          <div>User {data.user!.name}</div>
          <Image
            loader={() => data.user!.image || ""}
            src={data.user!.image || ""}
            width={30}
            height={30}
            alt=""
          />
        </>
      )}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Login</Link>
      )}
    </div>
  );
};

export default Navbar;
