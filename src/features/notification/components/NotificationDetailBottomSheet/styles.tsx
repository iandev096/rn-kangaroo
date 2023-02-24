import { StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";
import { genFontStyles } from "src/utils/font";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 34,
    paddingBottom: 54,
  },
  screenPadding: { paddingHorizontal: 24 },
  header: {
    position: "relative",
    paddingBottom: 20,
    borderBottomWidth: 8,
    borderBottomColor: COLOR.GRAY_100,
  },
  topBar: {
    width: 48,
    height: 4,
    borderRadius: 4,
    backgroundColor: COLOR.GRAY_100,
    alignSelf: "center",
    position: "absolute",
    top: -21,
  },
  headerTitle: {
    ...genFontStyles(24, 32),
    marginBottom: 8,
  },
  timeStr: {
    ...genFontStyles(14, 20, COLOR.GRAY_500),
  },
  infoGroup: { flexDirection: "row", marginTop: 30, marginBottom: 36 },
  avatar: { marginLeft: 8, alignSelf: "flex-start" },
  description: {
    ...genFontStyles(16, 24),
    flex: 1,
  },
});
