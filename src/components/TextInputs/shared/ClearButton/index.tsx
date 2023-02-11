import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useMemo } from "react";
import { Pressable, StyleSheet } from "react-native";
import COLOR from "src/constants/COLOR";

type Props = { onChangeText?: (text: string) => void; value?: string };

function ClearButton({ onChangeText, value = "" }: Props) {
  const hasTyped = useMemo(() => value && value.length > 0, [value]);

  const clearText = () => {
    if (onChangeText) {
      onChangeText("");
    }
  };

  if (!hasTyped) return null;

  return (
    <Pressable onPress={clearText} style={styles.closeIcon} hitSlop={22}>
      <MaterialCommunityIcons
        name="close-circle"
        size={18.33}
        color={COLOR.PRIMARY_A}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    right: 20,
  },
});

export default ClearButton;
