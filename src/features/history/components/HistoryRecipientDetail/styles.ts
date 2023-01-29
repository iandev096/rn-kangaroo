import { StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";

export const styles = StyleSheet.create({
  historyRecipientDetail: {
    borderTopColor: COLOR.GRAY_200,
    borderTopWidth: 1,
    borderStyle: "solid",
    paddingHorizontal: 16,
  },
  recipientItem: {
    flexDirection: "row",
    paddingVertical: 16,
  },
  recipientItemInfo: {
    marginLeft: 16,
  },
  recipientItemLabel: {
    fontFamily: FONT_FAMILY.BR_FIRMA_REGULAR,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 6,
    color: COLOR.GRAY_400,
  },
  recipientItemValue: {
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    fontSize: 14,
    lineHeight: 14,
    color: COLOR.PRIMARY_A,
  },
});
