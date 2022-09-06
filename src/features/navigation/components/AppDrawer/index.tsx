import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from "@react-navigation/drawer";
import React from "react";
import HomeScreen from "src/screens/HomeScreen";
import { AppDrawerParamList } from "./types";

const Drawer = createDrawerNavigator<AppDrawerParamList>();

const defaultOptions: DrawerNavigationOptions = { headerShown: false };

function AppDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        options={defaultOptions}
        name="Home"
        component={HomeScreen}
      />
    </Drawer.Navigator>
  );
}

export default AppDrawer;
