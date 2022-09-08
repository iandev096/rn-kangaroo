import React, { useEffect } from "react";
import Animated, {
  cancelAnimation,
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import BEZIER from "src/constants/BEZIER";
import COLOR from "src/constants/COLOR";
import { ReanimatedViewStyle } from "src/types/reanimated";

type Props = {
  style?: ReanimatedViewStyle;
};

const defaultStyle: ReanimatedViewStyle = {
  backgroundColor: COLOR.GRAY_200,
  height: 20,
};

function SkeletonBlock({ style }: Props) {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, {
        duration: 1200,
        easing: Easing.bezier(...BEZIER.easeInOutExpo),
      }),
      -1,
      true
    );

    return () => cancelAnimation(progress);
  }, []);

  const animStyle = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [0, 1], [0.5, 1], Extrapolate.CLAMP),
  }));

  return <Animated.View style={[defaultStyle, style, animStyle]} />;
}

export default SkeletonBlock;
