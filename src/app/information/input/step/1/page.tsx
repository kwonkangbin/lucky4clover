"use client";

import Input from "@/components/atoms/Input";
import { BackIcon } from "@/components/icon";
import Button from "@/components/atoms/Button";
import InformationLayout from "@/layouts/InformationLayout";
import { useRouter } from "next/navigation";
import ROUTER from "@/constants/router.constant";

const Step1 = () => {
  const router = useRouter();

  const handleNextButtonClick = () => {
    router.push(ROUTER.INFORMATION[2]);
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
      <Input className="mt-[42px]" placeholder="이름을 입력해주세요" />
    </InformationLayout>
  );
};

export default Step1;
