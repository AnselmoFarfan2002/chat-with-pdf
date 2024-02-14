import { Provider } from "react-redux";
import store from "../store";
import App from "./App";

export default function AppRoot() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
