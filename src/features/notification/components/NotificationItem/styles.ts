import { StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";
import { genFontStyles } from "src/utils/font";

export const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    paddingTop: 14,
  },
  thumbnail: {
    height: 38,
    width: 38,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  textContent: {
    paddingBottom: 14,
    marginLeft: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLOR.GRAY_100,
    flex: 1,
  },
  titleText: {
    ...genFontStyles(16, 20),
    marginBottom: 6,
  },
  descText: {
    ...genFontStyles(12, 20, COLOR.GRAY_600),
  },
  isNewIndicator: {
    height: 9,
    width: 9,
    borderRadius: 50,
    backgroundColor: "#E11900",
    marginTop: 6,
  },
  isNewActive: {
    opacity: 1,
    transform: [{ scale: 1 }],
  },
  isNewInactive: {
    opacity: 0,
    transform: [{ scale: 0 }],
    marginBottom: 30,
  },
});
