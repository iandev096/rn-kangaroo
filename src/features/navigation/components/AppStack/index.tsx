import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import React from "react";
import CancelReasonsScreen from "src/screens/CancelReasonsScreen";
import ChooseVehicleScreen from "src/screens/ChooseVehicleScreen";
import ConfirmLocationScreen from "src/screens/ConfirmLocationScreen";
import EarningsScreen from "src/screens/EarningsScreen";
import EnterLocationScreen from "src/screens/EnterLocationScreen";
import HistoryDetailScreen from "src/screens/HistoryDetailScreen";
import HistoryListScreen from "src/screens/HistoryListScreen";
import HomeScreen from "src/screens/HomeScreen";
import ProfileScreen from "src/screens/ProfileScreen";
import RecipientScreen from "src/screens/RecipientScreen";
import ReportProblemScreen from "src/screens/ReportProblemScreen";
import SearchingVehicleScreen from "src/screens/SearchingVehicleScreen";
import SettingsScreen from "src/screens/SettingsScreen";
import VehicleEnRouteScreen from "src/screens/VehicleEnRouteScreen";
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
        name="ProfileScreen"
        component={ProfileScreen}
      />
      <Stack.Screen
        options={defaultOptions}
        name="SettingsScreen"
        component={SettingsScreen}
      />
      <Stack.Screen
        options={defaultOptions}
        name="EarningsScreen"
        component={EarningsScreen}
      />
      <Stack.Screen
        options={defaultOptions}
        name="ReportProblemScreen"
        component={ReportProblemScreen}
      />
      <Stack.Screen
        options={defaultOptions}
        name="HistoryDetailScreen"
        component={HistoryDetailScreen}
      />
      <Stack.Screen
        options={defaultOptions}
        name="HistoryListScreen"
        component={HistoryListScreen}
      />
      <Stack.Screen
        options={defaultOptions}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={defaultOptions}
        name="CancelReasonsScreen"
        component={CancelReasonsScreen}
      />
      <Stack.Screen
        options={defaultOptions}
        name="VehicleEnRouteScreen"
        component={VehicleEnRouteScreen}
      />
      <Stack.Screen
        options={defaultOptions}
        name="ChooseVehicle"
        component={ChooseVehicleScreen}
      />
      <Stack.Screen
        options={defaultOptions}
        name="SearchingVehicleScreen"
        component={SearchingVehicleScreen}
      />
      <Stack.Screen
        options={defaultOptions}
        name="Recipient"
        component={RecipientScreen}
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
