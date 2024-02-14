import useFileChooser from "../hooks/useFileChooser.tsx";
import Button from "./Common/Button/index.tsx";
import Dropzone from "./Common/Dropzone/index.tsx";
import {
  actionSetChat,
  actionSetError,
  actionSetLoading,
} from "../reducer/app-state-reducer.tsx";
import { useDispatch } from "react-redux";

export default function Upload() {
  const { files, handleChange } = useFileChooser();
  const dispatch = useDispatch();

  const onClick = async () => {
    const formData = new FormData();
    formData.append("file", files[0]);

    dispatch(actionSetLoading);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (res.ok) dispatch(actionSetChat);
    else dispatch(actionSetError);
  };

  return (
    <>
      <Dropzone {...{ files, handleChange }} />
      <Button onClick={onClick} disabled={files.length == 0}>
        Upload
      </Button>
    </>
  );
}
