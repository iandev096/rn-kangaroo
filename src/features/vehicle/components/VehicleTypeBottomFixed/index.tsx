import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import IMAGES from "src/constants/IMAGES";
import VehicleCarousel from "../VehicleCarousel";
import { VehicleCarouselItem } from "../VehicleCarousel/type";
import BottomFixedHeader from "./BottomFixedHeader";

type Props = {};

const DATA: VehicleCarouselItem[] = [
  {
    image: IMAGES.VEHICLE_BIKE,
    price: 23,
    variants: [],
    vehicleType: "Bicycle",
  },
  {
    image: IMAGES.VEHICLE_MOTORBIKE,
    price: 35,
    variants: [],
    vehicleType: "Motorcycle",
  },
  {
    image: IMAGES.VEHICLE_TRICYCLE,
    price: 27,
    variants: [],
    vehicleType: "Tricycle",
  },
  {
    image: IMAGES.VEHICLE_TAXI,
    price: 32,
    variants: [],
    vehicleType: "Taxi",
  },
  {
    image: IMAGES.VEHICLE_TRUCK_MID_OPEN,
    price: 23,
    variants: [
      { label: "Open", value: "0" },
      { label: "Enclosed", value: "1" },
    ],
    vehicleType: "Truck",
  },
  {
    image: IMAGES.VEHICLE_TRUCK_MINI_ENCLOSED,
    price: 23,
    variants: [
      { label: "Open", value: "0" },
      { label: "Enclosed", value: "1" },
    ],
    vehicleType: "Truck Mini",
  },
];

function VehicleTypeBottomFixed({}: Props) {
  return (
    <View style={styles.bottomSheet}>
      <BottomFixedHeader title={"Choose vehicle type"} />
      <View>
        <VehicleCarousel DATA={DATA} initialSelectedIdx={0} />
      </View>
    </View>
  );
}

const HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  bottomSheet: {
    height: HEIGHT * 0.67,
  },
});

export default VehicleTypeBottomFixed;
