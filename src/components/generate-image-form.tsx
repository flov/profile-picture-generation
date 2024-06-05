"use client";

import { Label } from "@/components/ui/label";
import { styles } from "@/config/prompts";
import { useRef, useState } from "react";
import { Style } from "@/config/prompts";

export function GenerateImageForm() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [gender, setGender] = useState("");
  const [selectedStyle, setSelectedStyle] = useState<Style>();

  console.log({ uploadedImage, gender, selectedStyle });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUploadedImage(event.target.files[0]);
  };
  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };
  const handleStyleSelect = (style) => {
    setSelectedStyle(style);
  };
  const generateFaceswap = () => {
    return "/faceswap.jpg";
  };

  const handleUploadImageClick = () => {
    fileInputRef?.current?.click();
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="max-w-4xl mx-auto p-8 sm:p-12 lg:p-16">
      <h1 className="text-3xl font-bold mb-8">Faceswap Generator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Upload Your Photo</h2>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
            {uploadedImage ? (
              <img
                src="/placeholder.svg"
                alt="Uploaded Image"
                width={300}
                height={300}
                className="rounded-lg"
              />
            ) : (
              <div className="text-gray-500 dark:text-gray-400">
                <UploadIcon
                  className="w-12 h-12 mb-2"
                  onClick={handleUploadImageClick}
                />
                <input
                  type="file"
                  className="hidden"
                  onChange={handleImageUpload}
                  ref={fileInputRef}
                />
              </div>
            )}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Select Your Gender</h2>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
            <div className="flex items-center gap-4">
              <Label className="flex items-center gap-2 font-normal">
                <div />
                Male
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <div />
                Female
              </Label>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Select a Character</h2>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-52 overflow-y-scroll">
          {styles("male").map((style) => (
            <div
              key={style.label}
              className={`rounded-lg overflow-hidden cursor-pointer ${
                selectedStyle?.label === style.label
                  ? "border-4 border-primary"
                  : "hover:shadow-lg"
              }`}
              onClick={() => handleStyleSelect(style)}
            >
              <img
                src={style.image}
                alt={style.label}
                width={200}
                height={200}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Your Faceswap</h2>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex items-center justify-center">
          {uploadedImage && selectedStyle ? (
            <img
              src="/placeholder.svg"
              alt="Faceswap Image"
              width={500}
              height={500}
              className="rounded-lg"
            />
          ) : (
            <div className="text-gray-500 dark:text-gray-400">
              <ImageIcon className="w-12 h-12 mb-2" />
              <p>Your faceswap image will be displayed here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ImageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}

function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}
