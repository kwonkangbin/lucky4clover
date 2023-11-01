import Image from "next/image";

interface IRankingProps {
  rank: number;
  name: string;
  messages: number;
}

const Rank = ({ rank, name, messages }: IRankingProps) => {
  return (
    <div className="flex px-[28px] py-[20px] items-center justify-between w-full shadow-[0_4px_4px_0px_rgba(0,0,0,0.11)] mb-[12px] rounded-[12px]">
      <div className="flex items-center">
        <p className="text-green-1 text-[32px] font-bold mr-[20px]">{rank}</p>
        <div className="p-[8px] bg-black-2 rounded-full w-[36px] h-[36px] mr-[11px]">
          <Image
            src="/img/Ranking.png"
            alt="four leaf"
            width={20}
            height={20}
          />
        </div>
        <h2 className="text-black-1 text-[16px] font-bold">{name}</h2>
      </div>
      <p>받은 응원글: {messages}개</p>
    </div>
  );
};

export default Rank;
