import { Platform, StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";

export const styles = StyleSheet.create({
  screenPadding: {
    paddingHorizontal: 16,
  },
  tripCardDetail: {
    backgroundColor: COLOR.GRAY_200,
    borderRadius: 3,
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  tripCardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 16,
    borderStyle: Platform.OS === "android" ? "dotted" : "solid",
    marginBottom: 16,
    borderBottomWidth: Platform.OS === "android" ? 1.5 : 1,
    borderBottomColor: COLOR.GRAY_300,
  },
  tripTitle: {
    fontSize: 16,
    lineHeight: 16,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    color: COLOR.PRIMARY_A,
    marginBottom: 4,
  },
  tripTime: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: FONT_FAMILY.BR_FIRMA_REGULAR,
    color: COLOR.GRAY_500,
  },
  pickupIcon: {
    height: 9,
    width: 9,
    backgroundColor: COLOR.PRIMARY_A,
  },
  stepText: {
    fontSize: 14,
    lineHeight: 22,
    color: COLOR.PRIMARY_A,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
  },
  issuesListBorderBottom: {
    borderBottomWidth: 8,
    borderBottomColor: COLOR.GRAY_200,
  },
  issuesList: {
    paddingVertical: 36,
  },
  issuesListTitle: {
    fontSize: 16,
    lineHeight: 32,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    color: COLOR.GRAY_500,
    textAlignVertical: "top",
  },
  issueListItem: {
    flexDirection: "row",
    height: 64,
    alignItems: "center",
  },
  issuesListIconContainer: {
    height: "100%",
    width: 32,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  issuesListItemTitleContainer: {
    flex: 1,
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
  },
  issuesListItemTitle: {
    fontSize: 16,
    lineHeight: 20,
    paddingRight: 12,
    flex: 1,
  },
  issuesListItemBorderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: COLOR.GRAY_200,
  },
});
