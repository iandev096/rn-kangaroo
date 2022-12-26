import React from "react";
import { Dimensions, Pressable, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  FadeIn,
  FadeOut,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { MAP_HEIGHT, MOVABLE_HEIGHT } from "./constants";

type Props = {
  translateY: SharedValue<number>;
  showBackdrop: boolean;
  onPress?: TouchableOpacity["props"]["onPress"];
};

const AnimatedTouchable = Animated.createAnimatedComponent(Pressable);

function Backdrop({ onPress, showBackdrop, translateY }: Props) {
  const animatedBackdropStyles = useAnimatedStyle(() => {
    const bgAlpha = interpolate(
      Math.abs(translateY.value),
      [0, MOVABLE_HEIGHT],
      [0.2, 0.8],
      Extrapolate.CLAMP
    );

    return {
      backgroundColor: `rgba(0,0,0,${bgAlpha})`,
      top: -MAP_HEIGHT,
    };
  });

  return (
    <>
      {showBackdrop ? (
        <Animated.View entering={FadeIn} exiting={FadeOut}>
          <AnimatedTouchable onPress={onPress}>
            <Animated.View style={[styles.layout, animatedBackdropStyles]} />
          </AnimatedTouchable>
        </Animated.View>
      ) : null}
    </>
  );
}

export const { height: HEIGHT } = Dimensions.get("window");

const styles = StyleSheet.create({
  layout: {
    height: HEIGHT,
    width: "100%",
    position: "absolute",
  },
});

export default Backdrop;
