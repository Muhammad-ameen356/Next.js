"use client";

import { CldImage, CldUploadWidget } from "next-cloudinary";
import React, { useState } from "react";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [imgId, setImgId] = useState("");
  return (
    <>
      {imgId && <CldImage src={imgId} width="270" height="180" alt="Image" />}
      <CldUploadWidget
        uploadPreset="lgkkzosx"
        onUpload={(result) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          return setImgId(info.public_id);
        }}
      >
        {({ open }) => (
          <button onClick={() => open()} className="btn btn-primary">
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
