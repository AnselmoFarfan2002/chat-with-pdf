import { useState, type ChangeEvent } from "react";

export default function useFileChooser() {
  const [files, setFiles] = useState<Array<File>>([] as Array<File>);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFiles(e.target.files ? Array.from(e.target.files) : []);
  }

  return {
    handleChange,
    files,
  };
}
