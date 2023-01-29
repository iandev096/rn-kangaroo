import { StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";

export const styles = StyleSheet.create({
  container: {
    paddingBottom: 36,
  },
  topBar: {
    width: 48,
    height: 4,
    borderRadius: 4,
    backgroundColor: COLOR.GRAY_200,
    alignSelf: "center",
    marginTop: 8,
    marginBottom: 20,
  },
  title: {
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    fontSize: 24,
    lineHeight: 32,
    color: COLOR.PRIMARY_A,
  },
  content: {
    paddingTop: 24,
    paddingBottom: 32,
    borderBottomColor: COLOR.GRAY_200,
    borderBottomWidth: 8,
    marginBottom: 24,
  },
  contactTitle: {
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    fontSize: 20,
    lineHeight: 32,
    color: COLOR.PRIMARY_A,
    marginBottom: 4,
  },
  radioItemsContainer: {
    marginBottom: 20,
  },
  screenPadding: {
    paddingHorizontal: 24,
  },
});
