import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import React from "react";
import ChooseVehicleScreen from "src/screens/ChooseVehicleScreen";
import ConfirmLocationScreen from "src/screens/ConfirmLocationScreen";
import EnterLocationScreen from "src/screens/EnterLocationScreen";
import HomeScreen from "src/screens/HomeScreen";
import RecipientScreen from "src/screens/RecipientScreen";
import { AppStackParamList } from "./types";

const Stack = createStackNavigator<AppStackParamList>();

const defaultOptions: StackNavigationOptions = {
  headerShown: false,
};

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={defaultOptions}
        name="ChooseVehicle"
        component={ChooseVehicleScreen}
      />
      <Stack.Screen
        options={defaultOptions}
        name="Recipient"
        component={RecipientScreen}
      />
      <Stack.Screen
        options={defaultOptions}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={defaultOptions}
        name="ConfirmLocation"
        component={ConfirmLocationScreen}
      />
      <Stack.Screen
        options={{
          ...defaultOptions,
          presentation: "transparentModal",
        }}
        name="EnterLocation"
        component={EnterLocationScreen}
      />
    </Stack.Navigator>
  );
}

export default AppStack;
