"use client";

import Button from "@/components/atoms/Button";
import { BackIcon, CheckIcon, SearchIcon, ShareIcon } from "@/components/icon";

const Home = () => {
  return (
    <div>
      <BackIcon />
      <CheckIcon fill="#767676" />
      <SearchIcon />
      <ShareIcon />
      <Button varient="white">바보</Button>
      <Button>dfds</Button>
      <Button varient="instargram">바보</Button>
    </div>
  );
};

export default Home;
