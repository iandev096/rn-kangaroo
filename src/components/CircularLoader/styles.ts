import { StyleSheet } from "react-native";

export const getStyles = (radius: number, strokeLength: number) =>
  StyleSheet.create({
    progressContainer: {
      width: radius * 2 + strokeLength,
      height: radius * 2 + strokeLength,
    },
  });
