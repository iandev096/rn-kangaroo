import React from "react";
import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from "@react-navigation/native";
import Main from "./Main";
import COLOR from "src/constants/COLOR";
import { SafeAreaProvider } from "react-native-safe-area-context";

type Props = {};

const navTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLOR.PRIMARY_A,
    background: COLOR.PRIMARY_B,
  },
};

function MainNav({}: Props) {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navTheme}>
        <Main />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default MainNav;
