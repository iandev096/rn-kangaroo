import React from "react";
import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from "@react-navigation/native";
import MainStack from "./MainStack";
import THEME from "src/constants/THEME";

type Props = {};

const navTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: THEME.PRIMARY_A,
    background: THEME.PRIMARY_B,
  },
};

function MainNav({}: Props) {
  return (
    <NavigationContainer theme={navTheme}>
      <MainStack />
    </NavigationContainer>
  );
}

export default MainNav;
