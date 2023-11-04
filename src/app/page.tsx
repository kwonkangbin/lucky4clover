"use client";

import Button from "@/components/atoms/Button";
import { supabase } from "@/supabase";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

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
            ? `${
                process.env.NODE_ENV !== "production"
                  ? "http://localhost:3000"
                  : "https://fourleaf-frontend.vercel.app"
              }/information/input/step/1`
            : `${
                process.env.NODE_ENV !== "production"
                  ? "http://localhost:3000"
                  : "https://fourleaf-frontend.vercel.app"
              }/auth/callback`,
      },
    });

    if (type !== "POST") {
      router.push("/home");
    }
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
      <div className="w-[390px] h-screen flex flex-col items-center justify-center">
        <p className="w-full text-start text-black-1 text-[27px] leading-[38.566px] mb-[52px] pl-[24px]">
          수능을 맞이해,
          <br />
          {userData?.raw_user_meta_data.name}님에게
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
            {userData?.raw_user_meta_data.name}님에게 선물하기
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
