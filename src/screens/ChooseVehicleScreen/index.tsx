import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FakeShadowUp from "src/components/FakeShadowUp";
import { ChooseVehicleMap } from "src/features/location";
import { VehicleTypeBottomFixed } from "src/features/vehicle";

type Props = {};

function ChooseVehicleScreen({}: Props) {
  return (
    <SafeAreaView style={styles.container} edges={["left", "right", "bottom"]}>
      <ChooseVehicleMap />
      <View>
        <FakeShadowUp />
        <VehicleTypeBottomFixed />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default ChooseVehicleScreen;
