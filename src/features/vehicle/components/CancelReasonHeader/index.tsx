import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";

type Props = { onClose?: PressableProps["onPress"]; title: string };

function CancelReasonsHeader({ onClose, title }: Props) {
  return (
    <View style={styles.header}>
      <Pressable onPress={onClose} hitSlop={8} style={styles.closeBtn}>
        <Ionicons name="close" size={24} color={COLOR.PRIMARY_A} />
      </Pressable>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  closeBtn: {
    height: 32,
    justifyContent: "center",
    zIndex: 110,
  },
  header: {
    paddingHorizontal: 20,
    marginTop: 16,
  },
  titleContainer: {
    marginTop: 16,
  },
  title: {
    fontSize: 32,
    lineHeight: 32,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    color: COLOR.PRIMARY_A,
  },
});

export default CancelReasonsHeader;
