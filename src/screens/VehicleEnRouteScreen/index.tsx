import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { VehicleEnRouteMap } from "src/features/location";
import {
  CancelRequestBottomSheet,
  VehicleEnRouteBottomSheet,
} from "src/features/vehicle";

type Props = {};

function VehicleEnRouteScreen({}: Props) {
  const [showCancelRequestBottomSheet, setShowCancelRequestBottomSheet] =
    useState(false);

  return (
    <SafeAreaView style={styles.container} edges={["left", "right", "bottom"]}>
      <VehicleEnRouteMap />
      <VehicleEnRouteBottomSheet />
      <CancelRequestBottomSheet
        show={showCancelRequestBottomSheet}
        onClose={() => setShowCancelRequestBottomSheet(false)}
        onCancel={() => console.log("cancelled")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default VehicleEnRouteScreen;
