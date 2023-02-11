import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CloseButton from "src/components/CloseButton";
import TransHeader from "src/components/TransHeader";
import { genFontStyles } from "src/utils/font";

type Props = {};

function VerifyPhoneHeader({}: Props) {
  return (
    <View style={styles.header}>
      <TransHeader
        left={<CloseButton onPress={() => console.log("pressed")} />}
        bottom={<Text style={styles.title}>Verify Phone Number</Text>}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 16,
    marginBottom: 8,
  },
  title: {
    ...genFontStyles(32, 40),
    marginTop: 16,
  },
});

export default VerifyPhoneHeader;
