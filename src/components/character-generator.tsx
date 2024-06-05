"use client";

import { Style } from "@/config/prompts";
import React, { useRef, useState } from "react";
import { styles } from "@/config/prompts";
import { Button } from "./ui/button";

export const CharacterGenerator = () => {
  const [uploadedImage, setUploadedImage] = useState<File>();
  const [gender, setGender] = useState("");
  const [selectedStyle, setSelectedStyle] = useState<Style>();

  console.log({ uploadedImage, gender, selectedStyle });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setUploadedImage(event.target.files[0]);
  };
  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };
  const handleStyleSelect = (style: Style) => {
    setSelectedStyle(style);
  };
  const generateFaceswapImage = () => {
    return "/faceswap.jpg";
  };

  const handleUploadImageClick = () => {
    fileInputRef?.current?.click();
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Generate Faceswap Image
        </h1>
        <div className="mb-4">
          <label htmlFor="image" className="block font-medium mb-2">
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            className="w-full bg-gray-200 dark:bg-gray-700 rounded-md p-2"
            onChange={handleImageUpload}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block font-medium mb-2">
            Gender
          </label>
          <div className="flex items-center">
            <label className="mr-4">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={handleGenderChange}
                className="mr-2"
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={handleGenderChange}
                className="mr-2"
              />
              Female
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2">Select Style</label>
          <div className="grid grid-cols-3 gap-4">
            {styles("male").map((style) => (
              <div
                key={style.id}
                className={`cursor-pointer rounded-md overflow-hidden border-2 ${
                  selectedStyle?.id === style.id
                    ? "border-blue-500 dark:border-blue-400"
                    : "border-transparent"
                }`}
                onClick={() => handleStyleSelect(style)}
              >
                <img
                  src="/placeholder.svg"
                  alt={`Style ${style.id}`}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            onClick={() => console.log("hey")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
          >
            Generate
          </Button>
        </div>
      </div>
    </div>
  );
};
