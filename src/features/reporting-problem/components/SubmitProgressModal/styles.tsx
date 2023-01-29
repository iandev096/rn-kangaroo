import { Dimensions, StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";

export const styles = StyleSheet.create({
  stage: {
    flex: 1,
    position: "relative",
  },
  backdrop: {
    backgroundColor: "rgba(0,0,0,0.8)",
    flex: 1,
  },
  modalContent: {
    height: 0.4 * Dimensions.get("window").height,
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLOR.PRIMARY_B,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContentInner: {
    marginTop: -0.03 * Dimensions.get("window").height,
    alignItems: "center",
  },
  progressIndicator: {
    marginBottom: 28,
  },
  progressText: {
    fontSize: 18,
    lineHeight: 24,
    color: COLOR.PRIMARY_A,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
  },
});
