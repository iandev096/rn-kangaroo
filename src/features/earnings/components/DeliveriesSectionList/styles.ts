import { StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";
import { genFontStyles } from "src/utils/font";

export const styles = StyleSheet.create({
  sectionHeader: {
    paddingTop: 24,
    paddingBottom: 28,
    backgroundColor: COLOR.PRIMARY_B,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  titleText: {
    ...genFontStyles(20, 32),
  },
  dateText: {
    color: COLOR.GRAY_400,
  },
  amountCard: {
    marginTop: 16,
  },

  sectionSeparator: {
    height: 8,
    backgroundColor: COLOR.GRAY_100,
  },
  itemSeparator: { height: 1, backgroundColor: COLOR.GRAY_200 },

  screenPadding: {
    paddingHorizontal: 16,
  },
});
