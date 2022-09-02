import { TextInput } from "react-native";

export type Size = "medium" | "small";
export type Status = "error" | "success" | "normal";
export type TextFieldProps = {
  label?: string;
  size?: Size;
  status?: Status;
  disabled?: boolean;
} & TextInput["props"];

export type StyleConfig = {
  size: Size;
  status: Status;
  disabled: boolean;
  focus: boolean;
};
