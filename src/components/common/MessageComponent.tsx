import Image from "next/image";
import Link from "next/link";

interface IMessageComponentProps {
  id: number | null;
  name: string | null;
  message: string | null;
}

const MessageComponent = ({ name, message, id }: IMessageComponentProps) => {
  return (
    <Link href={`/messages/${id}`} className="w-full">
      <div className="flex px-[17px] py-[20px] items-center justify-between w-full shadow-[0_4px_4px_0px_rgba(0,0,0,0.11)] mb-[12px] rounded-[12px]">
        <div className="flex items-center">
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
        <p className="text-black-3 text-[14px] font-medium overflow-hidden text-ellipsis whitespace-nowrap w-[184px] text-right">
          {message}
        </p>
      </div>
    </Link>
  );
};

export default MessageComponent;
