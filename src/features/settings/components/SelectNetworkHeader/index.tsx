import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CloseButton from "src/components/CloseButton";
import TransHeader from "src/components/TransHeader";
import { genFontStyles } from "src/utils/font";

type Props = {};

function SelectNetworkHeader({}: Props) {
  return (
    <View style={styles.header}>
      <TransHeader
        left={<CloseButton onPress={() => console.log("pressed")} />}
        bottom={<Text style={styles.title}>Select Your Network</Text>}
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
    ...genFontStyles(32, 32),
    marginTop: 16,
  },
});

export default SelectNetworkHeader;
