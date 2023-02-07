import { StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";
import { Variant } from "src/types/tag";

const borderColor = new Map<Variant, string>();
borderColor.set("normal", COLOR.GRAY_300);
borderColor.set("success", "#66D19E");

const color = new Map<Variant, string>();
color.set("normal", COLOR.PRIMARY_A);
color.set("success", "#03703C");

export const getStyles = (variant: Variant) =>
  StyleSheet.create({
    tag: {
      borderWidth: 1,
      borderColor: borderColor.get(variant),
      paddingVertical: 4,
      paddingHorizontal: 8,
      flexDirection: "row",
      borderRadius: 26,
      alignItems: "center",
    },
    title: {
      color: color.get(variant),
      fontSize: 14,
      lineHeight: 16,
      fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    },
    iconContainer: {
      marginRight: 8,
    },
  });
