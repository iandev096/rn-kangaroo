import React from "react";
import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from "@react-navigation/native";
import MainStack from "./MainStack";
import COLOR from "src/constants/COLOR";

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
    <NavigationContainer theme={navTheme}>
      <MainStack />
    </NavigationContainer>
  );
}

export default MainNav;
