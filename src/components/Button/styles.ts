import { StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";
import { Variant } from "src/types/button";

const backgroundColor: Record<Variant, string> = {
  alternate: COLOR.GRAY_100,
  normal: COLOR.PRIMARY_A,
};

const color: Record<Variant, string> = {
  normal: COLOR.PRIMARY_B,
  alternate: COLOR.PRIMARY_A,
};

const getStyles = (variant: Variant) =>
  StyleSheet.create({
    container: {
      backgroundColor: backgroundColor[variant],
      paddingHorizontal: 20,
      paddingVertical: 16,
      borderRadius: 3,
      alignItems: "center",
    },
    content: {
      flexDirection: "row",
      alignItems: "center",
    },
    text: {
      fontSize: 18,
      fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
      lineHeight: 24,
      color: color[variant],
    },
  });

export default getStyles;
