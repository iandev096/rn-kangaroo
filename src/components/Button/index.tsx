import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FONT_FAMILY } from "src/constants/FONT";
import THEME from "src/constants/THEME";

type Props = { title: string } & TouchableOpacity["props"];

function Button({ title, style = {}, ...props }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[style, styles.container]}
      {...props}
    >
      <Text numberOfLines={1} style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.PRIMARY_A,
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 3,
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    lineHeight: 24,
    color: THEME.PRIMARY_B,
  },
});

export default Button;
