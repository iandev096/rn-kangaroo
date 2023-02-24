import { StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";
import { genFontStyles } from "src/utils/font";

export const styles = StyleSheet.create({
  screenPadding: { paddingHorizontal: 16 },
  sectionTitle: {
    ...genFontStyles(20, 32),
    marginBottom: 10,
    backgroundColor: COLOR.PRIMARY_B,
  },
});
