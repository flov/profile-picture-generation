"use client";

import { Button } from "@/components/ui/button";
import { FC, Fragment, useEffect, useState } from "react";
import { StatusResponse } from "@/types";
import { UploadImage } from "../ui/upload-image";
import { SelectGender } from "../ui/select-gender";
import { Skeleton } from "../ui/skeleton";
import { Badge } from "lucide-react";
import { SelectCharacterStyle } from "../select-character-style";

export const CharacterCrafter: FC = () => {
  const [base64Image, setBase64Image] = useState<string>();
  const [gender, setGender] = useState("female");
  const [runs, setRuns] = useState<StatusResponse[]>([]);
  const [style, setStyle] = useState<string>("");

  const handleGenerateCharacter = async () => {
    if (!base64Image) return;
    const body = JSON.stringify({
      base64Image: base64Image.split(",")[1],
      gender,
      style,
    });
    const res = await fetch("/api/generate-character", {
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

  console.log(style);

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Craft a character</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Upload an image, select your gender, and choose a style to
              generate your unique AI fantasy character.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <UploadImage
              base64Image={base64Image}
              setBase64Image={setBase64Image}
            />
            <SelectGender setGender={setGender} gender={gender} />
            <SelectCharacterStyle setStyle={setStyle} />

            <Button
              disabled={base64Image && gender && style ? false : true}
              className="w-full"
              size="lg"
              onClick={handleGenerateCharacter}
            >
              Generate character
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
          <div className="grid gap-4">
            {runs
              .slice(0)
              .reverse()
              .map((run) => (
                <Fragment key={run.id}>
                  {run.status === "IN_QUEUE" || run.status === "IN_PROGRESS" ? (
                    <div className="flex flex-col space-y-3">
                      <Skeleton className="h-[450px] w-full rounded-xl" />
                    </div>
                  ) : run.status === "COMPLETED" ? (
                    <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
                      <img
                        alt="Character"
                        className="w-full h-auto object-cover"
                        height={300}
                        src={run.output.message}
                        style={{
                          aspectRatio: "300/300",
                          objectFit: "cover",
                        }}
                        width={300}
                      />
                    </div>
                  ) : (
                    <Badge className="bg-red-500 text-white">
                      Failed - please try again
                    </Badge>
                  )}
                </Fragment>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
