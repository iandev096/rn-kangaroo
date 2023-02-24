import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AboutHeader, AboutInfo, AboutList } from "src/features/miscellaneous";

type Props = {};

function AboutScreen({}: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <AboutHeader />
      <AboutInfo />
      <AboutList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 } });

export default AboutScreen;
