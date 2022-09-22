import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import FakeShadowUp from "src/components/FakeShadowUp";
import { Ionicons } from "@expo/vector-icons";
import Button from "src/components/Button";
import COLOR from "src/constants/COLOR";
import Constants from "expo-constants";
import { FONT_FAMILY } from "src/constants/FONT";

type Props = {};

function ConfirmLocationBottomSheet({}: Props) {
  return (
    <View style={styles.bottomSheetContainer}>
      <FakeShadowUp />
      <View style={styles.bottomSheet}>
        <View style={styles.location}>
          <Ionicons name="location-sharp" size={24} color={COLOR.GRAY_400} />
          <Text style={styles.locationText}>Adenta SSNIT FLAT</Text>
        </View>
        <Button title="Confirm Destination" />
      </View>
    </View>
  );
}

const WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
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
  bottomSheetContainer: {},
  bottomSheet: {
    height: 173,
    width: WIDTH,
    padding: 24,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  locationText: {
    marginLeft: 13,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    color: COLOR.PRIMARY_A,
    fontSize: 16,
    lineHeight: 32,
  },
});

export default ConfirmLocationBottomSheet;
