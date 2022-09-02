import { StyleSheet } from "react-native";
import { FONT_FAMILY } from "src/constants/FONT";
import THEME from "src/constants/THEME";
import { Size, Status, StyleConfig } from "./types";

export const getStyles = ({ size, disabled, focus, status }: StyleConfig) =>
  StyleSheet.create({
    label: {
      fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
      color: disabled ? color["disabled"] : color[status],
      fontSize: fontSize[size],
      lineHeight: 20,
    },
    textInputContainer: {
      marginTop: 8,
      backgroundColor: disabled
        ? backgroundColor["disabled"]
        : backgroundColor[status],
      paddingHorizontal: 16,
      height: height[size],
      borderRadius: 3,
      borderWidth: 2,
      justifyContent: "center",
      position: "relative",
      borderColor: focus ? borderColor["active"] : borderColor[status],
    },
    textInput: {
      fontFamily: FONT_FAMILY.BR_FIRMA_REGULAR,
      color: disabled ? color["disabled"] : color[status],
      fontSize: fontSize[size],
      height: "100%",
      lineHeight: 20,
    },
    closeIcon: {
      position: "absolute",
      right: 20,
    },
  });

const fontSize: Record<Size, number> = {
  medium: 16,
  small: 14,
};

const height: Record<Size, number> = {
  medium: 48,
  small: 36,
};

const borderColor: Record<Status | "active", string> = {
  active: THEME.PRIMARY_A,
  error: "#F1998E",
  success: "#66D19E",
  normal: "transparent",
};

const backgroundColor: Record<Status | "disabled", string> = {
  success: "#E6F2ED",
  disabled: THEME.GRAY_50,
  error: "#FFEFED",
  normal: THEME.GRAY_100,
};

const color: Record<Status | "disabled", string> = {
  success: THEME.PRIMARY_A,
  disabled: THEME.GRAY_400,
  error: THEME.PRIMARY_A,
  normal: THEME.PRIMARY_A,
};
