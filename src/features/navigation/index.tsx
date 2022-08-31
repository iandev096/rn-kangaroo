import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainNav from "./components/MainNav";

type Props = {};

function Navigation({}: Props) {
  return (
    <SafeAreaProvider>
      <MainNav />
    </SafeAreaProvider>
  );
}

export default Navigation;
