"use client";
import React from "react";

interface Prop {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Prop) => {
  console.log(error, "error");

  return (
    <>
      <button className="btn btn-success" onClick={() => reset()}>
        Reset
      </button>
      <div>An unexpected Error Occurred</div>
    </>
  );
};

export default ErrorPage;
