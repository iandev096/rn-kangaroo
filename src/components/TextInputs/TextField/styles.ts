import { StyleSheet } from "react-native";
import { FONT_FAMILY } from "src/constants/FONT";
import {
  backgroundColor,
  borderColor,
  color,
  fontSize,
  textFieldheight,
} from "../styles.config";
import { StyleConfig } from "../types";

export const getStyles = ({ size, disabled, focus, status }: StyleConfig) =>
  StyleSheet.create({
    label: {
      fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
      color: disabled ? color["disabled"] : color[status],
      fontSize: fontSize[size],
      lineHeight: 20,
      marginBottom: 8,
    },
    textInputContainer: {
      backgroundColor: disabled
        ? backgroundColor["disabled"]
        : backgroundColor[status],
      paddingHorizontal: 16,
      height: textFieldheight[size],
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
    },
    closeIcon: {
      position: "absolute",
      right: 20,
    },
  });
