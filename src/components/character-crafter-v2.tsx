"use client";

import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChangeEvent, useRef, useState } from "react";
import Compressor from "compressorjs";
import { Style } from "@/config/prompts";

export function CharacterCrafterV2() {
  const [base64Image, setBase64Image] = useState<string>();
  const [gender, setGender] = useState("");
  const [selectedStyle, setSelectedStyle] = useState<Style>();

  console.log({ base64Image, gender, selectedStyle });

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };
  const handleStyleSelect = (style: Style) => {
    setSelectedStyle(style);
  };

  const handleUploadImageClick = () => {
    fileInputRef?.current?.click();
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    console.log("file input change");
    const file = event.target.files[0];
    if (file) {
      if (file.size > 3 * 1024 * 1024) {
        // Directly compress the file without converting it to a data URL first
        new Compressor(file, {
          quality: 0.7, // Compression quality
          convertSize: 0,
          success(compressedResult) {
            // Convert compressed file to Base64
            const reader = new FileReader();
            reader.readAsDataURL(compressedResult);
            reader.onloadend = () => {
              setBase64Image(reader.result as string);
            };
          },
          error(e) {
            console.log(e.message);
          },
        });
      } else {
        // Convert to Base64 directly for files under the size limit
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setBase64Image(reader.result as string);
        };
      }
    }
  };

  const handleFileInputClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Create Your Character</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Upload an image, select your gender, and choose a style to
              generate a unique AI-created character.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block font-medium mb-2" htmlFor="image">
                Upload Image
              </label>
              <div className="flex items-center justify-center w-full">
                <label
                  className="flex flex-col items-center justify-center w-full h-64 bg-gray-50 dark:bg-gray-900 rounded-lg border-2 border-gray-300 dark:border-gray-700 border-dashed cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  htmlFor="image"
                  onClick={handleFileInputClick}
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <UploadIcon className="w-10 h-10 text-gray-400" />
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span>
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      PNG, JPG
                    </p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileInputChange}
                    ref={fileInputRef}
                  />
                </label>
              </div>
            </div>
            <div>
              <label className="block font-medium mb-2" htmlFor="gender">
                Gender
              </label>
              <RadioGroup
                className="flex items-center gap-4"
                defaultValue="male"
                id="gender"
              >
                <Label
                  className="flex items-center gap-2 cursor-pointer"
                  htmlFor="gender-male"
                >
                  <RadioGroupItem id="gender-male" value="male" />
                  Male
                </Label>
                <Label
                  className="flex items-center gap-2 cursor-pointer"
                  htmlFor="gender-female"
                >
                  <RadioGroupItem id="gender-female" value="female" />
                  Female
                </Label>
                <Label
                  className="flex items-center gap-2 cursor-pointer"
                  htmlFor="gender-other"
                >
                  <RadioGroupItem id="gender-other" value="other" />
                  Other
                </Label>
              </RadioGroup>
            </div>
            <div>
              <label className="block font-medium mb-2">Style</label>
              <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
                <RadioGroup className="flex gap-4">
                  <Label
                    className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden cursor-pointer"
                    htmlFor="style-cowboy"
                  >
                    <RadioGroupItem
                      className="peer sr-only"
                      id="style-cowboy"
                      value="cowboy"
                    />
                    <Link className="absolute inset-0 z-10" href="#">
                      <span className="sr-only">Select Cowboy</span>
                    </Link>
                    <img
                      alt="Cowboy"
                      className="w-full h-auto object-cover"
                      height={300}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "300/300",
                        objectFit: "cover",
                      }}
                      width={300}
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2">Cowboy</h3>
                    </div>
                  </Label>
                  <Label
                    className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden cursor-pointer"
                    htmlFor="style-astronaut"
                  >
                    <RadioGroupItem
                      className="peer sr-only"
                      id="style-astronaut"
                      value="astronaut"
                    />
                    <Link className="absolute inset-0 z-10" href="#">
                      <span className="sr-only">Select Astronaut</span>
                    </Link>
                    <img
                      alt="Astronaut"
                      className="w-full h-auto object-cover"
                      height={300}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "300/300",
                        objectFit: "cover",
                      }}
                      width={300}
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2">Astronaut</h3>
                    </div>
                  </Label>
                  <Label
                    className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden cursor-pointer"
                    htmlFor="style-wizard"
                  >
                    <RadioGroupItem
                      className="peer sr-only"
                      id="style-wizard"
                      value="wizard"
                    />
                    <Link className="absolute inset-0 z-10" href="#">
                      <span className="sr-only">Select Wizard</span>
                    </Link>
                    <img
                      alt="Wizard"
                      className="w-full h-auto object-cover"
                      height={300}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "300/300",
                        objectFit: "cover",
                      }}
                      width={300}
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2">Wizard</h3>
                    </div>
                  </Label>
                </RadioGroup>
              </div>
            </div>
            <Button className="w-full" size="lg">
              Generate Character
            </Button>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Your Characters</h2>
            <p className="text-gray-500 dark:text-gray-400">
              View your previously generated characters.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
              <img
                alt="Character"
                className="w-full h-auto object-cover"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Cowboy</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <UserIcon className="w-4 h-4" />
                  Male
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
              <img
                alt="Character"
                className="w-full h-auto object-cover"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Astronaut</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <UserIcon className="w-4 h-4" />
                  Female
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
              <img
                alt="Character"
                className="w-full h-auto object-cover"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Wizard</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <UserIcon className="w-4 h-4" />
                  Other
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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

function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
