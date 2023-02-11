import { StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";
import { genFontStyles } from "src/utils/font";

export const styles = StyleSheet.create({
  userInfo: {
    paddingHorizontal: 24,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLOR.GRAY_100,
    paddingVertical: 32,
  },
  fullName: {
    ...genFontStyles(20, 20),
    marginTop: 16,
    marginBottom: 12,
  },
});
