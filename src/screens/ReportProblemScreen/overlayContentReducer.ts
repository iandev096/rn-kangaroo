export const initialOverlayState = {
  showCommonIssues: false,
  showCustomIssues: false,
  showSubmitProgress: false,
};

type State = typeof initialOverlayState;

export type Action = { type: keyof State | "reset" };

export default function overlayContentReducer(
  state = initialOverlayState,
  action: Action
): State {
  if (action.type === "showCommonIssues") {
    return { ...initialOverlayState, showCommonIssues: true };
  }

  if (action.type === "showCustomIssues") {
    return { ...initialOverlayState, showCustomIssues: true };
  }

  if (action.type === "showSubmitProgress") {
    return { ...initialOverlayState, showSubmitProgress: true };
  }

  if (action.type === "reset") {
    return { ...initialOverlayState };
  }

  if (action.type) {
    throw Error("Unknown action");
  }

  return state;
}
