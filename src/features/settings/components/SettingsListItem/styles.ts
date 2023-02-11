import { StyleSheet } from "react-native";
import { genFontStyles } from "src/utils/font";

export const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
  },
  center: {
    paddingHorizontal: 20,
    flex: 1,
  },
  titleText: {
    ...genFontStyles(16, 32),
  },
});
