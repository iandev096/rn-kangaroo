import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

type Props = {
  translateY: SharedValue<number>;
  onPress?: TouchableOpacity["props"]["onPress"];
  contentHeight: number;
};

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

function Backdrop({ onPress, translateY, contentHeight }: Props) {
  const animatedBackdropStyles = useAnimatedStyle(() => {
    const bgAlpha = interpolate(
      translateY.value,
      [contentHeight, 0],
      [0, 0.8],
      Extrapolate.CLAMP
    );

    return { backgroundColor: `rgba(0,0,0,${bgAlpha})` };
  }, [contentHeight]);

  return (
    <AnimatedTouchable activeOpacity={1} onPress={onPress}>
      <Animated.View style={[styles.layout, animatedBackdropStyles]} />
    </AnimatedTouchable>
  );
}

export const { height: HEIGHT, width: WIDTH } = Dimensions.get("window");

const styles = StyleSheet.create({
  layout: {
    height: HEIGHT,
    width: "100%",
  },
});

export default Backdrop;
