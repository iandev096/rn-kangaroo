import { StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";

export const styles = StyleSheet.create({
  historyPaymentDetail: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderTopWidth: 8,
    borderTopColor: COLOR.GRAY_200,
  },
  title: {
    fontFamily: FONT_FAMILY.BR_FIRMA_REGULAR,
    fontSize: 14,
    lineHeight: 20,
    color: COLOR.GRAY_500,
    marginBottom: 12,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  labelGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  labelText: {
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    fontSize: 16,
    lineHeight: 16,
    marginLeft: 16,
  },
  value: {
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    fontSize: 24,
  },
});
