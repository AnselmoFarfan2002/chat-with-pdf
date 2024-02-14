import { useEffect, useRef, useState, type ChangeEvent } from "react";
import IconFilePDF from "../../Icons/FilePDF";
import IconFileCheck from "../../Icons/FileCheck";
import useFileChooser from "../../../hooks/useFileChooser";

export default function Dropzone({
  files,
  handleChange,
}: {
  files: Array<File>;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  const ref = useRef<HTMLInputElement>(null);

  function handleClick() {
    ref.current?.click();
  }

  return (
    <>
      <button
        className="bg-gray-600/90 hover:bg-gray-600 p-5 rounded-2xl text-gray-300 focus:outline-gray-300 focus:outline-2 w-full"
        onClick={handleClick}
      >
        <div className="rounded-lg border-2 border-dashed p-5 border-gray-400 text-center flex flex-col justify-center gap-2">
          {files.length > 0 ? (
            <>
              <IconFileCheck className="w-10 h-10 mx-auto" />
              {files[0].name}
            </>
          ) : (
            <>
              <IconFilePDF className="w-10 h-10 mx-auto" />
              Select or drag and drop your PDF here
            </>
          )}
        </div>
      </button>
      <input
        className="hidden"
        type="file"
        ref={ref}
        onChange={handleChange}
        accept="application/pdf"
      />
    </>
  );
}
