import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SettingsHeader, SettingsList, UserInfo } from "src/features/settings";

type Props = {};

function SettingsScreen({}: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <SettingsHeader />
      <ScrollView>
        <UserInfo />
        <SettingsList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 } });

export default SettingsScreen;
