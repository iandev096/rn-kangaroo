import React from "react";
import { Text, View } from "react-native";
import KangarooIcon from "src/components/SvgComponents/KangorooIcon";
import { styles } from "./styles";

type Props = {};

function AboutInfo({}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <KangarooIcon />
      </View>
      <Text style={styles.title}>Kangaroo</Text>
      <Text style={styles.desc}>Version 1.0</Text>
    </View>
  );
}

export default AboutInfo;
