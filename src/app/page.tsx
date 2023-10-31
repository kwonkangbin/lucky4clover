"use client";

import Button from "@/components/atoms/Button";
import CheckBox from "@/components/atoms/CheckBox";
import Input from "@/components/atoms/Input";
import { BackIcon, CheckIcon, SearchIcon, ShareIcon } from "@/components/icon";
import { useState } from "react";

const Home = () => {
  const [state, setState] = useState(false);
  return (
    <div>
      <BackIcon />
      <CheckIcon fill="#767676" />
      <SearchIcon />
      <ShareIcon />
      <Button varient="white">바보</Button>
      <Button>dfds</Button>
      <Button varient="instargram">바보</Button>
      <CheckBox state={state} setState={setState} />
      <Input placeholder="이름을 입력해주세요." />
    </div>
  );
};

export default Home;
