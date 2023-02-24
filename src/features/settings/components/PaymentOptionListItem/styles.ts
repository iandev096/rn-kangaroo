import { StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";
import { genFontStyles } from "src/utils/font";

export const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLOR.GRAY_100,
    height: 38,
    width: 38,
    borderRadius: 3,
  },
  info: {
    flex: 1,
    paddingHorizontal: 16,
  },
  titleText: {
    ...genFontStyles(16, 20),
    marginBottom: 4,
  },
  descText: {
    ...genFontStyles(14, 20, COLOR.GRAY_600),
  },
});
