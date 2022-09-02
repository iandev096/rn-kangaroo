import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { FONT_FAMILY } from "src/constants/FONT";
import THEME from "src/constants/THEME";

type Props = { label: string } & TextInput["props"];

function TextField({ label, style = {}, ...props }: Props) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.textInputContainer}>
        <TextInput style={[style, styles.textInput]} {...props} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    color: THEME.PRIMARY_A,
    fontSize: 16,
    lineHeight: 20,
  },
  textInputContainer: {
    marginTop: 8,
    backgroundColor: THEME.GRAY_100,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 3,
  },
  textInput: {
    fontFamily: FONT_FAMILY.BR_FIRMA_REGULAR,
    color: THEME.PRIMARY_A,
    fontSize: 16,
    lineHeight: 20,
  },
});

export default TextField;
