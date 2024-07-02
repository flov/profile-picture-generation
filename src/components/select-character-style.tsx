"use client";

import { styles } from "@/config/prompts";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";

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

  return (
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
