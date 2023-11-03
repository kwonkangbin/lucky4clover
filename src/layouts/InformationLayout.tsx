import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  button: ReactNode;
  backIcon: ReactNode;
  title: string;
}

const InformationLayout = ({ children, button, backIcon, title }: Props) => {
  return (
    <div className="w-[390px] h-screen mx-auto px-6 flex flex-col items-center relative pt-[58px] pb-[50px]">
      <div className="flex justify-between items-center w-full">{backIcon}</div>
      <h1 className="mt-[34.25px] text-[27px] font-semibold w-full text-start text-black-1">
        {title}
      </h1>
      {children}
      <div className="h-full flex flex-col">
        <div className="h-full" />
        {button}
      </div>
    </div>
  );
};

export default InformationLayout;
