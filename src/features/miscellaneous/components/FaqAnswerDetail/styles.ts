import { StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";
import { genFontStyles } from "src/utils/font";

export const styles = StyleSheet.create({
  container: {
    marginTop: 48,
  },
  screenPadding: { paddingHorizontal: 24 },
  paragraphs: {
    marginBottom: 24,
    paddingBottom: 8,
    borderBottomWidth: 8,
    borderBottomColor: COLOR.GRAY_100,
  },
  paragraph: {
    marginBottom: 32,
    ...genFontStyles(16, 24, COLOR.PRIMARY_A, FONT_FAMILY.BR_FIRMA_REGULAR),
  },
  query: {
    ...genFontStyles(18, 32),
    marginBottom: 12,
  },
});
