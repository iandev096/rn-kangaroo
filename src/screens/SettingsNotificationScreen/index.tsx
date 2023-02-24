import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { NotificationHeader, NotificationList } from "src/features/settings";
import useScrollEnabled from "src/hooks/useScrollEnabled";

type Props = {};

function SettingsNotificationScreen({}: Props) {
  const { onLayout, scrollEnabled } = useScrollEnabled();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NotificationHeader />
      <ScrollView scrollEnabled={scrollEnabled}>
        <View style={styles.notificationList} onLayout={onLayout}>
          <NotificationList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ notificationList: { marginTop: 16 } });

export default SettingsNotificationScreen;
