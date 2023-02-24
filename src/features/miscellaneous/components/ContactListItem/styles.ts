import { StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";
import { genFontStyles } from "src/utils/font";

export const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    paddingVertical: 22,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: COLOR.GRAY_100,
    borderBottomWidth: 1,
    marginLeft: 16,
    flex: 1,
  },
  title: {
    ...genFontStyles(18, 20),
    flex: 1,
    marginRight: 8,
  },
});
