"use client";

import Button from "@/components/atoms/Button";
import {
  BackIcon,
  HomeIcon,
  PostIcon,
  RankingIcon,
  ShareIcon,
} from "@/components/icon";
import Link from "next/link";

const Home = () => {
  return (
    <div className="max-w-md mx-auto px-6 flex flex-col items-center relative">
      <div className="flex justify-between pt-[30px] pb-9 w-full">
        <BackIcon />
        <ShareIcon />
      </div>
      <h1 className="font-semibold text-[26px] leading-[37px] text-left w-full">
        000명의 친구들이 <br /> Name님을 <br /> 응원하고 있어요!
      </h1>
      <img
        src="/img/Home.png"
        alt="four leaf clover"
        className="mx-auto mt-[32px]"
      />
      <h2 className="text-[27px] font-semibold text-center mb-[23px]">00등</h2>
      <p className="text-[14px] font-semibold text-center mb-[13px]">
        인스타그램 스토리에 언급하고 응원글을 더 받아보세요
      </p>
      <Button varient="instargram">인스타그램 스토리에 언급하기</Button>
      <div className="fixed bottom-0 max-w-md px-6 w-full">
        <div className="bg-green-1 flex w-full pt-[14px] px-[50px] pb-[14px] rounded-t-[12px] justify-start">
          <div>
            <Link href="/ranking">
              <div className="flex flex-col items-center justify-center gap-1 cursor-pointer">
                <RankingIcon select={false} />
                <p className="text-[14px] font-semibold text-white text-center">
                  랭킹
                </p>
              </div>
            </Link>
          </div>
          <div className="mx-auto">
            <Link href="/home">
              <div className="flex flex-col items-center justify-center  gap-1 cursor-pointer">
                <HomeIcon select />
                <p className="text-[14px] font-semibold text-white text-center">
                  홈
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/messages">
              <div className="flex flex-col items-center justify-center gap-1 cursor-pointer">
                <PostIcon select={false} />
                <p className="text-[14px] font-semibold text-white text-center">
                  응원글
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
