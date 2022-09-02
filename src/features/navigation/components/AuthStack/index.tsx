import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import React from "react";
import SignInScreen from "src/screens/SignInScreen";
import SignUpScreen from "src/screens/SignUpScreen";

const Stack = createStackNavigator();
const defaultOptions: StackNavigationOptions = { headerShown: false };

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={defaultOptions}
        name="SignIn"
        component={SignInScreen}
      />
      <Stack.Screen
        options={defaultOptions}
        name="SignUp"
        component={SignUpScreen}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
