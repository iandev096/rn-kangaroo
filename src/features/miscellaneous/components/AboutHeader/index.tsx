import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BackButton from "src/components/BackButton";
import TransHeader from "src/components/TransHeader";
import { genFontStyles } from "src/utils/font";

type Props = {};

function AboutHeader({}: Props) {
  return (
    <View style={styles.header}>
      <TransHeader
        left={<BackButton onPress={() => console.log("pressed")} />}
        right={<Text style={[styles.title]}>About</Text>}
        rightStyle={styles.right}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    marginBottom: 8,
    marginTop: 16,
  },
  title: {
    ...genFontStyles(16, 32),
    marginLeft: -50,
    textAlign: "center",
  },
  right: {
    flex: 1,
  },
});

export default AboutHeader;
