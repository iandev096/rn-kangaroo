import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import IMAGES from "src/constants/IMAGES";

type Props = { onPress?: TouchableOpacity["props"]["onPress"] };

function MapBackButton({ onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.backButton}
    >
      <Image
        source={IMAGES.MAP_BACK}
        style={styles.backButtonImage}
        resizeMode="contain"
      />
    </TouchableOpacity>
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

export default MapBackButton;
