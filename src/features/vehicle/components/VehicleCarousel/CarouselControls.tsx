import React from "react";
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import COLOR from "src/constants/COLOR";
import { FONT_FAMILY } from "src/constants/FONT";
import Animated, { FadeInUp, FadeOutDown } from "react-native-reanimated";

type Props = {
  onPrev?: PressableProps["onPress"];
  onNext?: PressableProps["onPress"];
  vehicleType: string;
  price: number;
};

function CarouselControls({ onPrev, onNext, vehicleType, price }: Props) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPrev}
        style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}
      >
        <View style={styles.nav}>
          <Ionicons name="arrow-back" size={23} />
        </View>
      </Pressable>

      <Animated.View
        entering={FadeInUp.duration(150).delay(150)}
        exiting={FadeOutDown.duration(150)}
      >
        <Text style={styles.vehicleType}>{vehicleType}</Text>
        <Text style={styles.price}>GHS {price}</Text>
      </Animated.View>

      <Pressable
        onPress={onNext}
        style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}
      >
        <View style={styles.nav}>
          <Ionicons name="arrow-forward" size={23} />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nav: {
    height: 48,
    width: 48,
    borderRadius: 1000,
    backgroundColor: COLOR.GRAY_50,
    justifyContent: "center",
    alignItems: "center",
  },
  vehicleType: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    lineHeight: 32,
    textAlign: "center",
  },
  price: {
    fontSize: 24,
    fontFamily: FONT_FAMILY.BR_FIRMA_MEDIUM,
    lineHeight: 32,
    textAlign: "center",
  },
});

export default CarouselControls;
