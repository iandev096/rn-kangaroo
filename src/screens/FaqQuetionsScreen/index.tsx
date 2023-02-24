import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FaqHeader, FaqQuestionsList } from "src/features/miscellaneous";

type Props = {};

function FaqQuestionsScreen({}: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <FaqHeader title="Find Help" />
      <FaqQuestionsList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 } });

export default FaqQuestionsScreen;
