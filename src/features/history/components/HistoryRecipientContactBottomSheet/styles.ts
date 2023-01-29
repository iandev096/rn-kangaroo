import { StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";

export const styles = StyleSheet.create({
  contactItemContainer: {
    paddingTop: 48,
    paddingBottom: 44,
  },
  contactItem: {
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  infoGroup: {
    marginLeft: 24,
  },
  name: {
    color: COLOR.PRIMARY_A,
    fontSize: 20,
    lineHeight: 20,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    marginBottom: 12,
  },
  contactGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  contactIconContainer: {
    width: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  contactNo: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: FONT_FAMILY.BR_FIRMA_REGULAR,
    color: COLOR.GRAY_300,
    marginLeft: 4,
  },
  topBar: {
    width: 48,
    height: 4,
    borderRadius: 4,
    backgroundColor: COLOR.GRAY_200,
    alignSelf: "center",
    marginTop: 8,
  },
});
