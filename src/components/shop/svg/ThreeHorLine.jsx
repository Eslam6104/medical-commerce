import React from "react";

const ThreeHorLine = ({ color = "currentColor" }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <rect
        x="15.25"
        y="4.25"
        width="1.5"
        height="12.5"
        rx="0.75"
        transform="rotate(90 15.25 4.25)"
        fill={color}
      ></rect>
      <rect
        x="15.25"
        y="8.25"
        width="1.5"
        height="12.5"
        rx="0.75"
        transform="rotate(90 15.25 8.25)"
        fill={color}
      ></rect>
      <rect
        x="15.25"
        y="12.25"
        width="1.5"
        height="12.5"
        rx="0.75"
        transform="rotate(90 15.25 12.25)"
        fill={color}
      ></rect>
    </svg>
  );
};

export default ThreeHorLine;
