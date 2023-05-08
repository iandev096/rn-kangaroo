import { StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";

export const styles = StyleSheet.create({
  authHeader: {
    height: 284,
    width: "100%",
    position: "relative",
    backgroundColor: COLOR.PRIMARY_B,
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#000",
    opacity: 0.4,
  },
  logoContainer: {
    position: "absolute",
    bottom: 22,
    left: 24,
  },
  regIconContainer: {
    marginLeft: 40,
    marginTop: -8,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
