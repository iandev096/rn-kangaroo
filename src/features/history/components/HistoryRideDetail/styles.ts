import { StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";

export const styles = StyleSheet.create({
  pickupIcon: { height: 13, width: 13, backgroundColor: "black" },
  historyRideDetail: {
    marginBottom: 24,
  },
  mapImage: {
    height: 239,
    width: "100%",
    resizeMode: "cover",
  },
  stepperContainer: {
    paddingHorizontal: 16,
    marginTop: 28,
  },
  locationTitle: {
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 4,
    color: COLOR.PRIMARY_A,
  },
  locationTime: {
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    fontSize: 14,
    lineHeight: 20,
    color: COLOR.GRAY_400,
  },
});
