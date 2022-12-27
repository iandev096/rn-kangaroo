import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";

type Variant = "normal" | "alternate";
type Props = {
  title: string;
  variant?: Variant;
  right?: React.ReactNode;
  style?: View["props"]["style"];
  textStyle?: Text["props"]["style"];
  onPress: TouchableOpacity["props"]["onPress"];
};

function Pill({
  title,
  variant = "alternate",
  right,
  style,
  textStyle,
  onPress,
}: Props) {
  const styles = getStyles(variant);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
        {right ? <>{right}</> : null}
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
      paddingHorizontal: 12,
      paddingVertical: 10,
      borderRadius: 24,
      flexDirection: "row",
      alignItems: "center",
    },
    text: {
      fontSize: 14,
      fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
      lineHeight: 14,
      color: color[variant],
    },
  });

export default Pill;
