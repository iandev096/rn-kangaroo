import React from "react";
import { StyleSheet, View } from "react-native";
import SkeletonBlock from "src/components/SkeletonBlock";
import COLOR from "src/constants/COLOR";

type Props = {};

function LocationListSkeleton({}: Props) {
  return (
    <View style={styles.container}>
      {new Array(8).fill("").map((_, idx) => (
        <View key={idx} style={styles.item}>
          {/* icon */}
          <SkeletonBlock style={styles.thumb} />
          <View style={styles.content}>
            {/* title */}
            <SkeletonBlock style={styles.title} />
            {/* description */}
            <SkeletonBlock style={styles.description} />
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  item: {
    flexDirection: "row",
    marginTop: 16,
  },
  thumb: {
    width: 32,
    height: 32,
  },
  content: {
    marginLeft: 16,
    borderBottomColor: COLOR.GRAY_100,
    borderBottomWidth: 1,
    flex: 1,
    paddingBottom: 16,
  },
  title: {
    height: 20,
    marginBottom: 4,
  },
  description: {
    height: 16,
  },
});

export default LocationListSkeleton;
