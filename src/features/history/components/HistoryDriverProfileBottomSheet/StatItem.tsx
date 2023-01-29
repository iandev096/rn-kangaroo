import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { styles } from "./styles";

type Props = {
  top: React.ReactNode;
  bottom: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

function StatItem({ top, bottom, style = {} }: Props) {
  return (
    <View style={[styles.statItem, style]}>
      <View style={styles.top}>{top}</View>
      <View>{bottom}</View>
    </View>
  );
}

export default StatItem;
