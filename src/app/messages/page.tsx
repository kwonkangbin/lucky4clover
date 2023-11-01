import Footer from "@/components/common/Footer";
import MessageComponent from "@/components/common/MessageComponent";
import Rank from "@/components/common/Rank";
import { BackIcon, SearchIcon, ShareIcon } from "@/components/icon";
import Image from "next/image";

const Messages = () => {
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

      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 15].map((i) => (
        <MessageComponent
          key={i}
          name="Name"
          message="Lorem ipsum dolor sit ametfjldskajfioewjflkadlksamlck;xzjvixzcpojew;efa"
        />
      ))}
      <Footer page="messages" />
    </div>
  );
};

export default Messages;
