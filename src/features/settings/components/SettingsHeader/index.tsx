import React from "react";
import { Text, View } from "react-native";
import BackButton from "src/components/BackButton";
import { styles } from "./styles";

type Props = {};

function SettingsHeader({}: Props) {
  return (
    <View style={styles.header}>
      <View style={styles.buttonBack}>
        <BackButton />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Settings</Text>
      </View>
    </View>
  );
}

export default SettingsHeader;
