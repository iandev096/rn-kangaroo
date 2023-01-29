import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  HistoryDetail,
  HistoryDetailHeader,
  HistoryDriverProfileBottomSheet,
  HistoryRecipientContactBottomSheet,
} from "src/features/history";

type Props = {};

function HistoryDetailScreen({}: Props) {
  const [showDriverProfile, setShowDriverProfile] = useState(false);
  const [showRecipientContact, setShowRecipientContact] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <HistoryDetailHeader title="Tricycle Delivery" />
      <HistoryDetail
        onReportProblem={() => console.log("report problem")}
        onViewRecipientDetail={() => setShowRecipientContact(true)}
        onViewRiderDetail={() => setShowDriverProfile(true)}
      />
      <HistoryDriverProfileBottomSheet
        show={showDriverProfile}
        onClose={() => setShowDriverProfile(false)}
      />
      <HistoryRecipientContactBottomSheet
        show={showRecipientContact}
        onClose={() => setShowRecipientContact(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 } });

export default HistoryDetailScreen;
