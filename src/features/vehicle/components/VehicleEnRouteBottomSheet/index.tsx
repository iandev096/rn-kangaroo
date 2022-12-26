import React from "react";
import { StyleSheet, View } from "react-native";
import { GestureDetector } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import COLOR from "src/constants/COLOR";
import Backdrop from "./Backdrop";
import BottomSheetContent from "./BottomSheetContent";
import BottomSheetHeader from "./BottomSheetHeader";
import { BOTTOMSHEET_HEIGHT, CONTAINER_HEIGHT } from "./constants";
import useBottomSheetGesture from "./useBottomSheetGesture";

type Props = {};

function VehicleEnRouteBottomSheet({}: Props) {
  const { gesture, translateY, showBackdrop } = useBottomSheetGesture();

  const animatedBottomSheetStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <GestureDetector gesture={gesture}>
      <View style={styles.container}>
        <Backdrop
          onPress={() => console.log("pressed backdrop")}
          translateY={translateY}
          showBackdrop={showBackdrop}
        />
        <Animated.View style={[styles.bottomSheet, animatedBottomSheetStyles]}>
          <BottomSheetHeader title="Your truck is on the way" timeValue={9} />
          <BottomSheetContent />
        </Animated.View>
      </View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  container: {
    height: CONTAINER_HEIGHT,
    position: "relative",
  },
  bottomSheet: {
    position: "absolute",
    height: BOTTOMSHEET_HEIGHT,
    backgroundColor: COLOR.GRAY_100,
    top: 0,
    width: "100%",
  },
});

export default VehicleEnRouteBottomSheet;
