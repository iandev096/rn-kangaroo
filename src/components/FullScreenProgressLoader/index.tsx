import React, { useEffect } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import Svg, { Circle, CircleProps } from "react-native-svg";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";

type Props = {
  loadingText: string;
} & Modal["props"];

const CIRCLE_LENGTH = 201; // 2 * PI * r
const RADIUS = CIRCLE_LENGTH / (2 * Math.PI); // C / (2 * PI)
const STROKE_LENGTH = 4;

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

function FullScreenProgressLoader({ loadingText, ...props }: Props) {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(withTiming(1, { duration: 5000 }), 20, true);
  }, [progress]);

  const animatedProps = useAnimatedProps<CircleProps>(() => ({
    strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
    strokeDasharray: CIRCLE_LENGTH,
  }));
  const baseCircleProps: CircleProps = {
    cx: RADIUS + STROKE_LENGTH / 2,
    cy: RADIUS + STROKE_LENGTH / 2,
    r: RADIUS,
    strokeWidth: STROKE_LENGTH,
    stroke: COLOR.GRAY_100,
    // strokeLinecap: "round",
  };
  const baseAnimatedCircleProps: CircleProps = {
    ...baseCircleProps,
    stroke: COLOR.PRIMARY_A,
    transform: `rotate(${-90},${RADIUS + STROKE_LENGTH / 2},${
      RADIUS + STROKE_LENGTH / 2
    })`,
  };

  return (
    <Modal {...props}>
      <View style={styles.background}>
        <View style={styles.progressContainer}>
          <Svg>
            <Circle {...baseCircleProps} />
            <AnimatedCircle
              animatedProps={animatedProps}
              {...baseAnimatedCircleProps}
            />
          </Svg>
          <Text numberOfLines={1} style={styles.loadingText}>
            {loadingText}
          </Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLOR.PRIMARY_B,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  progressContainer: {
    width: RADIUS * 2 + STROKE_LENGTH,
    height: RADIUS * 2 + STROKE_LENGTH,
  },
  loadingText: {
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    lineHeight: 20,
    fontSize: 16,
    textAlign: "center",
    marginTop: 27,
    overflow: "visible",
  },
});

export default FullScreenProgressLoader;
