import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FONT_FAMILY } from "src/constants/FONT";
import COLOR from "src/constants/COLOR";

type Props = {
  title: string;
  left: React.ReactNode;
} & TouchableOpacity["props"];

function InvertedButton({ title, style = {}, left, ...props }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[style, styles.container]}
      {...props}
    >
      <View style={styles.content}>
        {left ? <View style={styles.left}>{left}</View> : null}
        <Text numberOfLines={1} style={styles.text}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.GRAY_50,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 3,
    alignItems: "flex-start",
  },
  text: {
    fontSize: 16,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    lineHeight: 32,
    color: COLOR.PRIMARY_A,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  left: { marginRight: 10 },
});

export default InvertedButton;
