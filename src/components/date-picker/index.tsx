import React from "react";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const DatePicker = ({ onChange, value }: Props) => {
  return (
    <div className="mb-6">
      <h4 className="mb-3">Date of Birth</h4>
      <input
        type="date"
        className="text-black px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
