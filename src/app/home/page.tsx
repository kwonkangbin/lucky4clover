"use client";

import Button from "@/components/atoms/Button";
import Footer from "@/components/common/Footer";
import { BackIcon, ShareIcon } from "@/components/icon";
import Image from "next/image";

const Home = () => {
  return (
    <div className="w-[390px] mx-auto px-6 flex flex-col items-center relative">
      <div className="flex justify-between pt-[30px] pb-9 w-full">
        <BackIcon />
        <ShareIcon />
      </div>
      <h1 className="font-semibold text-[26px] leading-[37px] text-left w-full">
        000명의 친구들이 <br /> Name님을 <br /> 응원하고 있어요!
      </h1>
      <Image
        src="/img/Home.png"
        alt="four leaf clover"
        className="mx-auto mt-[32px]"
        width={207}
        height={286}
      />
      <h2 className="text-[27px] font-semibold text-center mb-[23px]">00등</h2>
      <p className="text-[14px] font-semibold text-center mb-[13px]">
        인스타그램 스토리에 언급하고 응원글을 더 받아보세요
      </p>
      <Button varient="instargram">인스타그램 스토리에 언급하기</Button>
      <Footer page="home" />
    </div>
  );
};

export default Home;
