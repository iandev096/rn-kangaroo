import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppStackProps } from "src/features/navigation";
import { StyleSheet } from "react-native";
import ConfirmLocationMap from "src/features/location/components/ConfirmLocationMap";
import ConfirmLocationBottomSheet from "src/features/location/components/ConfirmLocationBottomSheet";

type Props = {} & AppStackProps;

function ConfirmLocationScreen({ navigation }: Props) {
  return (
    <>
      <SafeAreaView
        style={styles.container}
        edges={["left", "right", "bottom"]}
      >
        <ConfirmLocationMap />
        <ConfirmLocationBottomSheet />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
});

export default ConfirmLocationScreen;
