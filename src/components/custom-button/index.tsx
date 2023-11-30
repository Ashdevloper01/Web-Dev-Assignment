import React from "react";

type Props = {
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
  value: string;
};

export const CustomButton = ({ value, onClick }: Props) => {
  
  return (
    <div
      className="mb-3 bg-white sm:w-1/12 md:w-1/4 lg:w-1/4 xl:w-1/12 w-1/2 h-10 rounded-xl flex items-center justify-center cursor-pointer mr-2"
      onClick={onClick}
    >
      <p className="text-black">{value}</p>
    </div>
  );
};
