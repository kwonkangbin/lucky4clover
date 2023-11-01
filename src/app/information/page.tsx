"use client";

import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import { BackIcon } from "@/components/icon";

const Information = () => {
  return (
    <div className="w-[390px] h-screen mx-auto px-6 flex flex-col items-center relative pb-[50px]">
      <div className="flex justify-between items-center pt-[30px] pb-[16px] w-full">
        <BackIcon />
      </div>
      <h1 className="mt-[34.25px] text-[27px] font-semibold w-full text-start text-black-1">
        이름을 입력해주세요
      </h1>
      <Input className="mt-[42px]" placeholder="이름을 입력해주세요" />
      <div className="h-full flex flex-col">
        <div className="h-full" />
        <Button>확인</Button>
      </div>
    </div>
  );
};

export default Information;
