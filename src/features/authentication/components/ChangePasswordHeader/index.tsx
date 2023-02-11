import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BackButton from "src/components/BackButton";
import TransHeader from "src/components/TransHeader";
import { genFontStyles } from "src/utils/font";

type Props = {};

function ChangePasswordHeader({}: Props) {
  return (
    <View style={styles.header}>
      <TransHeader
        left={<BackButton onPress={() => console.log("pressed")} />}
        bottom={<Text style={styles.title}>Change Password</Text>}
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
export default ChangePasswordHeader;
