import React from "react";

export default function Container({ style, children }) {
  return (
    <div className={`${style} max-w-[1200px] mx-auto px-4`}>{children}</div>
  );
}
