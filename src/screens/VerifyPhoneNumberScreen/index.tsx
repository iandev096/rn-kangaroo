import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import Button from "src/components/Button";
import { VerifyPhoneHeader, VerifyPhoneOTP } from "src/features/settings";
import useScrollEnabled from "src/hooks/useScrollEnabled";

type Props = {};

function VerifyPhoneNumber({}: Props) {
  const { scrollEnabled, onLayout } = useScrollEnabled();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "android" ? "height" : "padding"}
      >
        <ScrollView scrollEnabled={scrollEnabled}>
          <View onLayout={onLayout}>
            <VerifyPhoneHeader />
            <VerifyPhoneOTP />
          </View>
        </ScrollView>
        <Button title="Verify" style={styles.button} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: { marginHorizontal: 20, marginVertical: 8 },
});

export default VerifyPhoneNumber;
