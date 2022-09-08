import React from "react";
import {
  Animated,
  GestureResponderEvent,
  Image,
  Pressable,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import COLOR from "src/constants/COLOR";
import TextField from "src/components/TextField";
import IMAGES from "src/constants/IMAGES";
import { styles } from "./styles";
import { AnimatedViewStyle } from "src/types/animated";

type Props = {
  onPressBack?: ((event: GestureResponderEvent) => void) | null;
  pageRevealValue: Animated.Value;
};

function LocationHeader({ onPressBack, pageRevealValue }: Props) {
  const animStyle: AnimatedViewStyle = {
    height: 190,
    transform: [
      {
        translateY: pageRevealValue.interpolate({
          inputRange: [0, 1],
          outputRange: [-300, 0],
        }),
      },
      {
        scale: pageRevealValue.interpolate({
          inputRange: [0, 1],
          outputRange: [1.3, 1],
        }),
      },
    ],
    opacity: pageRevealValue,
  };

  return (
    <Animated.View style={[styles.container, animStyle]}>
      <Image style={styles.bg} source={IMAGES.LOCATION_HEADER_BG} />
      <View style={styles.header}>
        <Pressable onPress={onPressBack} hitSlop={8} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={20} color={COLOR.PRIMARY_A} />
        </Pressable>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Enter Destination</Text>
        </View>
      </View>
      <View style={styles.textFieldGroupContainer}>
        {/* vertical stepper */}
        <View style={styles.verticalStepperContainer}>
          <View style={styles.verticalStepper}>
            <View style={styles.verticalStepperItem}>
              <Ionicons name="square-sharp" size={10} color={COLOR.PRIMARY_A} />
            </View>
            <View style={styles.verticalLine} />
            <View style={styles.verticalStepperItem}>
              <Ionicons name="location-sharp" size={13} color={"#F58F29"} />
            </View>
          </View>
        </View>

        {/* TextFields */}
        <View style={styles.textFieldGroup}>
          <TextField placeholder="Current Location" size="small" disabled />
          <TextField
            containerStyle={styles.textFieldVertical}
            placeholder="Destination"
            size="small"
          />
        </View>
      </View>
    </Animated.View>
  );
}

export default LocationHeader;
