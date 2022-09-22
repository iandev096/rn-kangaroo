import React from "react";
import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import MapView, { MapProps } from "src/components/MapView";
import IMAGES from "src/constants/IMAGES";
import Constants from "expo-constants";

type Props = {
  onPressBack?: (event: GestureResponderEvent) => void;
} & MapProps;

function ConfirmLocationMap({ onPressBack, ...mapProps }: Props) {
  return (
    <>
      <MapView {...mapProps} showCurLoc />
      <TouchableOpacity
        onPress={onPressBack}
        activeOpacity={0.8}
        style={styles.backButton}
      >
        <Image
          source={IMAGES.MAP_BACK}
          style={styles.backButtonImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: Constants.statusBarHeight,
    left: 0,
    zIndex: 100000,
  },
  backButtonImage: {
    height: 80,
    width: 80,
    resizeMode: "contain",
  },
});

export default ConfirmLocationMap;
