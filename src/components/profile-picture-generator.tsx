"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { UploadImage } from "./ui/upload-image";
import { SelectGender } from "./ui/select-gender";
import { YourProfilePictures } from "./your-profile-pictures";
import { StatusResponse } from "@/types";
import { SelectStyle } from "./ui/select-style";

export function ProfilePictureGenerator() {
  const [base64Image, setBase64Image] = useState<string>();
  const [gender, setGender] = useState("female");
  const [runs, setRuns] = useState<StatusResponse[]>([]);
  const [style, setStyle] = useState<string>("business");

  const handleGenerateCharacter = async () => {
    if (!base64Image) return;
    const body = JSON.stringify({
      base64Image: base64Image.split(",")[1],
      gender,
      style,
    });
    const res = await fetch("/api/generate-profile-picture", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
    const runData = (await res.json()) as StatusResponse;

    setRuns((prevRuns) => [...prevRuns, runData]);
  };

  // polling logic
  useEffect(() => {
    const hasPendingRuns = runs.some(
      (run) => run.status === "IN_QUEUE" || run.status === "IN_PROGRESS",
    );

    if (!hasPendingRuns) return;

    const interval = setInterval(async () => {
      const updatedRuns = await Promise.all(
        runs.map(async (run) => {
          if (run.status === "IN_QUEUE" || run.status === "IN_PROGRESS") {
            // post request
            const res = await fetch(`/api/status/${run.id}`, {
              method: "POST",
            });
            const updatedRun = await res.json();
            return updatedRun;
          }
          return run;
        }),
      );
      setRuns(updatedRuns);
    }, 1000);

    return () => clearInterval(interval);
  }, [runs]);

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Create Your AI profile picture
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Upload an image, select your gender, and choose a style to
              generate a unique AI-created profile picture.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <UploadImage
              base64Image={base64Image}
              setBase64Image={setBase64Image}
            />
            <SelectGender setGender={setGender} gender={gender} />
            <SelectStyle style={style} setStyle={setStyle} />

            <Button
              disabled={base64Image && gender && style ? false : true}
              className="w-full"
              size="lg"
              onClick={handleGenerateCharacter}
            >
              Generate profile picture
            </Button>
          </div>
        </div>
        <YourProfilePictures runs={runs} />
      </div>
    </div>
  );
}
