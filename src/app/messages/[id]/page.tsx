"use client";

import Footer from "@/components/common/Footer";
import { BackIcon, ClockIcon, ShareIcon } from "@/components/icon";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "@/supabase";
import { useParams } from "next/navigation";
import { IMessage } from "../page";

const MessagesDetail = () => {
  const { id } = useParams();
  const [message, setMessage] = useState<IMessage>();

  const fetchMessageData = async () => {
    if (!id) return;

    const { data } = await supabase.from("Message").select("*").eq("id", +id);

    if (!data) return;

    setMessage(data[0]);
  };

  useEffect(() => {
    fetchMessageData();
  }, []);

  return (
    <div className="w-[390px] mx-auto px-6 flex flex-col items-center relative pb-[93px]">
      <div className="flex justify-between items-center pt-[30px] pb-[16px] w-full">
        <div className="flex items-center">
          <BackIcon />
          <p className="ml-[15px] text-[20px] font-semibold text-black-2">
            응원글
          </p>
        </div>

        <ShareIcon />
      </div>
      <div className="flex px-[17px] py-[20px] items-start w-full shadow-[0_4px_4px_0px_rgba(0,0,0,0.11)] mb-[12px] rounded-[12px] flex-col">
        <div className="flex items-center mb-[30px]">
          <div className="p-[8px] bg-black-2 rounded-full w-[44px] h-[44px] mr-[11px]">
            <Image
              src="/img/Ranking.png"
              alt="four leaf"
              width={28}
              height={28}
            />
          </div>
          <div className="flex flex-col justify-start">
            <h2 className="text-black-2 text-[14px] font-medium">
              {message?.name}
            </h2>
            <div className="flex items-center">
              <ClockIcon />
              <p className="ml-[2px] text-black-3 text-[13px] font-light">
                {message?.created_at.split("T")[1].slice(0, 5)}
              </p>
            </div>
          </div>
        </div>
        <p className="text-black-3 text-[14px] font-medium">{message?.value}</p>
      </div>
      <Footer page="messages" />
    </div>
  );
};

export default MessagesDetail;
