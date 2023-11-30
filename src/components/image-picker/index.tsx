import React, { useEffect, useRef } from "react";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  valueResetted: boolean;
  setValueResetted: (val: boolean) => void;
  image: File | null;
};

export const ImagePicker = ({
  onChange,
  valueResetted,
  setValueResetted,
  image,
}: Props) => {
  useEffect(() => {
    if (valueResetted) {
      const image = document.getElementById(
        "imageInput"
      ) as HTMLInputElement | null;
      if (image) {
        image.value = "";
      }
      setValueResetted(false);
    }
  }, [valueResetted, setValueResetted]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="mb-3">
      <h4 className="mb-3">Photo</h4>
      <input
        type="file"
        accept="image/*"
        id="imageInput"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      {/* Custom-styled button and text */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        onClick={handleButtonClick}
      >
        Choose Photo
      </button>
      <span className="ml-3" id="selectedFileName">
        {image ? image?.name : "No file chosen"}
      </span>
    </div>
  );
};
