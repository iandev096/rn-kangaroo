import { createContext } from "react";
import { TextFieldContextState } from "./types";

export const initialState: TextFieldContextState = {
  setFocus: () => {},
  focus: false,
  size: "medium",
  disabled: false,
  status: "normal",
};

const TextFieldContext = createContext(initialState);

export default TextFieldContext;
