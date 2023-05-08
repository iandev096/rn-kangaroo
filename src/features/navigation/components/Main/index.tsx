import React from "react";
import AppStack from "../AppStack";
import AuthStack from "../AuthStack";

function Main() {
  return <>{true ? <AuthStack /> : <AppStack />}</>;
}

export default Main;
