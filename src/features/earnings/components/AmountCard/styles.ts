import { StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";
import { genFontStyles } from "src/utils/font";

export const staticStyles = StyleSheet.create({
  card: { width: "100%", position: "relative" },
});

export const getStyles = (height: number, width: number) =>
  StyleSheet.create({
    card: {
      height,
    },
    cardAesthetics: {
      ...StyleSheet.absoluteFillObject,
    },
    bgSect: {
      width: width / 2,
      height: "100%",
      position: "absolute",
      overflow: "hidden",
    },
    leftBgSect: {
      left: 0,
      top: 0,
      borderTopLeftRadius: 0.03 * width,
      borderBottomLeftRadius: 0.03 * width,
    },
    rightBgSect: {
      right: 0,
      top: 0,
      borderTopRightRadius: 0.03 * width,
      borderBottomRightRadius: 0.03 * width,
    },
    cardIconContainer: {
      position: "absolute",
      left: width * 0.0476,
      top: height * 0.125,
    },
    stackedDeco: {
      backgroundColor: COLOR.ACCENT,
      width: 0.9 * width,
      height: 0.2625 * height,
      left: 0.05 * width,
      top: -0.22 * height,
      zIndex: -1,
      borderRadius: 0.02 * width,
    },
    amountContainer: {
      flex: 0.675,
      justifyContent: "center",
      alignItems: "center",
      top: 0.05 * height,
    },
    infoContainer: {
      flex: 0.325,
      borderTopWidth: 1,
      borderTopColor: COLOR.GRAY_200,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
    amount: {
      ...genFontStyles(0.3 * height, 0.3 * height, FONT_FAMILY.BR_FIRMA_MEDIUM),
    },
    info: {
      ...genFontStyles(
        0.0875 * height,
        0.1375 * height,
        FONT_FAMILY.BR_FIRMA_MEDIUM
      ),
    },
  });
