import { StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";
import { MAPSTYLE } from "src/constants/MAP";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.GRAY_100,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  map: { width: "100%", height: "100%" },
  curLocButton: {
    position: "absolute",
    bottom: 20,
    right: 0,
  },
  curLocButtonImage: {
    height: 77,
    width: 77,
    resizeMode: "contain",
  },
});
