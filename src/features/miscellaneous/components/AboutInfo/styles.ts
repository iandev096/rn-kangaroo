import { StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";
import { genFontStyles } from "src/utils/font";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    marginBottom: 12,
    borderBottomColor: COLOR.GRAY_100,
    borderBottomWidth: 8,
    paddingHorizontal: 24,
  },
  logoContainer: {
    height: 87,
    width: 87,
    borderRadius: 15,
    backgroundColor: COLOR.PRIMARY_A,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 16,
  },
  title: {
    ...genFontStyles(24, 32),
    marginBottom: 4,
    textAlign: "center",
  },
  desc: {
    ...genFontStyles(14, 20, COLOR.GRAY_500),
    textAlign: "center",
  },
});
