import { StatusResponse } from "@/types";
import React, { FC, Fragment } from "react";
import { Skeleton } from "./ui/skeleton";

interface YourCharactersProps {
  runs: StatusResponse[];
}

export const YourProfilePictures: FC<YourCharactersProps> = ({ runs }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Your profile pictures</h2>
        <p className="text-gray-500 dark:text-gray-400">
          View your previously generated profile pictures.
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
                <div>failed</div>
              )}
            </Fragment>
          ))}
      </div>
    </div>
  );
};
