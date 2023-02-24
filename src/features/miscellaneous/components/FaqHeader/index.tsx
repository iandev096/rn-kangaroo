import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BackButton from "src/components/BackButton";
import TransHeader from "src/components/TransHeader";
import { genFontStyles } from "src/utils/font";

type Props = {
  title: string;
};

function FaqHeader({ title }: Props) {
  return (
    <View style={styles.header}>
      <TransHeader
        left={<BackButton onPress={() => console.log("pressed")} />}
        bottom={<Text style={styles.title}>{title}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  title: {
    ...genFontStyles(32, 32),
    marginTop: 16,
  },
});

export default FaqHeader;
