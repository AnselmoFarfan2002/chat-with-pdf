import { configureStore } from "@reduxjs/toolkit";
import appStateReducer from "./reducer/app-state-reducer";

const store = configureStore({ reducer: appStateReducer });

export default store;
