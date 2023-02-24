import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = { title: string; timeStr: string };

function BottomSheetHeader({ title, timeStr }: Props) {
  return (
    <View style={[styles.header, styles.screenPadding]}>
      <Text style={styles.headerTitle}>{title}</Text>
      <Text style={styles.timeStr}>{timeStr}</Text>
      <View style={styles.topBar} />
    </View>
  );
}

export default BottomSheetHeader;
