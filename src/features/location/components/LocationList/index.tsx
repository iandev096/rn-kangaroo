import React from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import BottomAction from "src/components/BottomAction";
import SkeletonBlock from "src/components/SkeletonBlock";
import COLOR from "src/constants/COLOR";
import { AnimatedViewStyle } from "src/types/animated";
import LocationListSkeleton from "./LocationListSkeleton";

type Props = {
  pageRevealValue: Animated.Value;
};

function LocationList({ pageRevealValue }: Props) {
  const animStyle: AnimatedViewStyle = {
    transform: [
      {
        translateY: pageRevealValue.interpolate({
          inputRange: [0, 1],
          outputRange: [400, 0],
        }),
      },
      {
        scale: pageRevealValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0.6, 1],
        }),
      },
    ],
    opacity: pageRevealValue,
  };

  return (
    <Animated.View style={[styles.cardContainer, animStyle]}>
      {/* replace with flatList */}
      <View>
        <Text>LocationList</Text>
        <LocationListSkeleton />
      </View>
      <BottomAction />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: -60,
    backgroundColor: COLOR.PRIMARY_B,
    flexGrow: 1,
  },
});

export default LocationList;
