import { StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";
import { genFontStyles } from "src/utils/font";
import { Size, Variant } from "./types";

const backgroundColor: Record<Variant, string> = {
  alternate: COLOR.GRAY_100,
  normal: COLOR.PRIMARY_A,
};

const color: Record<Variant, string> = {
  normal: COLOR.PRIMARY_B,
  alternate: COLOR.PRIMARY_A,
};

const px = new Map<Size, number>();
px.set("md", 16).set("sm", 12);

const py = new Map<Size, number>();
py.set("md", 14).set("sm", 10);

const fontSize = new Map<Size, number>();
fontSize.set("md", 16).set("sm", 14);

const lineHeight = new Map<Size, number>();
lineHeight.set("md", 20).set("sm", fontSize.get("sm")!);

export const getStyles = (variant: Variant, size: Size) =>
  StyleSheet.create({
    container: {
      backgroundColor: backgroundColor[variant],
      paddingHorizontal: px.get(size),
      paddingVertical: py.get(size),
      borderRadius: 32,
      flexDirection: "row",
      alignItems: "center",
    },
    text: {
      ...genFontStyles(
        fontSize.get(size)!,
        lineHeight.get(size)!,
        color[variant]
      ),
    },
  });
