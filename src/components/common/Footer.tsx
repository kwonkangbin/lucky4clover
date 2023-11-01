import Link from "next/link";
import { RankingIcon, HomeIcon, PostIcon } from "../icon";

interface IFooterProps {
  page: "ranking" | "home" | "messages";
}

const Footer = ({ page }: IFooterProps) => {
  return (
    <div className="fixed bottom-0 max-w-md px-6 w-full">
      <div className="bg-green-1 flex w-full pt-[14px] px-[50px] pb-[14px] rounded-t-[12px] justify-start">
        <div>
          <Link href="/ranking">
            <div className="flex flex-col items-center justify-center gap-1 cursor-pointer">
              <RankingIcon select={page === "ranking"} />
              <p
                className={`text-[14px] font-semibold text-white text-center ${
                  page !== "ranking" && "text-opacity-70"
                }`}
              >
                랭킹
              </p>
            </div>
          </Link>
        </div>
        <div className="mx-auto">
          <Link href="/home">
            <div className="flex flex-col items-center justify-center  gap-1 cursor-pointer">
              <HomeIcon select={page === "home"} />
              <p
                className={`text-[14px] font-semibold text-white text-center ${
                  page !== "home" && "text-opacity-70"
                }`}
              >
                홈
              </p>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/messages">
            <div className="flex flex-col items-center justify-center gap-1 cursor-pointer">
              <PostIcon select={page === "messages"} />
              <p
                className={`text-[14px] font-semibold text-white text-center ${
                  page !== "messages" && "text-opacity-70"
                }`}
              >
                응원글
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
