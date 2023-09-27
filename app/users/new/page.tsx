"use client";

import { useRouter } from "next/navigation";
import React from "react";

const NewPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>NewPage</h1>
      <button
        className="btn btn-secondary"
        onClick={() => router.push("/users")}
      >
        Go to user page dynamic
      </button>
    </div>
  );
};

export default NewPage;
