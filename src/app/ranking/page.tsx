"use client";

import {
  BackIcon,
  HomeIcon,
  PostIcon,
  RankingIcon,
  SearchIcon,
  ShareIcon,
} from "@/components/icon";
import Link from "next/link";

const Ranking = () => {
  return (
    <div className="max-w-md mx-auto px-6 flex flex-col items-center relative">
      <div className="flex justify-between items-center pt-[30px] pb-[16px] w-full">
        <div className="flex items-center">
          <BackIcon />
          <p className="ml-[15px] text-[20px] font-semibold text-black-2">
            랭킹
          </p>
        </div>
        <SearchIcon />
      </div>
      <div className="bg-green-1 p-[15px] w-full pb-[22px] rounded-[20px]">
        <p className="text-[14px] font-bold text-white mb-[12px]">
          NAME님의 랭킹
        </p>
        <div className="flex items-center">
          <div className="p-[13px] bg-white rounded-full w-[62px] h-[62px] mr-[11px]">
            <img src="/img/Ranking.png" alt="four leaf" />
          </div>
          <div className="flex flex-col items-start">
            <p className="mb-[5px] text-white text-[14px] font-bold">00등</p>
            <p className="text-white text-[14px] font-bold">
              받은 응원글: 14개
            </p>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 max-w-md px-6 w-full">
        <div className="bg-green-1 flex w-full pt-[14px] px-[50px] pb-[14px] rounded-t-[12px] justify-start">
          <div>
            <Link href="/ranking">
              <div className="flex flex-col items-center justify-center gap-1 cursor-pointer">
                <RankingIcon select />
                <p className="text-[14px] font-semibold text-white text-center">
                  랭킹
                </p>
              </div>
            </Link>
          </div>
          <div className="mx-auto">
            <Link href="/home">
              <div className="flex flex-col items-center justify-center  gap-1 cursor-pointer">
                <HomeIcon select={false} />
                <p className="text-[14px] font-semibold text-white text-center text-opacity-70">
                  홈
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/messages">
              <div className="flex flex-col items-center justify-center gap-1 cursor-pointer">
                <PostIcon select={false} />
                <p className="text-[14px] font-semibold text-white text-center text-opacity-70">
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

export default Ranking;
