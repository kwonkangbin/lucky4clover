const PopUp = ({ content }: { content: string }) => {
  return (
    <div className="w-screen h-sreen bg-rgba(27, 27, 27, 0.70)">
      <div className="w-[80%] h-[116px] rounded-[20px] flex justify-center items-center">
        <p className="font-bold text-green-1 text-[18px]">{content}</p>
      </div>
    </div>
  );
};

export default PopUp;
