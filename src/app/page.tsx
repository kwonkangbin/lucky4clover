"use client";

import Button from "@/components/atoms/Button";
import { supabase } from "@/supabase";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Image from "next/image";

const Ondoarding = () => {
  async function signInWithKakao({ type }: { type: string }) {
    const { error, data } = await supabase.auth.signInWithOAuth({
      provider: "kakao",
      options: {
        redirectTo:
          type === "POST"
            ? `http://localhost:3001/information/input/step/1`
            : `http://localhost:3001/auth/callback`,
      },
    });
  }

  const searchParams = useSearchParams();
  const search = searchParams.get("user_id");

  useEffect(() => {
    window.localStorage.setItem("user_id", JSON.stringify(search));
  }, [search]);

  return (
    <div className="w-full h-screen flex flex-col items-center ">
      <div className="w-[390px] h-screen flex flex-col items-center justify-center">
        <p className="w-full text-start text-black-1 text-[27px] leading-[38.566px] mb-[52px] pl-[24px]">
          수능을 맞이해,
          <br />
          Name님에게
          <br />
          네잎클로버를 선물해주세요
        </p>
        <Image
          width="247"
          height="358"
          src="/img/Onboarding.png"
          alt="온보딩 이미지"
          className="mb-[64px]"
        />
        <div className="flex flex-col gap-[11px]">
          <Button
            onClick={() => {
              signInWithKakao({ type: "POST" });
            }}
          >
            Name님에게 선물하기
          </Button>
          <Button
            varient="white"
            onClick={() => signInWithKakao({ type: "MY_DATA" })}
          >
            나의 네잎클로버 만들기 / 찾기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Ondoarding;
