import React, { SVGProps } from "react";

const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  fill = "#FFFFFF",
}: {
  fill?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
    >
      <path
        d="M12.3924 1.10547L6.85389 6.64393L1.31543 1.10547"
        stroke={fill}
        strokeWidth="1.84615"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckIcon;
