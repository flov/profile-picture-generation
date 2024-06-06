import React, { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";
import Compressor from "compressorjs";

interface UploadImageProps {
  setBase64Image: Dispatch<SetStateAction<string | undefined>>;
  base64Image: string | undefined;
}

export const UploadImage = ({
  base64Image,
  setBase64Image,
}: UploadImageProps) => {
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
    console.log("click");
    fileInputRef.current?.click();
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      {base64Image ? (
        <img
          alt="uploaded image"
          src={base64Image}
          className="rounded h-48 object-contain"
          onClick={handleFileInputClick}
        />
      ) : (
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
      )}
    </>
  );
};

function UploadIcon(props: any) {
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
