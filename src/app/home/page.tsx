"use client";

import Button from "@/components/atoms/Button";
import Footer from "@/components/common/Footer";
import { BackIcon } from "@/components/icon";
import { supabase } from "@/supabase";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchUserRanking, getURL } from "@/utils";
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

  const onClickCopyClipboard = async () => {
    try {
      await navigator.clipboard.writeText(
        `${getURL()}
        ?user_id=${userData?.auth_id}`,
      );
      alert("클립보드에 링크가 복사되었습니다.");
    } catch (e) {
      alert("복사에 실패하였습니다");
    }
  };

  return (
    <div className="w-[390px] mx-auto px-6 flex flex-col items-center relative">
      <div className="flex justify-between items-center pt-[30px] pb-9 w-full">
        <div onClick={() => router.push("/")} className="cursor-pointer">
          <BackIcon />
        </div>
        <button
          type="button"
          onClick={async () => {
            await supabase.auth.signOut();
            router.push("/");
          }}
          className="cursor-pointer p-[10px] inline-flex justify-center items-center"
        >
          <p className="text-black-2 text-center text-[14px] font-semibold">
            로그아웃
          </p>
        </button>
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
      <Button varient="instargram" onClick={onClickCopyClipboard}>
        나의 네잎클로버 링크 복사하기
      </Button>
      <Footer page="home" />
    </div>
  );
};

export default Home;
