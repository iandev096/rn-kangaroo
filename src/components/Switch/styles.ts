import { StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";

export const styles = StyleSheet.create({
  track: {
    position: "relative",
    width: 52,
    height: 32,
    borderRadius: 32,
    justifyContent: "center",
  },
  thumb: {
    position: "absolute",
    paddingHorizontal: 2,
  },
  thumbInner: {
    height: 28,
    width: 28,
    borderRadius: 100,
    backgroundColor: COLOR.PRIMARY_B,
  },
});
