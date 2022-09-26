import React, { useCallback, useEffect } from "react";
import { Gesture } from "react-native-gesture-handler";
import {
  runOnJS,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { DRAWER_WIDTH } from "./constants";

type Props = { onClose: () => any; show: boolean };

function useDrawerAnimations({ onClose, show }: Props) {
  const translateX = useSharedValue(0);
  const context = useSharedValue({ x: 0 });

  const handleClose = useCallback(() => {
    "worklet";
    translateX.value = withTiming(0, { duration: 250 }, () => {
      runOnJS(onClose)();
    });
  }, [translateX]);

  const gesture = Gesture.Pan()
    .onBegin(() => {
      context.value = { x: translateX.value };
    })
    .onUpdate((ev) => {
      translateX.value = Math.min(
        ev.translationX + context.value.x,
        DRAWER_WIDTH
      );
    })
    .onEnd((ev) => {
      if (
        translateX.value < DRAWER_WIDTH / 2 ||
        Math.abs(ev.velocityX) > 1000
      ) {
        handleClose();
      } else {
        translateX.value = withSpring(DRAWER_WIDTH, { damping: 20 });
      }
    });

  useEffect(() => {
    if (show) {
      translateX.value = withSpring(DRAWER_WIDTH, { damping: 50 });
    }
  }, [show]);

  return { translateX, gesture, handleClose };
}

export default useDrawerAnimations;
