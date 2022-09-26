import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FONT_FAMILY } from "src/constants/FONT";

type Props = {
  left: React.ReactNode;
  title: string;
  onPress?: TouchableOpacity["props"]["onPress"];
};

function DrawerItem({ left, title, onPress }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.container}>
        {left ? <View style={styles.left}>{left}</View> : null}
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  left: {
    marginRight: 20,
  },
  title: {
    fontSize: 16,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    lineHeight: 32,
  },
});

export default DrawerItem;
