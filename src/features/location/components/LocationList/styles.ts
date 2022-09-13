import { Animated, StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";
import { AnimatedViewStyle } from "src/types/animated";

export const getAnimStyle = (pageRevealValue: Animated.Value) => {
  const animStyle: AnimatedViewStyle = {
    transform: [
      {
        translateY: pageRevealValue.interpolate({
          inputRange: [0, 1],
          outputRange: [400, 0],
        }),
      },
      {
        scale: pageRevealValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0.6, 1],
        }),
      },
    ],
    opacity: pageRevealValue,
  };
  return animStyle;
};

export const styles = StyleSheet.create({
  cardContainer: {
    marginTop: -60,
    backgroundColor: COLOR.PRIMARY_B,
    flexGrow: 1,
  },
  listContentContainer: {
    padding: 16,
  },
});
