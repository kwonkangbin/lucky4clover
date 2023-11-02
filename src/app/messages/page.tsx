"use client";

import Footer from "@/components/common/Footer";
import MessageComponent from "@/components/common/MessageComponent";
import { BackIcon, SearchIcon, ShareIcon } from "@/components/icon";
import { supabase } from "@/supabase";
import { useEffect, useState } from "react";
import Link from "next/link";

export interface IMessage {
  created_at: string;
  id: number;
  name: string | null;
  send_user: string | null;
  user: string | null;
  value: string | null;
}

const Messages = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  const fetchMessageData = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data } = await supabase
      .from("Message")
      .select(`*`)
      .eq("user", user?.id);

    if (data) {
      setMessages(data);
    }
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
        <div className="flex items-center gap-[30px]">
          <ShareIcon />
          <SearchIcon />
        </div>
      </div>

      {messages.map((message) => (
        <Link href={`/messages/${message.id}`}>
          <MessageComponent
            key={message.id}
            name={message.name}
            message={message.value}
          />
        </Link>
      ))}
      <Footer page="messages" />
    </div>
  );
};

export default Messages;
