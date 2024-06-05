"use client";

import React, { Dispatch, FC, SetStateAction } from "react";
import { Style, styles } from "@/config/prompts";
import Image from "next/image";

interface SelectCharacterProps {
  character: string | undefined;
  setCharacter: Dispatch<SetStateAction<string | undefined>>;
}

export const SelectCharacter: FC<SelectCharacterProps> = ({
  character,
  setCharacter,
}) => {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-2">Select Style</label>
      <div className="grid grid-cols-3 gap-4">
        {styles("male").map((style) => (
          <div
            key={style.label}
            className={`cursor-pointer rounded-md overflow-hidden border-2 ${
              character === style.label
                ? "border-blue-500 dark:border-blue-400"
                : "border-transparent"
            }`}
            onClick={() => setCharacter(style.label)}
          >
            <Image
              src={style.image}
              alt={style.label}
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
