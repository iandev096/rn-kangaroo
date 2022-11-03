import React, { useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "src/components/Button";
import CarouselControls from "./CarouselControls";
import CarouselIndicators from "./CarouselIndicators";
import VehicleVariants from "./VehicleVariants";
import { VehicleCarouselItem } from "./type";
import CarouselImage from "./CarouselImages";

type Props = {
  DATA: VehicleCarouselItem[];
  initialSelectedIdx: number;
};

function VehicleCarousel({ DATA, initialSelectedIdx = 0 }: Props) {
  const [selectedIdx, setSelectedIdx] = useState(initialSelectedIdx);

  const nextItem = () =>
    setSelectedIdx((val) => {
      if (val >= DATA.length - 1) {
        return 0;
      }
      return val + 1;
    });

  const prevItem = () =>
    setSelectedIdx((val) => {
      if (val <= 0) {
        return DATA.length - 1;
      }
      return val - 1;
    });

  const renderCarouselImage = (item: VehicleCarouselItem, idx: number) => {
    if (idx !== selectedIdx) {
      return null;
    }
    return (
      <View key={idx}>
        <CarouselImage image={item.image} />
      </View>
    );
  };

  const renderCarouselControls = (item: VehicleCarouselItem, idx: number) => {
    if (idx !== selectedIdx) {
      return null;
    }
    return (
      <CarouselControls
        key={item.vehicleType}
        onNext={nextItem}
        onPrev={prevItem}
        vehicleType={item.vehicleType}
        price={item.price}
      />
    );
  };

  const renderVariants = (item: VehicleCarouselItem, idx: number) => {
    if (idx !== selectedIdx) {
      return null;
    }
    return (
      <View key={item.vehicleType} style={{ alignSelf: "center" }}>
        <VehicleVariants
          variants={item.variants}
          onSelect={(selected) => console.log(selected)}
          initialSelectedValue={"1"}
        />
      </View>
    );
  };

  return (
    <View>
      <View style={styles.imageStage}>
        <View style={styles.variants}>{DATA.map(renderVariants)}</View>
        <View style={styles.imageContainer}>
          {DATA.map(renderCarouselImage)}
        </View>
      </View>
      <View style={[styles.padded, styles.carouselControls]}>
        {DATA.map(renderCarouselControls)}
      </View>
      <View style={[styles.padded, styles.indicatorsContainer]}>
        <CarouselIndicators numOfDots={DATA.length} curIdx={selectedIdx} />
      </View>
      <View style={styles.padded}>
        <Button title="Continue" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStage: {
    minHeight: 261,
    position: "relative",
  },
  imageContainer: {
    alignSelf: "center",
    height: 160,
    width: 327,
  },
  variants: {
    alignSelf: "center",
    marginVertical: 16,
    height: 38,
    width: "100%",
  },
  indicatorsContainer: {
    paddingVertical: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  padded: {
    paddingHorizontal: 24,
  },
  carouselControls: {
    height: 72,
  },
});

export default VehicleCarousel;
