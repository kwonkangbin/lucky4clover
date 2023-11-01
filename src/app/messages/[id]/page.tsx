import Footer from "@/components/common/Footer";
import { BackIcon, ClockIcon, ShareIcon } from "@/components/icon";
import Image from "next/image";

const MessagesDetail = () => {
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
            <h2 className="text-black-2 text-[14px] font-medium">NAME</h2>
            <div className="flex items-center">
              <ClockIcon />
              <p className="ml-[2px] text-black-3 text-[13px] font-light">
                18:32
              </p>
            </div>
          </div>
        </div>
        <p className="text-black-3 text-[14px] font-medium">
          Lorem ipsum dolor sit amet consectetur. Quis netus facilisi
          pellentesque eget nibh aenean est vitae. Urna potenti viverra viverra
          nisl id volutpat. Netus id sit nunc morbi leo posuere turpis at fusce.
          Consequat sem laoreet gravida eget auctor. Vehicula maecenas
          pellentesque duis suspendisse suspendisse. Proin habitasse tortor
          feugiat venenatis viverra ultrices sit.
        </p>
      </div>
      <Footer page="messages" />
    </div>
  );
};

export default MessagesDetail;
