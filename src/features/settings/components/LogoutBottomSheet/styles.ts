import { StyleSheet } from "react-native";
import { genFontStyles } from "src/utils/font";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingBottom: 56,
    paddingTop: 32,
  },
  queryText: {
    ...genFontStyles(24, 32),
    marginBottom: 28,
  },
});
