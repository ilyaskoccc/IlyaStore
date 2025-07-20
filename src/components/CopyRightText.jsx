import React from "react";

export default function CopyRightText() {
  return (
    <>
      <div className="text-center">
        <p className="text-xs text-center text-gray-500">
          Copyright © {new Date().getFullYear()}. All Rights Reserved.
        </p>
        <p className="mt-1 text-xs text-center text-gray-500">
          Powered By -{" "}
          <a
            href="https://ilyaskoc.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            ilyaskoc
          </a>
        </p>
      </div>
    </>
  );
}
