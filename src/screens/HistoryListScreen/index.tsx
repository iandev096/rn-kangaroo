import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  HistoryFilterBottomSheet,
  HistoryList,
  HistoryListHeader,
} from "src/features/history";

type Props = {};

function HistoryListScreen({}: Props) {
  const [showFilterBottomSheet, setShowFilterBottomSheet] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <HistoryListHeader
        filterText="All"
        toggleFilter={() => setShowFilterBottomSheet(true)}
      />
      <HistoryList />
      <HistoryFilterBottomSheet
        onApply={() => console.log("pressed onApply")}
        show={showFilterBottomSheet}
        onClose={() => setShowFilterBottomSheet(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default HistoryListScreen;
