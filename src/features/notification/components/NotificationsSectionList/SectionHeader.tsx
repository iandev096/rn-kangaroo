import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = { title: string };

function SectionHeader({ title }: Props) {
  return (
    <View>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );
}

export default SectionHeader;
