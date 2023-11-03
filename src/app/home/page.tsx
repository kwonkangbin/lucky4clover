"use client";

import Button from "@/components/atoms/Button";
import Footer from "@/components/common/Footer";
import { BackIcon, ShareIcon } from "@/components/icon";
import { supabase } from "@/supabase";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchUserRanking } from "@/utils";
import { IUserData } from "../ranking/page";

const Home = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<IUserData>();

  async function getUserRanking() {
    const data = await fetchUserRanking();
    setUserData(data);
  }

  useEffect(() => {
    getUserRanking();
  }, []);

  return (
    <div className="w-[390px] mx-auto px-6 flex flex-col items-center relative">
      <div className="flex justify-between pt-[30px] pb-9 w-full">
        <BackIcon />
        <div
          onClick={async () => {
            supabase.auth.signOut();
            router.refresh();
          }}
          className="cursor-pointer"
        >
          <ShareIcon />
        </div>
      </div>
      <h1 className="font-semibold text-[26px] leading-[37px] text-left w-full">
        {userData?.message_count}명의 친구들이 <br />{" "}
        {userData?.raw_user_meta_data.name}님을 <br /> 응원하고 있어요!
      </h1>
      <Image
        src="/img/Home.png"
        alt="four leaf clover"
        className="mx-auto mt-[32px]"
        width={207}
        height={286}
      />
      <h2 className="text-[27px] font-semibold text-center mb-[23px]">
        {userData?.message_count_rank}등
      </h2>
      <p className="text-[14px] font-semibold text-center mb-[13px]">
        인스타그램 스토리에 언급하고 응원글을 더 받아보세요
      </p>
      <Button varient="instargram">인스타그램 스토리에 언급하기</Button>
      <Footer page="home" />
    </div>
  );
};

export default Home;
