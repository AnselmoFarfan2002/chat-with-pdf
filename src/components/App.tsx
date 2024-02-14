import Upload from "./Upload";
import Loading from "./Loading";
import Error from "./Error";
import Chat from "./Chat";
import { useSelector } from "react-redux";

export default function App() {
  const appState = useSelector<number>((state: number) => state);

  return (
    <div className="text-center w-full">
      <div className="mx-auto max-w-3xl w-full flex flex-col gap-5">
        {appState === 0 && <Upload />}
        {appState === 1 && <Loading />}
        {appState === 2 && <Chat />}
        {appState === -1 && <Error />}
      </div>
    </div>
  );
}
