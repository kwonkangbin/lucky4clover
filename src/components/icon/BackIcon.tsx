import React, { SVGProps } from "react";

const BackIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="20"
      viewBox="0 0 11 20"
      fill="none"
    >
      <path
        d="M9.60181 1L1.20683 9.39498C1.14154 9.45625 1.0895 9.53026 1.05393 9.61244C1.01835 9.69461 1 9.7832 1 9.87274C1 9.96228 1.01835 10.0509 1.05393 10.133C1.0895 10.2152 1.14154 10.2892 1.20683 10.3505L9.60181 18.7455"
        stroke="#4C4C4C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BackIcon;
