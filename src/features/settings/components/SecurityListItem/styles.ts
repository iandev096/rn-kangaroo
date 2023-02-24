import { StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";
import { genFontStyles } from "src/utils/font";

export const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
  },
  textGroup: {
    flex: 1,
  },
  titleText: {
    ...genFontStyles(16, 20),
    marginBottom: 4,
  },
  descText: {
    ...genFontStyles(14, 20),
    color: COLOR.GRAY_500,
  },
});
