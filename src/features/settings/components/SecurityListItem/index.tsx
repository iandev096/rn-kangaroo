import React from "react";
import {
  GestureResponderEvent,
  Pressable,
  Text,
  View,
  ViewStyle,
} from "react-native";
import Slot from "src/components/Slot";
import { styles } from "./styles";

type Props = {
  title: string;
  desc?: string;
  right?: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
};

function SecurityListItem({ title, desc, right, onPress, style }: Props) {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.listItem, style]}>
        <View style={styles.textGroup}>
          <Text style={styles.titleText}>{title}</Text>
          <Slot
            child={<Text style={styles.descText}>{desc}</Text>}
            noContainer
          />
        </View>
        <Slot child={right} />
      </View>
    </Pressable>
  );
}

export default SecurityListItem;
