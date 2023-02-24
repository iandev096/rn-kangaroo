import { StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";
import { genFontStyles } from "src/utils/font";

export const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 16,
    flex: 1,
    height: "100%",
    paddingVertical: 20,
  },
  logoContainer: {
    height: 32,
    width: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    backgroundColor: COLOR.GRAY_50,
  },
  titleText: {
    ...genFontStyles(16, 20),
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: COLOR.GRAY_100,
  },
});
