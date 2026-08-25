import React from "react";

const FourLine = ({ color = "currentColor" }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <rect
        x="2.25"
        y="2.75"
        width="1.5"
        height="12.5"
        rx="0.75"
        fill={color}
      ></rect>
      <rect
        x="6.25"
        y="2.75"
        width="1.5"
        height="12.5"
        rx="0.75"
        fill={color}
      ></rect>
      <rect
        x="10.25"
        y="2.75"
        width="1.5"
        height="12.5"
        rx="0.75"
        fill={color}
      ></rect>
      <rect
        x="14.25"
        y="2.75"
        width="1.5"
        height="12.5"
        rx="0.75"
        fill={color}
      ></rect>
    </svg>
  );
};

export default FourLine;
