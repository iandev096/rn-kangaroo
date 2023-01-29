import React, { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import Svg, { Circle, CircleProps } from "react-native-svg";
import COLOR from "src/constants/COLOR";
import { getStyles } from "./styles";

type Props = {
  radius?: number;
  strokeLength?: number;
};

const RADIUS = 30;
const STROKE_LENGTH = 4;

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

function CircularLoader({
  radius = RADIUS,
  strokeLength = STROKE_LENGTH,
}: Props) {
  const progress = useSharedValue(0);
  const circleLength = 2 * Math.PI * radius;
  const styles = getStyles(radius, strokeLength);

  useEffect(() => {
    progress.value = withRepeat(withTiming(1, { duration: 5000 }), 20, true);
  }, [progress]);

  const animatedProps = useAnimatedProps<CircleProps>(() => ({
    strokeDashoffset: circleLength * (1 - progress.value),
    strokeDasharray: circleLength,
  }));
  const baseCircleProps: CircleProps = {
    cx: RADIUS + strokeLength / 2,
    cy: RADIUS + strokeLength / 2,
    r: RADIUS,
    strokeWidth: strokeLength,
    stroke: COLOR.GRAY_100,
    // strokeLinecap: "round",
  };
  const baseAnimatedCircleProps: CircleProps = {
    ...baseCircleProps,
    stroke: COLOR.PRIMARY_A,
    transform: `rotate(${-90},${RADIUS + strokeLength / 2},${
      RADIUS + strokeLength / 2
    })`,
  };

  return (
    <View style={styles.progressContainer}>
      <Svg>
        <Circle {...baseCircleProps} />
        <AnimatedCircle
          animatedProps={animatedProps}
          {...baseAnimatedCircleProps}
        />
      </Svg>
    </View>
  );
}

export default CircularLoader;
