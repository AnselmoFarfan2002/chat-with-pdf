import { useDispatch } from "react-redux";
import { actionSetInit } from "../reducer/app-state-reducer";
import Button from "./Common/Button";
import Paper from "./Common/Paper/intex";
import IconFaceIdError from "./Icons/FaceIdError";

export default function Error() {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(actionSetInit);
  };

  return (
    <Paper>
      <IconFaceIdError className="h-12 w-12 mx-auto" />
      Something bad has ocurred... Try again later
      <div>
        <Button
          className="!px-5 text-gray-200 bg-gray-800/80 hover:bg-gray-800"
          onClick={onClick}
        >
          Try again
        </Button>
      </div>
    </Paper>
  );
}
