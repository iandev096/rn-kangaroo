import { StyleSheet } from "react-native";
import { genFontStyles } from "src/utils/font";

export const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
  titleText: {
    ...genFontStyles(16, 20),
  },
});
