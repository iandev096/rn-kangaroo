import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Size, Variant } from "src/types/button";
import { getStyles } from "./styles";

type Props = {
  title: string;
  left?: React.ReactNode | React.ReactNode[];
  variant?: Variant;
  size?: Size;
} & TouchableOpacity["props"];

function RoundedButton({
  title,
  left,
  variant = "normal",
  size = "normal",
  style = {},
  ...props
}: Props) {
  const styles = getStyles(variant, size);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[style, styles.container]}
      {...props}
    >
      <View style={styles.group}>
        {left && <View style={styles.left}>{left}</View>}
        <Text numberOfLines={1} style={styles.text}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default RoundedButton;
