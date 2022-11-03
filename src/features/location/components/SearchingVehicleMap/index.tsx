import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import MapView from "src/components/MapView";

type Props = {};

function SearchingVehicleMap({}: Props) {
  return (
    <View style={styles.searchingVehicle}>
      <MapView showCurLoc={false} />
    </View>
  );
}

const HEIGHT = Dimensions.get("window").height;
const styles = StyleSheet.create({
  searchingVehicle: {
    width: "100%",
    height: HEIGHT * 0.7,
  },
});

export default SearchingVehicleMap;
