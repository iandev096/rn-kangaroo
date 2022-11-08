import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FakeShadowUp from "src/components/FakeShadowUp";
import { SearchingVehicleMap } from "src/features/location";
import {
  CancelRequestBottomSheet,
  SearchingVehicleBottomFixed
} from "src/features/vehicle";

type Props = {};

function SearchingVehicleScreen({}: Props) {
  const [showCancelRequestBottomSheet, setShowCancelRequestBottomSheet] =
    useState(false);

  return (
    <SafeAreaView style={styles.container} edges={["left", "right", "bottom"]}>
      <SearchingVehicleMap />
      <View>
        <FakeShadowUp />
        <SearchingVehicleBottomFixed
          onCancelRequest={() => setShowCancelRequestBottomSheet(true)}
          onVehicleFound={(data) => setShowCancelRequestBottomSheet(false)}
          onVehicleNotFound={() => setShowCancelRequestBottomSheet(false)}
        />
      </View>
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

export default SearchingVehicleScreen;
