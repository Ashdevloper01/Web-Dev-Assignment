import React from "react";

type Props = {
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fieldName: string;
  maxLength?: number;
  value: string | number;
};

export const InputField = ({
  type,
  placeholder,
  onChange,
  fieldName,
  maxLength,
  value,
}: Props) => {
  return (
    <div className="mb-6 sm:w-1/4 md:w-1/2 lg:w-1/2 xl:w-1/4 w-full">
      <h4 className="mb-2">{fieldName}</h4>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="px-4 py-2 rounded-lg w-full border focus:outline-none focus:border-blue-500 text-black"
        maxLength={maxLength}
      />
    </div>
  );
};
