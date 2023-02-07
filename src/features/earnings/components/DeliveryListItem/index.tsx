import React from "react";
import { Text, View } from "react-native";
import Slot from "src/components/Slot";
import { styles } from "./styles";

type Props = {
  icon: React.ReactNode;
  title: string;
  time: string;
  amount: string;
};

function DeliveryListItem({ icon, title, time, amount }: Props) {
  return (
    <View style={styles.listItem}>
      <Slot style={styles.iconContainer} child={icon} />
      <View style={styles.center}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      <Text style={styles.title}>{amount}</Text>
    </View>
  );
}

export default DeliveryListItem;
