import { StyleSheet } from "react-native";
import { FONT_FAMILY } from "src/constants/FONT";
import { genFontStyles } from "src/utils/font";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginHorizontal: 16,
    alignItems: "center",
    position: "relative",
    justifyContent: "center",
  },
  buttonBack: {
    position: "absolute",
    left: 0,
  },
  titleContainer: { flex: 1, alignItems: "center" },
  title: {
    ...genFontStyles(14, 32, FONT_FAMILY.BR_FIRMA_MEDIUM),
  },
});
