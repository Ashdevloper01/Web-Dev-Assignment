import React from "react";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const citiesArray = ["New york", "San fransisco", "Tokyo", "Osaka"];

export const CitySelector = ({ onChange, value }: Props) => {
  return (
    <div className="mb-6">
      <h4 className="mb-3">City</h4>
      <select
        name="city"
        onChange={onChange}
        value={value}
        className="text-black px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
      >
        {citiesArray?.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
