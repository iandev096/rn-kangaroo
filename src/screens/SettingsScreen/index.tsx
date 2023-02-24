import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  LogoutBottomSheet,
  SettingsHeader,
  SettingsList,
  UserInfo,
} from "src/features/settings";
import useScrollEnabled from "src/hooks/useScrollEnabled";

type Props = {};

function SettingsScreen({}: Props) {
  const [showLogoutDialog, setShowLogoutDialog] = useState(true);
  const { onLayout, scrollEnabled } = useScrollEnabled();

  return (
    <SafeAreaView style={styles.container}>
      <SettingsHeader />
      <ScrollView scrollEnabled={scrollEnabled}>
        <View onLayout={onLayout}>
          <UserInfo />
          <SettingsList />
        </View>
      </ScrollView>
      <LogoutBottomSheet
        show={showLogoutDialog}
        onClose={() => setShowLogoutDialog(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 } });

export default SettingsScreen;
