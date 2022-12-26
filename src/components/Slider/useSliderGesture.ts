import { useCallback } from "react";
import { Gesture } from "react-native-gesture-handler";
import { runOnJS, useSharedValue, withSpring } from "react-native-reanimated";
import { COMPLETE_THRESH_RATIO, SLIDER_TRACK_WIDTH } from "./constants";

type Props = {};

function useSliderGesture(onConfirmed: () => any) {
  const translateX = useSharedValue(0);
  const context = useSharedValue({ x: 0 });

  const handleConfirmed = useCallback(() => {
    "worklet";
    runOnJS(onConfirmed)();
  }, []);

  const gesture = Gesture.Pan()
    .onBegin(() => {
      context.value = { x: translateX.value };
    })
    .onUpdate((ev) => {
      translateX.value = Math.max(
        Math.min(ev.translationX + context.value.x, SLIDER_TRACK_WIDTH),
        0
      );
    })
    .onEnd((_) => {
      let x = 0;
      if (translateX.value >= COMPLETE_THRESH_RATIO * SLIDER_TRACK_WIDTH) {
        x = SLIDER_TRACK_WIDTH;
      }
      translateX.value = withSpring(x, { damping: 70, mass: 1 }, (flag) => {
        if (flag && translateX.value >= SLIDER_TRACK_WIDTH) {
          handleConfirmed();
        }
      });
    });

  return { gesture, translateX };
}

export default useSliderGesture;
