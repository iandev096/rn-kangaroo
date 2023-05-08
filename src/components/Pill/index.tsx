import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, { Layout } from "react-native-reanimated";
import Slot from "../Slot";
import { getStyles } from "./styles";
import { PillProps } from "./types";

function Pill({
  title,
  variant = "alternate",
  size = "sm",
  right,
  left,
  style,
  textStyle,
  onPress,
}: PillProps) {
  const styles = getStyles(variant, size);

  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View
        layout={Layout.duration(2000)}
        style={[styles.container, style]}
      >
        <Slot child={left} noContainer />
        <Text style={[styles.text, textStyle]}>{title}</Text>
        <Slot child={right} noContainer />
      </Animated.View>
    </TouchableOpacity>
  );
}

export default Pill;
