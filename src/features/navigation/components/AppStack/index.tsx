import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import React from "react";
import AboutScreen from "src/screens/AboutScreen";
import CancelReasonsScreen from "src/screens/CancelReasonsScreen";
import ChangePasswordScreen from "src/screens/ChangePasswordScreen";
import ChooseVehicleScreen from "src/screens/ChooseVehicleScreen";
import ConfirmLocationScreen from "src/screens/ConfirmLocationScreen";
import ContactUsScreen from "src/screens/ContactUsScreen";
import EarningsScreen from "src/screens/EarningsScreen";
import EnterLocationScreen from "src/screens/EnterLocationScreen";
import FaqAnswersScreen from "src/screens/FaqAnswersScreen";
import FaqCategoriesScreen from "src/screens/FaqCategoriesScreen";
import FaqQuestionsScreen from "src/screens/FaqQuetionsScreen";
import HistoryDetailScreen from "src/screens/HistoryDetailScreen";
import HistoryListScreen from "src/screens/HistoryListScreen";
import HomeScreen from "src/screens/HomeScreen";
import NotificationsScreen from "src/screens/NotificationsScreen";
import PayoutScreen from "src/screens/PayoutScreen";
import ProfileScreen from "src/screens/ProfileScreen";
import RecipientScreen from "src/screens/RecipientScreen";
import ReportProblemScreen from "src/screens/ReportProblemScreen";
import SearchingVehicleScreen from "src/screens/SearchingVehicleScreen";
import SecurityScreen from "src/screens/SecurityScreen";
import SelectBankScreen from "src/screens/SelectBankScreen";
import SelectNetworkScreen from "src/screens/SelectNetworkScreen";
import SettingsNotificationScreen from "src/screens/SettingsNotificationScreen";
import SettingsScreen from "src/screens/SettingsScreen";
import VehicleEnRouteScreen from "src/screens/VehicleEnRouteScreen";
import VerifyPhoneNumberScreen from "src/screens/VerifyPhoneNumberScreen";
import { AppStackParamList } from "./types";

const Stack = createStackNavigator<AppStackParamList>();

const defaultOptions: StackNavigationOptions = {
  headerShown: false,
};

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ ...defaultOptions }}
        name="AboutScreen"
        component={AboutScreen}
      />
      <Stack.Screen
        options={{ ...defaultOptions }}
        name="ContactUsScreen"
        component={ContactUsScreen}
      />
      <Stack.Screen
        options={{ ...defaultOptions }}
        name="FaqAnswersScreen"
        component={FaqAnswersScreen}
      />
      <Stack.Screen
        options={{ ...defaultOptions }}
        name="FaqQuestionsScreen"
        component={FaqQuestionsScreen}
      />
      <Stack.Screen
        options={{ ...defaultOptions }}
        name="FaqCategoriesScreen"
        component={FaqCategoriesScreen}
      />
      <Stack.Screen
        options={{ ...defaultOptions }}
        name="NotificationsScreen"
        component={NotificationsScreen}
      />
      <Stack.Screen
        options={{ ...defaultOptions }}
        name="SettingsNotificationScreen"
        component={SettingsNotificationScreen}
      />
      <Stack.Screen
        options={{ ...defaultOptions }}
        name="SecurityScreen"
        component={SecurityScreen}
      />
      <Stack.Screen
        options={{ ...defaultOptions, presentation: "modal" }}
        name="SelectBankScreen"
        component={SelectBankScreen}
      />
      <Stack.Screen
        options={{ ...defaultOptions, presentation: "modal" }}
        name="SelectNetworkScreen"
        component={SelectNetworkScreen}
      />
      <Stack.Screen
        options={defaultOptions}
        name="PayoutScreen"
        component={PayoutScreen}
      />
      <Stack.Screen
        options={defaultOptions}
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
      />
      <Stack.Screen
        options={{ ...defaultOptions, presentation: "modal" }}
        name="VerifyPhoneNumberScreen"
        component={VerifyPhoneNumberScreen}
      />
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
