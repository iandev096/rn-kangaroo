import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SecurityHeader, SecurityList } from "src/features/settings";

type Props = {};

function SecurityScreen({}: Props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SecurityHeader />
      <SecurityList />
    </SafeAreaView>
  );
}

export default SecurityScreen;
