import React, { SVGProps } from "react";

const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M8.50461 16.0092C12.6493 16.0092 16.0092 12.6493 16.0092 8.50461C16.0092 4.35993 12.6493 1 8.50461 1C4.35993 1 1 4.35993 1 8.50461C1 12.6493 4.35993 16.0092 8.50461 16.0092Z"
        stroke="#4C4C4C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.9999 18.9999L13.8076 13.8076"
        stroke="#4C4C4C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
