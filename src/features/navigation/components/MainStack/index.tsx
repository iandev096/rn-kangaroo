import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import React from "react";
import AppDrawer from "../AppDrawer";
import AuthStack from "../AuthStack";

const Stack = createStackNavigator();
const defaultOptions: StackNavigationOptions = { headerShown: false };

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={defaultOptions}
        name="Auth"
        component={AuthStack}
      />
      <Stack.Screen options={defaultOptions} name="App" component={AppDrawer} />
    </Stack.Navigator>
  );
}

export default MainStack;
