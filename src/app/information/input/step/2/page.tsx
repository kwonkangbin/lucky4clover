"use client";

import { BackIcon } from "@/components/icon";
import { useState } from "react";
import Button from "@/components/atoms/Button";
import InformationLayout from "@/layouts/InformationLayout";
import { useRouter } from "next/navigation";
import ROUTER from "@/constants/router.constant";
import TextField from "@/components/common/TextField";
import CheckBox from "@/components/atoms/CheckBox";

const Step2 = () => {
  const router = useRouter();

  const handleNextButtonClick = () => {
    router.push(ROUTER.INFORMATION[1]);
  };
  const [state, setState] = useState(false);
  return (
    <InformationLayout
      backIcon={<BackIcon onClick={handleNextButtonClick} />}
      button={<Button>완료하기</Button>}
      title="응원의 편지를 적어주세요 :)"
    >
      <TextField className="w-[342px] h-[621px] mt-[42px]" />
      <div className="w-full flex justify-start mt-[23px]">
        <div className="w-[5px]" />
        <CheckBox state={state} setState={setState} />
      </div>
    </InformationLayout>
  );
};

export default Step2;
