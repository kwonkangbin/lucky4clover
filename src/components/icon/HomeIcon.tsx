import React, { SVGProps } from "react";

const HomeIcon = ({ select = false }: { select: boolean }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
    >
      <path
        d="M24.9998 12.8891C25.0015 12.6328 24.9499 12.379 24.8482 12.1438C24.7464 11.9086 24.5969 11.6972 24.409 11.523L12.9999 1L1.5908 11.523C1.40291 11.6972 1.25336 11.9086 1.15165 12.1438C1.04994 12.379 0.998308 12.6328 1.00004 12.8891V23.1536C1.00004 23.6432 1.19454 24.1128 1.54076 24.459C1.88698 24.8052 2.35655 24.9997 2.84617 24.9997H23.1536C23.6433 24.9997 24.1128 24.8052 24.459 24.459C24.8053 24.1128 24.9998 23.6432 24.9998 23.1536V12.8891Z"
        stroke="white"
        strokeWidth="1.84613"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HomeIcon;
