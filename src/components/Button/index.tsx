import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";

type Variant = "normal" | "alternate";
type Props = {
  title: string;
  variant?: Variant;
} & TouchableOpacity["props"];

function Button({ title, style = {}, variant = "normal", ...props }: Props) {
  const styles = getStyles(variant);

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

const backgroundColor: Record<Variant, string> = {
  alternate: COLOR.GRAY_100,
  normal: COLOR.PRIMARY_A,
};

const color: Record<Variant, string> = {
  normal: COLOR.PRIMARY_B,
  alternate: COLOR.PRIMARY_A,
};

const getStyles = (variant: Variant) =>
  StyleSheet.create({
    container: {
      backgroundColor: backgroundColor[variant],
      paddingHorizontal: 20,
      paddingVertical: 16,
      borderRadius: 3,
      alignItems: "center",
    },
    text: {
      fontSize: 18,
      fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
      lineHeight: 24,
      color: color[variant],
    },
  });

export default Button;
