"use client";

import Footer from "@/components/common/Footer";
import MessageComponent from "@/components/common/MessageComponent";
import { BackIcon, SearchIcon } from "@/components/icon";
import { useObserver } from "@/hooks/useObserver";
import { supabase } from "@/supabase";
import { useRouter } from "next/navigation";
import { Fragment, useRef } from "react";
import { useInfiniteQuery } from "react-query";

export interface IMessage {
  created_at: string;
  id: number;
  name: string | null;
  send_user: string | null;
  user: string | null;
  value: string | null;
}

const LIMIT = 30;

const Messages = () => {
  const router = useRouter();

  const fetchMessageData = async ({ pageParam = 0 }) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data } = await supabase
      .from("Message")
      .select(`*`)
      .eq("user", user?.id)
      .range(pageParam, pageParam - 1 + LIMIT);

    return data;
  };
  const bottom = useRef(null);

  const { data, fetchNextPage } = useInfiniteQuery(
    ["messages"],
    fetchMessageData,
    {
      getNextPageParam: (lastPage, page) => {
        return page.length * LIMIT;
      },
    },
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onIntersect = ([entry]: any) => {
    if (
      entry.isIntersecting &&
      data?.pages[data.pages.length - 1]?.length === LIMIT
    ) {
      fetchNextPage();
    }
  };

  useObserver({
    target: bottom,
    onIntersect,
  });

  return (
    <div className="w-[390px] mx-auto px-6 flex flex-col items-center relative pb-[93px]">
      <div className="flex justify-between items-center pt-[30px] pb-[16px] w-full">
        <div className="flex items-center">
          <div onClick={() => router.back()} className="cursor-pointer">
            <BackIcon />
          </div>
          <p className="ml-[15px] text-[20px] font-semibold text-black-2">
            응원글
          </p>
        </div>

        <SearchIcon />
      </div>

      {data?.pages.map((page, index) => (
        <Fragment key={index}>
          {page?.map((i) => (
            <MessageComponent
              key={i.id}
              id={i.id}
              name={i.name}
              message={i.value}
            />
          ))}
        </Fragment>
      ))}
      <div ref={bottom} />
      <Footer page="messages" />
    </div>
  );
};

export default Messages;
