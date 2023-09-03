import { Control } from "react-hook-form";
import { TextInput, TextStyle, View } from "react-native";

export type Size = "medium" | "small";
export type Status = "error" | "success" | "normal";

export type CustomTextInputProps = {
  label?: string;
  size?: Size;
  status?: Status;
  disabled?: boolean;
  containerStyle?: View["props"]["style"];
  labelStyle?: TextStyle;
  textInputContainerStyle?: View["props"]["style"];
  left?: React.ReactNode;
} & TextInput["props"];

export type PhoneTextInputProps = {
  countryCode?: string;
};

export type InputControlProps = {
  name: string;
  control: Control<any>;
  defaultValue?: string;
};

export type StyleConfig = {
  size: Size;
  status: Status;
  disabled: boolean;
  focus: boolean;
};
