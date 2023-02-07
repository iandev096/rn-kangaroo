import { StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";
import { genFontStyles } from "src/utils/font";

export const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    marginTop: 16,
    marginBottom: 20,
  },
  iconContainer: {
    width: 37,
    height: 37,
  },
  center: {
    flex: 1,
    marginHorizontal: 12,
  },
  title: {
    ...genFontStyles(16, 16),
  },
  time: {
    ...genFontStyles(12, 20, COLOR.GRAY_400),
    marginTop: 6,
  },
});
