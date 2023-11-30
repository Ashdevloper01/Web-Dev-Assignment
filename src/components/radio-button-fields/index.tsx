import React from "react";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const RadioButton = ({ onChange, value }: Props) => {
  return (
    <div className="mb-6">
      <h4 className="mb-3">Gender</h4>
      <div className="flex items-center space-x-3">
        <input
          type="radio"
          id="male"
          name="gender"
          value="Male"
          onChange={onChange}
          checked={value === "Male"}
          className="text-blue-500"
        />
        <label htmlFor="male" className="cursor-pointer">
          Male
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input
          type="radio"
          id="female"
          name="gender"
          value="Female"
          onChange={onChange}
          checked={value === "Female"}
          className="text-pink-500"
        />
        <label htmlFor="female" className="cursor-pointer">
          Female
        </label>
      </div>
      <div className="flex items-center space-x-3">
        <input
          type="radio"
          id="others"
          name="gender"
          value="Others"
          onChange={onChange}
          checked={value === "Others"}
          className="text-purple-500"
        />
        <label htmlFor="others" className="cursor-pointer">
          Others
        </label>
      </div>
    </div>
  );
};
