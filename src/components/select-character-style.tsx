"use client";

import { styles } from "@/config/prompts";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";

type SelectCharacterStyleProps = {
  setStyle: Dispatch<SetStateAction<string>>;
};

export const SelectCharacterStyle: FC<SelectCharacterStyleProps> = ({
  setStyle,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>();

  useEffect(() => {
    if (selectedIndex === undefined) return;
    setStyle(styles("")[selectedIndex].label);
  }, [selectedIndex, setStyle]);

  const [prompt, setPrompt] = useState("");

  useEffect(() => {
    setSelectedIndex(undefined);
    setStyle(prompt);
  }, [prompt]);

  return (
    <div>
      <label className="block font-medium mb-2" htmlFor="style">
        Select your style
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {styles("").map((s, index) => (
          <div className="flex flex-col align-middle" key={index}>
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative overflow-hidden rounded-lg transition-all ${
                selectedIndex === index
                  ? "ring-2 ring-primary"
                  : "hover:brightness-95 focus:brightness-95"
              }`}
            >
              <Image
                src={s.image}
                alt={s.label}
                width={300}
                height={300}
                className="object-cover w-full aspect-square"
              />
              {selectedIndex === index && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <CheckIcon className="w-8 h-8 text-white" />
                </div>
              )}
              <p className="text-sm">{s.label}</p>
            </button>
          </div>
        ))}
      </div>

      <div>
        <label htmlFor="prompt" className="block font-medium my-2">
          Or write your own prompt:
        </label>
        <Textarea
          id="prompt"
          name="prompt"
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:focus:border-gray-600 dark:focus:ring-gray-600"
          placeholder="Describe the image you want to generate..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>
    </div>
  );
};

function CheckIcon(props: any) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
