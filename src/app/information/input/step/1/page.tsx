"use client";

import Input from "@/components/atoms/Input";
import { BackIcon } from "@/components/icon";
import Button from "@/components/atoms/Button";
import InformationLayout from "@/layouts/InformationLayout";
import { useSearchParams, useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import ROUTER from "@/constants/router.constant";
import { useEffect, useState } from "react";
import { profileNameAtom } from "@/atoms/profile";

const Step1 = () => {
  const router = useRouter();

  const [name, setName] = useRecoilState(profileNameAtom);
  const [isOpen, setIsOpen] = useState(false);

  const handleNextButtonClick = () => {
    if (name !== "") {
      router.push(ROUTER.INFORMATION[2]);
    } else {
      setIsOpen(true);
    }
  };

  const handleRootButtonClick = () => {
    router.push(ROUTER.ROOT);
  };

  return (
    <InformationLayout
      backIcon={<BackIcon onClick={handleRootButtonClick} />}
      button={<Button onClick={handleNextButtonClick}>확인</Button>}
      title="이름을 입력해주세요"
    >
      <Input
        className="mt-[42px]"
        placeholder="이름을 입력해주세요"
        onChange={(e) => {
          setName(e.target.value);
        }}
        defaultValue={name}
      />
    </InformationLayout>
  );
};

export default Step1;
