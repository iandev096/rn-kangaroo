import React from "react";
import { GestureResponderEvent, Pressable, Text, View } from "react-native";
import Slot from "src/components/Slot";
import { styles } from "./styles";

type Props = {
  title: string;
  right?: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  style?: View["props"]["style"];
};

function NotificationListItem({ title, right, onPress, style }: Props) {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.listItem, style]}>
        <Text style={styles.titleText}>{title}</Text>
        <Slot child={right} />
      </View>
    </Pressable>
  );
}

export default NotificationListItem;
