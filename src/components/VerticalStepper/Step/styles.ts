import { StyleSheet } from "react-native";
import { StyleProps } from "../types";
import { STEPLINE_OFFSET } from "./constants";

export const getStyles = ({
  iconHeight,
  showStepLine,
  ICON_CONTAINER_HEIGHT,
  ICON_CONTAINER_WIDTH,
}: StyleProps) =>
  StyleSheet.create({
    step: {
      flexDirection: "row",
      position: "relative",
      marginBottom: showStepLine ? 14 : 0,
    },
    iconContainer: {
      width: ICON_CONTAINER_WIDTH,
      height: ICON_CONTAINER_HEIGHT,
      justifyContent: "center",
      alignItems: "center",
    },
    content: {
      marginLeft: 16,
      flex: 1,
      justifyContent: "center",
    },
    stepLineContainer: {
      position: "absolute",
      left: ICON_CONTAINER_WIDTH / 2 - 0.5,
      top: ICON_CONTAINER_HEIGHT / 2 + iconHeight / 2 + STEPLINE_OFFSET,
      zIndex: 500,
    },
  });
