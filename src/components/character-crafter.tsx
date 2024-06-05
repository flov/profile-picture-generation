"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Style } from "@/config/prompts";
import { UploadImage } from "./ui/upload-image";
import { SelectGender } from "./ui/select-gender";
import { styles } from "@/config/prompts";
import Image from "next/image";
import { SelectCharacter } from "./ui/select-character";

export function CharacterCrafter() {
  const [base64Image, setBase64Image] = useState<string>();
  const [gender, setGender] = useState("female");
  const [character, setCharacter] = useState<string>();

  console.log({ base64Image, gender, character });

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
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
            {base64Image ? (
              <img
                alt="uploaded image"
                src={base64Image}
                className="rounded h-48 object-contain"
              />
            ) : (
              <UploadImage setBase64Image={setBase64Image} />
            )}
            <SelectGender setGender={setGender} gender={gender} />
            <SelectCharacter
              character={character}
              setCharacter={setCharacter}
            />

            <Button
              disabled={base64Image && gender && character ? false : true}
              className="w-full"
              size="lg"
            >
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
