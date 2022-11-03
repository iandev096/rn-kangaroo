import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";

type Props = {
  title: string;
  left?: React.ReactNode | React.ReactNode[];
} & TouchableOpacity["props"];

function RoundedButton({ title, left, style = {}, ...props }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[style, styles.container]}
      {...props}
    >
      <View style={styles.group}>
        {left && <View style={styles.left}>{left}</View>}
        <Text numberOfLines={1} style={styles.text}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.GRAY_100,
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 1000,
    alignItems: "center",
  },
  left: { marginRight: 12 },
  text: {
    fontSize: 16,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    lineHeight: 20,
    color: COLOR.PRIMARY_A,
  },
  group: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default RoundedButton;
