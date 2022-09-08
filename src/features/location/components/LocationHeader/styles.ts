import { Dimensions, StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: Dimensions.get("window").width,
    height: 190,
    paddingHorizontal: 16,
    zIndex: 100,
  },
  bg: {
    position: "absolute",
    resizeMode: "cover",
    width: Dimensions.get("window").width,
    bottom: 0,
  },
  header: {
    flexDirection: "row",
    height: 32,
    alignItems: "center",
    marginBottom: 4,
  },
  textFieldGroupContainer: {
    flexDirection: "row",
  },
  verticalStepperContainer: {
    width: 32,
    marginRight: 16,
    alignItems: "center",
    marginTop: 12,
  },
  verticalStepper: {
    width: 12,
    alignItems: "center",
  },
  verticalStepperItem: {},
  verticalLine: {
    height: 30,
    width: 1,
    backgroundColor: "#C4C4C4",
    marginVertical: 4,
  },
  textFieldGroup: {
    flex: 1,
  },
  backBtn: {
    width: 32,
    marginRight: 16,
    alignItems: "center",
    zIndex: 110,
  },
  headerTitleContainer: {
    alignItems: "center",
    flex: 1,
  },
  headerTitle: {
    fontSize: 16,
    lineHeight: 32,
    color: COLOR.PRIMARY_A,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
  },
  textFieldVertical: {
    marginTop: 12,
  },
});
