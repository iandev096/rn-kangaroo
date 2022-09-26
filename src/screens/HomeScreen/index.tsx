import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "src/components/Button";
import { Drawer, DrawerScreenHeader } from "src/features/drawer";
import { DeliverToForm } from "src/features/location";
import { AppStackProps } from "src/features/navigation/components/AppStack/types";

type Props = {} & AppStackProps;

function HomeScreen({ navigation }: Props) {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <SafeAreaView style={styles.screen}>
        <DrawerScreenHeader onMenuPress={() => setShowDrawer(true)} />

        <View>
          <DeliverToForm
            onPressTextField={() => navigation.navigate("EnterLocation")}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Continue" />
        </View>
      </SafeAreaView>
      <Drawer onClose={() => setShowDrawer(false)} show={showDrawer} />
    </>
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
