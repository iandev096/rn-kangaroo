import { StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";

const BORDER_WIDTH = 2;
export const getStyles = (
  count: number,
  complete: boolean,
  tintBgColor: string,
  tintColor: string
) =>
  StyleSheet.create({
    textInputContainer: {
      width: 48 * count,
      marginLeft: -count,
    },
    textInput: {
      backgroundColor: complete ? tintBgColor : COLOR.GRAY_100,
      borderRadius: 3,
      borderBottomWidth: BORDER_WIDTH,
      borderLeftWidth: BORDER_WIDTH,
      borderRightWidth: BORDER_WIDTH,
      borderTopWidth: BORDER_WIDTH,
    },
    completed: {
      borderBottomColor: tintColor,
      borderLeftColor: tintColor,
      borderRightColor: tintColor,
      borderTopColor: tintColor,
    },
  });
