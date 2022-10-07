import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import MapView from "src/components/MapView";
import MapBackButton from "../MapBackButton";

type Props = {};

function ChooseVehicleMap({}: Props) {
  return (
    <View style={styles.chooseVehicle}>
      <MapView showCurLoc={false} />
      <MapBackButton />
    </View>
  );
}

const HEIGHT = Dimensions.get("window").height;
const styles = StyleSheet.create({
  chooseVehicle: {
    width: "100%",
    height: HEIGHT * 0.32,
  },
});

export default ChooseVehicleMap;
