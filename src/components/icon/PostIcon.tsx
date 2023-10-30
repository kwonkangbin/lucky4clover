import React, { SVGProps } from "react";

const PostIcon = ({ select = false }: { select: boolean }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="23"
      viewBox="0 0 26 23"
      fill="none"
    >
      <path
        d="M23.1536 1.84766H2.84613C1.82654 1.84766 1 2.6742 1 3.69379V19.3859C1 20.4055 1.82654 21.232 2.84613 21.232H23.1536C24.1732 21.232 24.9997 20.4055 24.9997 19.3859V3.69379C24.9997 2.6742 24.1732 1.84766 23.1536 1.84766Z"
        stroke="white"
        strokeOpacity="0.7"
        strokeWidth="1.84613"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 4.15625L11.8183 13.3869C12.1501 13.6632 12.5681 13.8145 12.9999 13.8145C13.4316 13.8145 13.8497 13.6632 14.1814 13.3869L24.9997 4.15625"
        stroke="white"
        strokeOpacity="0.7"
        strokeWidth="1.84613"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PostIcon;
