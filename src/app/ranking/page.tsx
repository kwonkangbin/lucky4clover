"use client";

import Footer from "@/components/common/Footer";
import Rank from "@/components/common/Rank";
import { BackIcon, SearchIcon } from "@/components/icon";
import Image from "next/image";

const Ranking = () => {
  return (
    <div className="w-[390px] mx-auto px-6 flex flex-col items-center relative pb-[93px]">
      <div className="flex justify-between items-center pt-[30px] pb-[16px] w-full">
        <div className="flex items-center">
          <BackIcon />
          <p className="ml-[15px] text-[20px] font-semibold text-black-2">
            랭킹
          </p>
        </div>
        <SearchIcon />
      </div>
      <div className="bg-green-1 p-[15px] w-full pb-[22px] rounded-[20px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.11)] mb-[12px]">
        <p className="text-[14px] font-bold text-white mb-[12px]">
          NAME님의 랭킹
        </p>
        <div className="flex items-center">
          <div className="p-[13px] bg-white rounded-full w-[62px] h-[62px] mr-[11px]">
            <Image
              src="/img/Ranking.png"
              alt="four leaf"
              width={36}
              height={36}
            />
          </div>
          <div className="flex flex-col items-start">
            <p className="mb-[5px] text-white text-[14px] font-bold">00등</p>
            <p className="text-white text-[14px] font-bold">
              받은 응원글: 14개
            </p>
          </div>
        </div>
      </div>
      <Rank rank={1} name="Name" messages={4} />
      <Rank rank={2} name="Name" messages={4} />
      <Rank rank={3} name="Name" messages={4} />
      <Rank rank={4} name="Name" messages={4} />
      <Rank rank={5} name="Name" messages={4} />
      <Rank rank={6} name="Name" messages={4} />
      <Rank rank={7} name="Name" messages={4} />
      <Rank rank={8} name="Name" messages={4} />
      <Rank rank={9} name="Name" messages={4} />
      <Footer page="ranking" />
    </div>
  );
};

export default Ranking;
