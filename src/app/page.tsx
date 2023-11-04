"use client";

import Button from "@/components/atoms/Button";
import { supabase } from "@/supabase";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import { getURL } from "@/utils";

const Ondoarding = () => {
  const router = useRouter();

  const [userData, setUserData] = useState<{
    raw_user_meta_data: { name: string };
  } | null>();

  async function signInWithKakao({ type }: { type: string }) {
    await supabase.auth.signInWithOAuth({
      provider: "kakao",
      options: {
        redirectTo:
          type === "POST"
            ? `${getURL()}information/input/step/1`
            : `${getURL()}auth/callback`,
      },
    });
  }
  const fetchUserData = async (id: string) => {
    const { data } = await supabase.rpc("getuserbyid", { user_id: id });

    if (data) {
      setUserData(data[0]);
    }
  };

  const searchParams = useSearchParams();
  const search = searchParams.get("user_id");

  useEffect(() => {
    window.localStorage.setItem("user_id", JSON.stringify(search));
    if (search) {
      fetchUserData(search);
    }
  }, [search]);

  return (
    <div className="w-full h-screen flex flex-col items-center ">
      <div className="max-w-[390px] h-screen flex flex-col items-center justify-center">
        {window.localStorage.getItem("user_id") !== "null" ? (
          <p className="w-full text-start text-black-1 text-[27px] leading-[38.566px] mb-[52px] pl-[24px]">
            수능을 맞이해,
            <br />
            {userData?.raw_user_meta_data.name}님에게
            <br />
            <strong>네잎클로버</strong>를 선물해주세요
          </p>
        ) : (
          <p className="w-full text-start text-black-1 text-[27px] leading-[38.566px] mb-[52px] pl-[24px]">
            수능을 맞이해,
            <br />
            자신만의
            <br />
            <strong>네잎클로버</strong>를 만들어보세요.
          </p>
        )}
        <Image
          width="247"
          height="358"
          src="/img/Onboarding.png"
          alt="온보딩 이미지"
          className="mb-[64px]"
        />
        <div className="flex flex-col gap-[11px]">
          {window.localStorage.getItem("user_id") !== "null" ? (
            <Button
              onClick={() => {
                signInWithKakao({ type: "POST" });
              }}
            >
              {userData?.raw_user_meta_data.name}님에게 선물하기
            </Button>
          ) : (
            <div className="h-[57px]" />
          )}

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
