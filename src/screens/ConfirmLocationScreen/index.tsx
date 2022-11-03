import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    ConfirmLocationBottomFixed,
    ConfirmLocationMap
} from "src/features/location";
import { AppStackProps } from "src/features/navigation";

type Props = {} & AppStackProps;

function ConfirmLocationScreen({ navigation }: Props) {
  return (
    <>
      <SafeAreaView
        style={styles.container}
        edges={["left", "right", "bottom"]}
      >
        <ConfirmLocationMap />
        <ConfirmLocationBottomFixed />
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
