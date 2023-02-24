import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Slot from "src/components/Slot";
import ChevronRight from "src/components/SvgComponents/ChevronRight";
import { styles } from "./styles";

type Props = {
  icon?: React.ReactNode;
  title: string;
  onPress?: TouchableOpacity["props"]["onPress"];
};

function ContactListItem({ icon, title, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.listItem}>
        <Slot child={icon} />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <ChevronRight />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default ContactListItem;
