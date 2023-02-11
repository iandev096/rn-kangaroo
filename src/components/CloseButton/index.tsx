import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";

type Props = {} & PressableProps;

function CloseButton({ onPress, hitSlop = 8 }: Props) {
  return (
    <Pressable onPress={onPress} hitSlop={hitSlop} style={styles.backBtn}>
      <Ionicons name="close" size={23} color={COLOR.PRIMARY_A} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  backBtn: {
    width: 32,
    marginRight: 16,
    alignItems: "center",
    zIndex: 110,
  },
});

export default CloseButton;
