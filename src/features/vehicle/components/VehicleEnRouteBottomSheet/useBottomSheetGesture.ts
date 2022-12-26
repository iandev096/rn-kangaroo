import { useState } from "react";
import { Gesture } from "react-native-gesture-handler";
import { runOnJS, useSharedValue, withSpring } from "react-native-reanimated";
import { MOVABLE_HEIGHT } from "./constants";
import { getBottomSheetPosition } from "./util";

function useBottomSheetGesture() {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const translateY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });

  const handleSetShowBackdrop = (value: boolean) => {
    "worklet";
    runOnJS(setShowBackdrop)(value);
  };

  const gesture = Gesture.Pan()
    .onBegin(() => {
      context.value = { y: translateY.value };
    })
    .onStart(() => {
      handleSetShowBackdrop(true);
    })
    .onUpdate((ev) => {
      translateY.value = Math.max(
        Math.min(ev.translationY + context.value.y, 0),
        -MOVABLE_HEIGHT
      );
    })
    .onEnd((ev) => {
      const y = getBottomSheetPosition(ev);

      if (y === 0) {
        handleSetShowBackdrop(false);
      }

      translateY.value = withSpring(y, { damping: 20 });
    });

  return { gesture, showBackdrop, translateY };
}

export default useBottomSheetGesture;
