import { StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";
import { Size, Variant } from "src/types/button";

const bgColorMap = new Map<Variant, string>();
bgColorMap.set("normal", COLOR.PRIMARY_A);
bgColorMap.set("alternate", COLOR.GRAY_100);

const colorMap = new Map<Variant, string>();
colorMap.set("normal", COLOR.PRIMARY_B);
colorMap.set("alternate", COLOR.PRIMARY_A);

const pxMap = new Map<Size, number>();
pxMap.set("normal", 20);
pxMap.set("small", 12);
const pyMap = new Map<Size, number>();
pyMap.set("normal", 14);
pyMap.set("small", 10);

const leftGap = new Map<Size, number>();
leftGap.set("normal", 12);
leftGap.set("small", 8);

const fontSize = new Map<Size, number>();
fontSize.set("normal", 16);
fontSize.set("small", 14);

const lineHeight = new Map<Size, number>();
lineHeight.set("normal", 20);
lineHeight.set("small", 14);

export const getStyles = (variant: Variant, size: Size) =>
  StyleSheet.create({
    container: {
      backgroundColor: bgColorMap.get(variant),
      paddingHorizontal: pxMap.get(size),
      paddingVertical: pyMap.get(size),
      borderRadius: 1000,
      alignItems: "center",
      minWidth: 88,
    },
    left: { marginRight: leftGap.get(size) },
    text: {
      fontSize: fontSize.get(size),
      fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
      lineHeight: lineHeight.get(size),
      color: colorMap.get(variant),
    },
    group: {
      flexDirection: "row",
      alignItems: "center",
    },
  });
