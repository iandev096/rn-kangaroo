import { StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";

export const styles = StyleSheet.create({
  historyDriverProfile: {
    backgroundColor: COLOR.PRIMARY_B,
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
  },
  avatarContainer: {
    alignSelf: "center",
    marginTop: 40,
  },
  ratingContainer: {
    flexDirection: "row",
    backgroundColor: COLOR.PRIMARY_A,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 22,
    borderWidth: 2,
    borderColor: COLOR.PRIMARY_B,
    marginTop: -20,
  },
  ratingValue: {
    color: COLOR.PRIMARY_B,
    marginLeft: 4,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    fontSize: 14,
  },
  textGroup: {
    paddingHorizontal: 16,
    marginTop: 24,
    alignItems: "center",
  },
  driverNameText: {
    color: COLOR.PRIMARY_A,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    fontSize: 24,
    lineHeight: 24,
    marginBottom: 12,
  },
  driverVehicleText: {
    color: COLOR.PRIMARY_A,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    fontSize: 16,
    lineHeight: 16,
    marginBottom: 12,
  },
  statItemContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  statItem: {
    backgroundColor: COLOR.GRAY_50,
    borderRadius: 3,
    flexBasis: 106,
    flexGrow: 1,
    height: 104,
    paddingHorizontal: 12,
    paddingVertical: 20,
    alignItems: "center",
  },
  top: {
    height: 28,
    width: 28,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  regNoText: {
    color: COLOR.PRIMARY_A,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    fontSize: 16,
    lineHeight: 18,
  },
  statItemLabel: {
    color: COLOR.PRIMARY_A,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    fontSize: 24,
    lineHeight: 24,
  },
  statItemValue: {
    color: COLOR.PRIMARY_A,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    fontSize: 16,
    lineHeight: 16,
  },
});
