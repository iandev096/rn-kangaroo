import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FaqAnswerDetail, FaqHeader } from "src/features/miscellaneous";

type Props = {};

function FaqAnswersScreen({}: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <FaqHeader title="This is an example question" />
      <FaqAnswerDetail />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 } });

export default FaqAnswersScreen;
