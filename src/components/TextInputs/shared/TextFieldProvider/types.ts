import { Size, Status } from "../types";

export type TextFieldContextState = {
  focus: boolean;
  setFocus: React.Dispatch<React.SetStateAction<boolean>>;
  size: Size;
  disabled: boolean;
  status: Status;
};
