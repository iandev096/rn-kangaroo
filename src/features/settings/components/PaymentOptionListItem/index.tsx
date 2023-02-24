import React, { useEffect } from "react";
import { Text, TouchableOpacity, View, ViewStyle } from "react-native";
import RadioButton from "src/components/RadioButton";
import Slot from "src/components/Slot";
import { styles } from "./styles";

type Props = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  value?: string;
  checked: boolean;
  onPress?: TouchableOpacity["props"]["onPress"];
  onValueChange?: (value: string) => any;
  containerStyle?: ViewStyle;
};

function PaymentOptionListItem({
  icon,
  title,
  value = title,
  desc,
  checked,
  onValueChange,
  containerStyle,
}: Props) {
  useEffect(() => {
    if (checked && onValueChange) {
      onValueChange(value);
    }
  }, [checked]);

  return (
    <TouchableOpacity>
      <View style={[styles.listItem, containerStyle]}>
        <Slot child={icon} style={styles.iconContainer} />
        <View style={styles.info}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.descText}>{desc}</Text>
        </View>
        <RadioButton checked={checked} />
      </View>
    </TouchableOpacity>
  );
}

export default PaymentOptionListItem;
