import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Variant } from "src/types/button";
import Slot from "../Slot";
import getStyles from "./styles";

type Props = {
  title: string;
  variant?: Variant;
  left?: React.ReactNode;
} & TouchableOpacity["props"];

function Button({
  title,
  style = {},
  variant = "normal",
  left,
  ...props
}: Props) {
  const styles = getStyles(variant);

  console.log("props.disabled", props.disabled);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[style, styles.container, props.disabled && styles.disabled]}
      {...props}
    >
      <View style={styles.content}>
        <Slot child={left} />
        <Text numberOfLines={1} style={styles.text}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default Button;
