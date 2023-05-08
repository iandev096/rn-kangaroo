import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export type Variant = "normal" | "alternate";
export type Size = "md" | "sm";

export type PillProps = {
  title: string;
  variant?: Variant;
  size?: Size;
  right?: React.ReactNode;
  left?: React.ReactNode;
  style?: View["props"]["style"];
  textStyle?: Text["props"]["style"];
  onPress?: TouchableOpacity["props"]["onPress"];
};
