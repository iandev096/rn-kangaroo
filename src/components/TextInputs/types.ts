import { TextInput, View } from "react-native";

export type Size = "medium" | "small";
export type Status = "error" | "success" | "normal";

export type CustomTextInputProps = {
  label?: string;
  size?: Size;
  status?: Status;
  disabled?: boolean;
  containerStyle?: View["props"]["style"];
  textInputContainerStyle?: View["props"]["style"];
} & TextInput["props"];

export type StyleConfig = {
  size: Size;
  status: Status;
  disabled: boolean;
  focus: boolean;
};
