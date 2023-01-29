import { StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";

export const styles = StyleSheet.create({
  historyRiderDetail: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  riderItem: {
    flexDirection: "row",
  },
  riderItemInfo: {
    flex: 1,
    paddingHorizontal: 16,
  },
  riderItemLabel: {
    fontFamily: FONT_FAMILY.BR_FIRMA_REGULAR,
    fontSize: 14,
    lineHeight: 20,
    color: COLOR.GRAY_500,
    marginBottom: 8,
  },
  riderItemValue: {
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    fontSize: 16,
    lineHeight: 16,
    color: COLOR.PRIMARY_A,
  },
  riderItemVehicleImg: {
    resizeMode: "contain",
    width: 104,
    height: 52,
  },
});
