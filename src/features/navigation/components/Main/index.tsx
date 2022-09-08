import React from "react";
import AppStack from "../AppStack";
import AuthStack from "../AuthStack";

function Main() {
  return <>{false ? <AuthStack /> : <AppStack />}</>;
}

export default Main;
