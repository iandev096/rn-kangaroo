import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "src/components/Button";
import { DrawerScreenHeader } from "src/features/drawer";
import { DeliverToForm } from "src/features/location";
import { AppDrawerProps } from "src/features/navigation/components/AppDrawer/types";

type Props = {} & AppDrawerProps;

function HomeScreen({}: Props) {
  return (
    <SafeAreaView style={styles.screen}>
      <DrawerScreenHeader
        onMenuPress={() => console.log("pressed handburger")}
      />

      <View>
        <DeliverToForm />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Continue" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "space-between",
  },
  buttonContainer: {
    paddingVertical: 24,
  },
});

export default HomeScreen;
