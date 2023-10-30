import React, { HTMLAttributes } from "react";

interface PageTitleBoxProps extends HTMLAttributes<HTMLDivElement> {
  step?: number;
  max?: number;
  process: string;
  question: string;
}

const PageTitleBox = ({
  step = 1,
  max = 8,
  process,
  question,
  ...props
}: PageTitleBoxProps) => {
  return (
    <div className="flex items-center w-1/2" {...props}>
      <h1
        className=" font-headline-3 whitespace-pre"
        // eslint-disable-next-line
        dangerouslySetInnerHTML={{ __html: question }}
      />
      <hgroup className=" flex flex-col ml-auto">
        <span className=" font-body-2 text-gray-300 ml-auto">
          {step}/{max}단계
        </span>
        <h2 className=" font-headline-6 text-gray-300">{process}</h2>
      </hgroup>
    </div>
  );
};

export default PageTitleBox;
