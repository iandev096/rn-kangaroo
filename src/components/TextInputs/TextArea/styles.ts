import { StyleSheet } from "react-native";
import { FONT_FAMILY } from "src/constants/FONT";
import {
  backgroundColor,
  borderColor,
  color,
  fontSize,
} from "../shared/styles.config";
import { StyleConfig } from "../shared/types";

export const getStyles = ({ size, disabled, focus, status }: StyleConfig) =>
  StyleSheet.create({
    textAreaContainer: {
      backgroundColor: disabled
        ? backgroundColor["disabled"]
        : backgroundColor[status],
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderRadius: 3,
      borderWidth: 2,
      borderColor: focus ? borderColor["active"] : borderColor[status],
      justifyContent: "flex-start",
      minHeight: 100,
    },
    textInput: {
      fontFamily: FONT_FAMILY.BR_FIRMA_REGULAR,
      color: disabled ? color["disabled"] : color[status],
      fontSize: fontSize[size],
    },
  });
