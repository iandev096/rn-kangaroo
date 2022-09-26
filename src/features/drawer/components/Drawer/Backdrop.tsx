import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { DRAWER_WIDTH, HEIGHT } from "./constants";

type Props = {
  translateX: SharedValue<number>;
  onPress?: TouchableOpacity["props"]["onPress"];
};

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

function Backdrop({ translateX, onPress }: Props) {
  const animatedBackdropStyles = useAnimatedStyle(() => {
    const bgAlpha = interpolate(
      translateX.value,
      [0, DRAWER_WIDTH],
      [0, 0.8],
      Extrapolate.CLAMP
    );

    return { backgroundColor: `rgba(0,0,0,${bgAlpha})` };
  });

  return (
    <AnimatedTouchable activeOpacity={1} onPress={onPress}>
      <Animated.View style={[styles.layout, animatedBackdropStyles]} />
    </AnimatedTouchable>
  );
}

const styles = StyleSheet.create({
  layout: {
    height: HEIGHT,
    width: "100%",
  },
});

export default Backdrop;
