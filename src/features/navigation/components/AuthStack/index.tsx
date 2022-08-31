import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SignInScreen from "src/screens/SignInScreen";
import SignUpScreen from "src/screens/SignUpScreen";

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  );
}

export default AuthStack;
