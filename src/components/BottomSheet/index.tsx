import React, { useState } from "react";
import { Dimensions, LayoutChangeEvent, StyleSheet, View } from "react-native";
import { GestureDetector } from "react-native-gesture-handler";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeOut,
  FadeOutDown,
  useAnimatedStyle,
} from "react-native-reanimated";
import COLOR from "src/constants/COLOR";
import Backdrop from "./Backdrop";
import useBottomSheetAnimations from "./useBottomSheetAnimations";

type Props = {
  show: boolean;
  onClose: () => any;
  children: React.ReactNode;
  gestureEnabled: boolean;
};

function BottomSheet({
  show,
  onClose,
  children,
  gestureEnabled = true,
}: Props) {
  const [contentHeight, setContentHeight] = useState(0);
  const { gesture, handleClose, translateY } = useBottomSheetAnimations({
    onClose,
    contentHeight,
    show,
  });
  const animatedStyles = useAnimatedStyle(() => ({
    bottom: 0,
    transform: [{ translateY: translateY.value }],
  }));

  const initializeContentHeight = (ev: LayoutChangeEvent) =>
    setContentHeight(ev.nativeEvent.layout.height);

  const coreView = (
    <View style={[styles.container]}>
      <Animated.View entering={FadeIn} exiting={FadeOut}>
        <Backdrop
          contentHeight={contentHeight}
          translateY={translateY}
          onPress={() => handleClose()}
        />
      </Animated.View>
      {children ? (
        <Animated.View
          entering={FadeInDown}
          exiting={FadeOutDown}
          style={[styles.contentContainer, animatedStyles]}
          onLayout={initializeContentHeight}
        >
          {children}
        </Animated.View>
      ) : null}
    </View>
  );

  const renderedView = gestureEnabled ? (
    <GestureDetector gesture={gesture}>{coreView}</GestureDetector>
  ) : (
    coreView
  );

  return <>{show ? renderedView : null}</>;
}

export const { height: HEIGHT, width: WIDTH } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    left: 0,
    width: WIDTH,
  },
  contentContainer: {
    backgroundColor: COLOR.PRIMARY_B,
    width: WIDTH,
    position: "absolute",
    bottom: 0,
  },
});

export default BottomSheet;
