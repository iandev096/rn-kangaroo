import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FaqCategoriesList, FaqHeader } from "src/features/miscellaneous";

type Props = {};

function FaqCategoriesScreen({}: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <FaqHeader title="Find Help" />
      <FaqCategoriesList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 } });

export default FaqCategoriesScreen;
