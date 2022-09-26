import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { RecipientForm, RecipientHeader } from "src/features/recipient";
import useScrollEnabled from "src/hooks/useScrollEnabled";

type Props = {};

function RecipientScreen({}: Props) {
  const { scrollEnabled, onLayout } = useScrollEnabled();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "height" : "padding"}
      >
        <ScrollView scrollEnabled={scrollEnabled}>
          <View onLayout={onLayout}>
            <RecipientHeader />
            <View style={styles.recipientForm}>
              <RecipientForm />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  recipientForm: {
    paddingHorizontal: 20,
  },
});

export default RecipientScreen;
