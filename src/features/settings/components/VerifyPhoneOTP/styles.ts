import { Dimensions, StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";
import { genFontStyles } from "src/utils/font";

export const styles = StyleSheet.create({
  container: {
    width: 248,
    paddingHorizontal: 20,
    marginTop: Dimensions.get("window").height * 0.075,
  },
  labelText: {
    ...genFontStyles(18, 24),
    marginBottom: 8,
  },
  infoText: {
    ...genFontStyles(14, 20, COLOR.GRAY_400, FONT_FAMILY.BR_FIRMA_REGULAR),
    marginTop: 8,
  },
  resendText: {
    ...genFontStyles(14, 20, COLOR.GRAY_600, FONT_FAMILY.BR_FIRMA_REGULAR),
    paddingVertical: 6,
  },
});
