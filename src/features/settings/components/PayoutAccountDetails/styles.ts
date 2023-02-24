import { StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";
import { genFontStyles } from "src/utils/font";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  heading: {
    ...genFontStyles(20, 40),
    marginBottom: 12,
  },
  subHeading: {
    ...genFontStyles(14, 20),
  },
  paymentInst: {
    paddingBottom: 16,
    borderBottomColor: COLOR.GRAY_100,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  textFieldLabel: { ...genFontStyles(14, 20) },
});
