import { useCallback, useEffect, useMemo } from "react";
import { Gesture } from "react-native-gesture-handler";
import {
  runOnJS,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

type Props = { onClose: () => any; show: boolean; contentHeight: number };

function useBottomSheetAnimations({ onClose, show, contentHeight }: Props) {
  const translateY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });

  const handleClose = useCallback(() => {
    "worklet";
    translateY.value = withTiming(0, { duration: 250 }, () => {
      runOnJS(onClose)();
    });
  }, [translateY]);

  const gesture = useMemo(
    () =>
      Gesture.Pan()
        .onBegin(() => {
          context.value = { y: translateY.value };
        })
        .onUpdate((ev) => {
          translateY.value = Math.max(ev.translationY + context.value.y, 0);
        })
        .onEnd((ev) => {
          if (translateY.value >= contentHeight / 2 || ev.velocityY > 1000) {
            handleClose();
          } else {
            translateY.value = withSpring(0, { damping: 20 });
          }
        }),
    [contentHeight]
  );

  useEffect(() => {
    if (show) {
      translateY.value = withSpring(0, { damping: 50 });
    }
  }, [show, contentHeight, translateY]);

  return { translateY, gesture, handleClose };
}

export default useBottomSheetAnimations;
