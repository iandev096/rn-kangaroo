import { StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";

export const styles = StyleSheet.create({
  listItem: {
    paddingVertical: 24,
    flexDirection: "row",
  },
  mapThumb: {
    height: 94,
    width: 128,
    resizeMode: "cover",
  },
  infoGroup: {
    marginLeft: 16,
    flex: 1,
  },
  titleText: {
    fontSize: 16,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    lineHeight: 22,
    color: COLOR.PRIMARY_A,
  },
  descText: {
    fontSize: 12,
    lineHeight: 20,
    fontFamily: FONT_FAMILY.BR_FIRMA_REGULAR,
    color: COLOR.GRAY_500,
  },
  bottomGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
  },
  avatarGroup: {
    flexDirection: "row",
    width: 104,
    justifyContent: "space-between",
  },
  priceContainer: {
    backgroundColor: COLOR.GRAY_100,
    borderRadius: 28,
  },
  priceText: {
    color: COLOR.PRIMARY_A,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    fontSize: 14,
    lineHeight: 14,
    padding: 10,
  },
});
