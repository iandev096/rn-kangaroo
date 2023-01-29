import { StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";

export const styles = StyleSheet.create({
  textAreaInputContainer: {
    height: 156,
    borderWidth: 0,
  },
  textAreaStage: {
    backgroundColor: COLOR.GRAY_100,
    paddingHorizontal: 8,
  },
  info: {
    flexDirection: "row",
    marginTop: 20,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  infoText: {
    fontFamily: FONT_FAMILY.BR_FIRMA_REGULAR,
    fontSize: 14,
    lineHeight: 20,
    color: COLOR.GRAY_500,
    marginLeft: 16,
  },
});
