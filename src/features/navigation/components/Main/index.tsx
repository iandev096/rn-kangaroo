import React from "react";
import AppDrawer from "../AppDrawer";
import AuthStack from "../AuthStack";

function Main() {
  return <>{false ? <AuthStack /> : <AppDrawer />}</>;
}

export default Main;
