import React from "react";

export default function Button({ text, style }) {
  return (
    <button className={`${style} cursor-pointer rounded-md py-3 px-6 text-[16px] font-semibold`}>
      {text}
    </button>
  );
}
