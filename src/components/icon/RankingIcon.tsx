import React, { SVGProps } from "react";

const RankingIcon = ({ select = false }: { select: boolean }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="26"
      viewBox="0 0 25 26"
      fill="none"
    >
      <path
        d="M12.1728 17.6152C16.761 17.6152 20.4804 13.8958 20.4804 9.30759C20.4804 4.71944 16.761 1 12.1728 1C7.58467 1 3.86523 4.71944 3.86523 9.30759C3.86523 13.8958 7.58467 17.6152 12.1728 17.6152Z"
        stroke="white"
        strokeOpacity={select ? "1.0" : "0.7"}
        strokeWidth="1.84613"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.1727 12.9998C14.2119 12.9998 15.865 11.3467 15.865 9.3075C15.865 7.26832 14.2119 5.61523 12.1727 5.61523C10.1336 5.61523 8.48047 7.26832 8.48047 9.3075C8.48047 11.3467 10.1336 12.9998 12.1727 12.9998Z"
        stroke="white"
        strokeOpacity={select ? "1.0" : "0.7"}
        strokeWidth="1.84613"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5667 17.4672L8.94211 24.2979C8.90995 24.4277 8.85052 24.5492 8.76775 24.6542C8.68499 24.7593 8.5808 24.8455 8.46211 24.9071C8.33685 24.9615 8.20175 24.9895 8.06519 24.9895C7.92864 24.9895 7.79354 24.9615 7.66827 24.9071L1.53912 22.2302C1.41055 22.1695 1.29743 22.0803 1.20823 21.9696C1.11904 21.8588 1.05609 21.7293 1.02411 21.5907C0.992135 21.4522 0.991962 21.3082 1.0236 21.1695C1.05525 21.0309 1.11788 20.9012 1.20681 20.7902L5.95137 14.8457"
        stroke="white"
        strokeOpacity={select ? "1.0" : "0.7"}
        strokeWidth="1.84613"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.2588 17.3751L15.9203 24.2981C15.9533 24.4301 16.0152 24.5532 16.1013 24.6585C16.1875 24.7638 16.2959 24.8488 16.4188 24.9073C16.5406 24.9624 16.6728 24.9908 16.8065 24.9908C16.9401 24.9908 17.0723 24.9624 17.1941 24.9073L23.2864 22.2304C23.4169 22.1704 23.5316 22.0807 23.6213 21.9685C23.711 21.8563 23.7734 21.7248 23.8033 21.5843C23.8383 21.4468 23.8398 21.303 23.8077 21.1649C23.7755 21.0267 23.7107 20.8983 23.6187 20.7904L18.671 14.4951"
        stroke="white"
        strokeOpacity={select ? "1.0" : "0.7"}
        strokeWidth="1.84613"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RankingIcon;