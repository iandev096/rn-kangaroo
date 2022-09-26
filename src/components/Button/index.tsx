import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FONT_FAMILY } from "src/constants/FONT";
import COLOR from "src/constants/COLOR";

type Props = { title: string } & TouchableOpacity["props"];

function Button({ title, style = {}, ...props }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[style, styles.container]}
      {...props}
    >
      <View>
        <Text numberOfLines={1} style={styles.text}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.PRIMARY_A,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 3,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    lineHeight: 24,
    color: COLOR.PRIMARY_B,
  },
});

export default Button;
