import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GestureDetector } from "react-native-gesture-handler";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";
import { COMPLETE_THRESH_RATIO, SLIDER_TRACK_WIDTH } from "./constants";
import Mover from "./Mover";
import useSliderGesture from "./useSliderGesture";

type Props = {
  label: string;
  onConfirmed: () => any;
};

function Slider({ label, onConfirmed }: Props) {
  const { gesture, translateX } = useSliderGesture(onConfirmed);

  const moverAnimStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });
  const labelAnimStyles = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateX.value,
      [0, COMPLETE_THRESH_RATIO * SLIDER_TRACK_WIDTH, SLIDER_TRACK_WIDTH],
      [1, 0.15, 0]
    );

    return { opacity };
  });

  return (
    <View style={styles.slider}>
      <Animated.View style={labelAnimStyles}>
        <Text style={[styles.label]}>{label}</Text>
      </Animated.View>
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.moverContainer, moverAnimStyles]}>
          <Mover translateX={translateX} />
        </Animated.View>
      </GestureDetector>
    </View>
  );
}

const styles = StyleSheet.create({
  slider: {
    backgroundColor: COLOR.PRIMARY_A,
    width: "100%",
    height: 56,
    borderRadius: 28,
    flexDirection: "row",
    position: "relative",
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    lineHeight: 24,
    color: COLOR.PRIMARY_B,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
  },
  moverContainer: {
    position: "absolute",
    left: 4,
  },
});

export default Slider;
