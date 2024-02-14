import type { ActionType } from "../types/Reducer/action";

export default function appStateReducer(state: number = 0, action: ActionType) {
  switch (action.type) {
    case "@app/init":
      return 0;
      break;
    case "@app/loading":
      return 1;
      break;
    case "@app/chat":
      return 2;
      break;
    case "@app/error":
      return -1;
      break;

    default:
      return state;
  }
}

export const actionSetInit = {
  type: "@app/init",
};
export const actionSetLoading = {
  type: "@app/loading",
};
export const actionSetChat = {
  type: "@app/chat",
};
export const actionSetError = {
  type: "@app/error",
};
