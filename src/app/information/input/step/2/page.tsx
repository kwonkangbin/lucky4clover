"use client";

import { BackIcon } from "@/components/icon";
import { useState } from "react";
import Button from "@/components/atoms/Button";
import InformationLayout from "@/layouts/InformationLayout";
import { useRouter } from "next/navigation";
import ROUTER from "@/constants/router.constant";
import TextField from "@/components/common/TextField";
import CheckBox from "@/components/atoms/CheckBox";
import { supabase } from "@/supabase";
import { useRecoilValue } from "recoil";
import { profileNameAtom } from "@/atoms/profile";

const Step2 = () => {
  const router = useRouter();

  const name = useRecoilValue(profileNameAtom);
  const [message, setMessage] = useState("");

  const handlePreButtonClick = () => {
    router.push(ROUTER.INFORMATION[1]);
  };

  const postWrite = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      const userId = user.id;
      await supabase.from("Message").insert([
        {
          name,
          send_user: userId,
          user: window.localStorage.getItem("user_id")?.replace(/"/g, ""),
          value: message,
        },
      ]);
    }

    router.push("/home");
  };

  const [state, setState] = useState(false);
  return (
    <InformationLayout
      backIcon={<BackIcon onClick={handlePreButtonClick} />}
      button={<Button onClick={postWrite}>완료하기</Button>}
      title="응원의 편지를 적어주세요 :)"
    >
      <TextField
        className="w-[342px] h-[621px] mt-[42px]"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <div className="w-full flex justify-start mt-[23px]">
        <div className="w-[5px]" />
        <CheckBox state={state} setState={setState} />
      </div>
    </InformationLayout>
  );
};

export default Step2;
