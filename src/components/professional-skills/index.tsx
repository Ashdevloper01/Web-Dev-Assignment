import React from "react";

type Props = {
  checked: boolean[];
  onChange: (index: number) => void;
  professionalSkillsArray: string[];
};

export const ProfessionalSkills = ({
  onChange,
  checked = [],
  professionalSkillsArray,
}: Props) => {
  return (
    <div className="mb-6">
      <h4 className="mb-3">Professional Skills</h4>
      {professionalSkillsArray?.map((item, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={checked[index]}
            onChange={() => onChange(index)}
            className="mr-2 text-blue-500"
          />
          <label htmlFor={`skill-${index}`} className="cursor-pointer">
            {item}
          </label>
        </div>
      ))}
    </div>
  );
};
