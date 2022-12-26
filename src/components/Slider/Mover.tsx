import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  FadeIn,
  FadeInLeft,
  FadeOut,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import COLOR from "src/constants/COLOR";
import ArrowRightIcon from "../SvgComponents/ArrowRightIcon";
import CheckSolidIcon from "../SvgComponents/CheckSolidIcon";
import { COMPLETE_THRESH_RATIO, SLIDER_TRACK_WIDTH } from "./constants";

type Props = { translateX: SharedValue<number> };

function Mover({ translateX }: Props) {
  const rightArrowAnimStyle = useAnimatedStyle(() => {
    const interpolated = interpolate(
      translateX.value,
      [
        0,
        (COMPLETE_THRESH_RATIO - 0.04) * SLIDER_TRACK_WIDTH,
        (COMPLETE_THRESH_RATIO - 0.0001) * SLIDER_TRACK_WIDTH,
        SLIDER_TRACK_WIDTH,
      ],
      [1, 1, 0, 0]
    );

    return {
      opacity: interpolated,
      transform: [
        { scale: interpolated },
        { rotate: `${interpolated * 2 * Math.PI}rad` },
      ],
    };
  });

  const checkAnimStyle = useAnimatedStyle(() => {
    const interpolated = interpolate(
      translateX.value,
      [
        0,
        0.52 * SLIDER_TRACK_WIDTH,
        0.54 * SLIDER_TRACK_WIDTH,
        SLIDER_TRACK_WIDTH,
      ],
      [0, 0, 1, 1]
    );

    return {
      opacity: interpolated,
      transform: [
        { scale: interpolated },
        { rotate: `${-interpolated * 2 * Math.PI}rad` },
      ],
    };
  });

  return (
    <View style={styles.mover}>
      <Animated.View
        entering={FadeInLeft}
        exiting={FadeOut}
        style={[styles.icon, rightArrowAnimStyle]}
      >
        <ArrowRightIcon width={17} height={17.6} />
      </Animated.View>
      <Animated.View
        entering={FadeIn}
        exiting={FadeOut}
        style={[styles.icon, checkAnimStyle]}
      >
        <CheckSolidIcon />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  mover: {
    height: 48,
    width: 48,
    borderRadius: 24,
    backgroundColor: COLOR.PRIMARY_B,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  icon: {
    position: "absolute",
  },
});

export default Mover;
