import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DeliveriesSectionList, EarningsHeader } from "src/features/earnings";

type Props = {};

function EarningsScreen({}: Props) {
  return (
    <SafeAreaView>
      <EarningsHeader title="Earnings" />
      <DeliveriesSectionList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 } });

export default EarningsScreen;
