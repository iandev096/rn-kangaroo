import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  NotificationDetailBottomSheet,
  NotificationsHeader,
  NotificationsSectionList,
} from "src/features/notification";

type Props = {};

function NotificationsScreen({}: Props) {
  const [showDetailBottomSheet, setShowDetailBottomSheet] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <NotificationsHeader />
      <NotificationsSectionList />
      <NotificationDetailBottomSheet
        show={showDetailBottomSheet}
        onClose={() => setShowDetailBottomSheet(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 } });

export default NotificationsScreen;
