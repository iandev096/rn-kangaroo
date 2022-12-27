import { StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";

export const styles = StyleSheet.create({
  historyFilterForm: {
    backgroundColor: COLOR.PRIMARY_B,
  },
  header: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: COLOR.GRAY_200,
    borderBottomWidth: 2,
    borderStyle: "solid",
  },
  title: {
    textAlign: "center",
    flex: 1,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    fontSize: 18,
    lineHeight: 18,
    color: COLOR.PRIMARY_A,
    marginLeft: -32,
  },
  radioListContainer: {
    paddingHorizontal: 24,
  },
  radioListItem: {
    paddingVertical: 2,
  },
  borderBottom: {
    borderBottomColor: COLOR.GRAY_100,
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  buttonContainer: {
    paddingHorizontal: 24,
    paddingBottom: 48,
    paddingTop: 16,
  },
});
