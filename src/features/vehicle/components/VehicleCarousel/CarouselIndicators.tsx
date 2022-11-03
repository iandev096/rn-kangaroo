import React from "react";
import { StyleSheet, View } from "react-native";
import COLOR from "src/constants/COLOR";
import { isLastItem } from "src/utils/array";

type Props = {
  numOfDots: number;
  curIdx?: number;
};

function CarouselIndicators({ numOfDots, curIdx }: Props) {
  return (
    <View style={styles.container}>
      {[...new Array(numOfDots)].map((_, idx, arr) => (
        <View
          key={idx}
          style={[
            styles.dot,
            idx === curIdx && styles.selected,
            !isLastItem(idx, arr) && styles.spacing,
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  dot: {
    width: 8,
    height: 8,
    opacity: 0.24,
    backgroundColor: COLOR.PRIMARY_A,
    borderRadius: 100,
  },
  selected: {
    opacity: 1,
  },
  spacing: {
    marginRight: 8,
  },
});

export default CarouselIndicators;
