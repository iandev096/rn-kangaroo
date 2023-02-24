import { StyleSheet } from "react-native";
import { genFontStyles } from "src/utils/font";

export const styles = StyleSheet.create({
  listItem: {
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    ...genFontStyles(16, 20),
    marginRight: 20,
  },
});
