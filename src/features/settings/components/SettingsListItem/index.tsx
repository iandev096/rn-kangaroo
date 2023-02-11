import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Slot from "src/components/Slot";
import COLOR from "src/constants/COLOR";
import { styles } from "./styles";

export type SettingsListItemProps = {
  icon: React.ReactNode;
  title: string;
  right?: React.ReactNode;
  onPress?: TouchableOpacity["props"]["onPress"];
  titleColor?: string;
};

function SettingsListItem({
  icon,
  title,
  right,
  onPress,
  titleColor = COLOR.PRIMARY_A,
}: SettingsListItemProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.listItem}>
        <Slot child={icon} />
        <View style={styles.center}>
          <Text style={[styles.titleText, { color: titleColor }]}>{title}</Text>
        </View>
        <Slot child={right} />
      </View>
    </TouchableOpacity>
  );
}

export default SettingsListItem;
