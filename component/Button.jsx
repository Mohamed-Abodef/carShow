"use client";

import React from "react";

function Button({ style, title, handleClick }) {
  return (
    <button
      disabled={false}
      type={"button"}
      className={style}
      onClick={() => {
        handleClick();
      }}
    >
      {title}
    </button>
  );
}

export default Button;
