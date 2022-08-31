import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import SettingsScreen from "src/screens/SettingsScreen";

const Drawer = createDrawerNavigator();

function AppDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

export default AppDrawer;
