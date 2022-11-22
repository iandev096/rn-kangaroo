import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import COLOR from "src/constants/COLOR";

type Props = { checked: boolean } & TouchableOpacity["props"];

function RadioButton({ checked = false, ...props }: Props) {
  const progress = useSharedValue(checked ? 1 : 0);

  const animStyles = useAnimatedStyle(() => {
    progress.value = withTiming(checked ? 1 : 0);

    return {
      opacity: interpolate(progress.value, [0, 1], [0.5, 1]),
      borderWidth: interpolate(progress.value, [0, 1], [3, 8]),
    };
  }, [checked]);

  return (
    <Pressable hitSlop={12} {...props}>
      <Animated.View style={[styles.outer, animStyles]} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  outer: {
    height: 22,
    width: 22,
    borderRadius: 100,
    borderColor: COLOR.PRIMARY_A,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RadioButton;
