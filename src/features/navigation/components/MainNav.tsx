import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./MainStack";

type Props = {};

function MainNav({}: Props) {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

export default MainNav;
