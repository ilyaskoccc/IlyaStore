import React from "react";

export default function CopyRightText() {
  return (
    <>
      <div className="text-center text-sm text-gray-500">
        <p>Copyright © {new Date().getFullYear()}. All Rights Reserved.</p>
        <p className="mt-1">
          Powered By -{" "}
          <a
            href="https://ilyaskoc.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold"
          >
            ilyaskoc
          </a>
        </p>
      </div>
    </>
  );
}
