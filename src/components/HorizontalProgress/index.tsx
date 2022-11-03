import React, { useEffect } from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import COLOR from "src/constants/COLOR";

type Props = { loading: boolean };

const BAR_WIDTH = 30;

function HorizontalProgress({ loading }: Props) {
  const progress = useSharedValue(0);
  const show = useSharedValue(1);

  const { width: WIDTH } = useWindowDimensions();

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, {
        duration: 700,
      }),
      -1,
      true
    );
  }, [progress]);

  useEffect(() => {
    show.value = loading
      ? withTiming(1, { duration: 200 })
      : withTiming(0, { duration: 200 });
  }, [loading]);

  const barAnimStyle = useAnimatedStyle(
    () => ({
      transform: [
        {
          translateX: interpolate(
            progress.value,
            [0, 1],
            [0, WIDTH - BAR_WIDTH],
            Extrapolate.CLAMP
          ),
        },
        {
          scaleX: interpolate(
            progress.value,
            [0, 0.25, 0.5, 0.75, 1],
            [1, 1.75, 2.15, 1.75, 1]
          ),
        },
      ],
      opacity: interpolate(show.value, [0, 1], [0, 1]),
    }),
    [loading]
  );

  return (
    <View style={styles.horizontalProgress}>
      <Animated.View style={[styles.bar, barAnimStyle]} />
    </View>
  );
}

const styles = StyleSheet.create({
  horizontalProgress: {
    width: "100%",
    backgroundColor: COLOR.GRAY_100,
    height: 2,
  },
  bar: {
    backgroundColor: COLOR.PRIMARY_A,
    width: BAR_WIDTH,
    height: "100%",
  },
});

export default HorizontalProgress;
