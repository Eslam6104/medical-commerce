import React from "react";

const ThreeVerLine = ({ color = "currentColor" }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <rect
        x="4.25"
        y="2.75"
        width="1.5"
        height="12.5"
        rx="0.75"
        fill={color}
      ></rect>
      <rect
        x="8.25"
        y="2.75"
        width="1.5"
        height="12.5"
        rx="0.75"
        fill={color}
      ></rect>
      <rect
        x="12.25"
        y="2.75"
        width="1.5"
        height="12.5"
        rx="0.75"
        fill={color}
      ></rect>
    </svg>
  );
};

export default ThreeVerLine;
