import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BackButton from "src/components/BackButton";
import TransHeader from "src/components/TransHeader";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";

type Props = {};

function RecipientHeader({}: Props) {
  return (
    <View style={styles.header}>
      <TransHeader
        left={<BackButton onPress={() => console.log("pressed")} />}
        bottom={<Text style={styles.title}>Recipient</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 16,
  },
  title: {
    fontSize: 48,
    lineHeight: 61,
    marginTop: 16,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    color: COLOR.PRIMARY_A,
  },
});

export default RecipientHeader;
