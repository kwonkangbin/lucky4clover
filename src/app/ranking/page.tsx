"use client";

import Footer from "@/components/common/Footer";
import Rank from "@/components/common/Rank";
import { BackIcon, SearchIcon } from "@/components/icon";
import { supabase } from "@/supabase";
import { fetchUserRanking } from "@/utils";
import { useInfiniteQuery } from "react-query";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import { useObserver } from "@/hooks/useObserver";
import { useRouter } from "next/navigation";

export interface IUserData {
  auth_id: string;
  raw_user_meta_data: { name: string };
  message_count: number;
  message_count_rank: number;
}

export interface IUsersData {
  id: string;
  raw_user_meta_data: { name: string };
  message_count: number;
  message_count_rank: number;
}

const LIMIT = 20;

const Ranking = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<IUserData>();

  async function getUserRanking() {
    const data = await fetchUserRanking();
    setUserData(data);
  }

  const fetchUsersRanking = async (
    limit_num: number,
    offset_num: number,
  ): Promise<IUsersData[] | null> => {
    const res = await supabase.rpc("getusersranking", {
      limit_num,
      offset_num,
    });

    return res.data;
  };

  const bottom = useRef(null);

  const getUsersRanking = ({ pageParam = 0 }) =>
    fetchUsersRanking(LIMIT, pageParam);

  const { data, fetchNextPage } = useInfiniteQuery<IUsersData[] | null>(
    ["usersRanking"],
    getUsersRanking,
    {
      getNextPageParam: (lastPage, page) => {
        return page.length * LIMIT;
      },
    },
  );

  useEffect(() => {
    getUserRanking();
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onIntersect = ([entry]: any) => {
    if (entry.isIntersecting) {
      fetchNextPage();
    }
  };

  useObserver({
    target: bottom,
    onIntersect,
  });

  return (
    <div className="w-[390px] mx-auto px-6 flex flex-col items-center relative pb-[93px]">
      <div className="flex justify-between items-center pt-[30px] pb-[16px] w-full">
        <div className="flex items-center">
          <div onClick={() => router.back()} className="cursor-pointer">
            <BackIcon />
          </div>
          <p className="ml-[15px] text-[20px] font-semibold text-black-2">
            랭킹
          </p>
        </div>
        <SearchIcon />
      </div>
      <div className="bg-green-1 p-[15px] w-full pb-[22px] rounded-[20px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.11)] mb-[12px]">
        <p className="text-[14px] font-bold text-white mb-[12px]">
          {userData?.raw_user_meta_data?.name}님의 랭킹
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
            <p className="mb-[5px] text-white text-[14px] font-bold">
              {userData?.message_count_rank}등
            </p>
            <p className="text-white text-[14px] font-bold">
              받은 응원글: {userData?.message_count}개
            </p>
          </div>
        </div>
      </div>
      {data?.pages.map((page, index) => (
        <Fragment key={index}>
          {page?.map((i) => (
            <Rank
              key={i.id}
              rank={i.message_count_rank}
              name={i.raw_user_meta_data.name}
              messages={i.message_count}
            />
          ))}
        </Fragment>
      ))}
      <div ref={bottom} />
      <Footer page="ranking" />
    </div>
  );
};

export default Ranking;
