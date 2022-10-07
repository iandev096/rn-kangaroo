import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";
import { isFirstItem } from "src/utils/array";
import { Variant } from "./type";

type Props = {
  variants: Variant[];
  initialSelectedValue?: string;
  onSelect: (selected: Variant) => any;
};

function hashifyVariants(acc: Record<string, Variant>, cur: Variant) {
  acc[cur.value] = cur;
  return acc;
}

function VehicleVariants({ variants, initialSelectedValue, onSelect }: Props) {
  const [selectedVal, setSelectedVal] = useState(initialSelectedValue);
  const variantHash = variants.reduce(hashifyVariants, {});

  useEffect(() => {
    if (!initialSelectedValue) return;
    const selectedVariant = variantHash[initialSelectedValue];
    if (!selectedVariant) return;
    setSelectedVal(selectedVariant.value);
  }, [initialSelectedValue, variantHash]);

  useEffect(() => {
    if (!onSelect || !selectedVal) {
      return;
    }
    onSelect(variantHash[selectedVal]);
  }, [selectedVal]);

  return (
    <Animated.View style={styles.variants} entering={FadeIn} exiting={FadeOut}>
      {variants.map(({ label, value }, idx) => (
        <Pressable
          key={value}
          onPress={() => setSelectedVal(value)}
          style={({ pressed }) => [
            styles.variant,
            { opacity: pressed ? 0.7 : 1 },
            !isFirstItem(idx) && styles.spacing,
            value === selectedVal && styles.bgSelected,
          ]}
        >
          <Text
            style={[styles.text, value === selectedVal && styles.textSelected]}
          >
            {label}
          </Text>
        </Pressable>
      ))}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  variants: {
    flexDirection: "row",
  },
  spacing: {
    marginLeft: 8,
  },
  variant: {
    paddingVertical: 10,
    minWidth: 87,
    alignItems: "center",
    paddingHorizontal: 12,
    borderRadius: 50,
    backgroundColor: COLOR.GRAY_100,
  },
  bgSelected: {
    backgroundColor: COLOR.PRIMARY_A,
  },
  text: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    color: COLOR.PRIMARY_A,
  },
  textSelected: {
    color: COLOR.PRIMARY_B,
  },
});

export default VehicleVariants;
