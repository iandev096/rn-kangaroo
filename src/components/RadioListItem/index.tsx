import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";
import RadioButton from "../RadioButton";

type Props = {
  label: string;
  value?: string;
  checked: boolean;
  onValueChange?: (value: string) => any;
  onPress?: TouchableOpacity["props"]["onPress"];
};

function RadioListItem({
  label,
  value = label,
  checked,
  onValueChange,
  onPress,
}: Props) {
  useEffect(() => {
    if (checked && onValueChange) {
      onValueChange(value);
    }
  }, [checked]);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <RadioButton checked={checked} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  label: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    color: COLOR.PRIMARY_A,
  },
});

export default RadioListItem;
