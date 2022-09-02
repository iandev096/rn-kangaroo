import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { FONT_FAMILY } from "src/constants/FONT";
import { AuthHeader, SignInForm } from "src/features/authentication";
import useScrollEnabled from "src/hooks/useScrollEnabled";

type Props = {};

function SignInScreen({}: Props) {
  const { scrollEnabled, onLayout } = useScrollEnabled();

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["left", "right", "bottom"]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView scrollEnabled={scrollEnabled}>
          <View onLayout={onLayout}>
            <AuthHeader />
            <View style={styles.form}>
              <SignInForm />
            </View>
            <View>
              <Text style={styles.version}>V.1.0</Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 48,
    paddingHorizontal: 16,
  },
  version: {
    fontFamily: FONT_FAMILY.BR_FIRMA_REGULAR,
    lineHeight: 24,
    fontSize: 12,
    textAlign: "center",
    marginTop: 58,
    color: "#6b6b6b",
  },
});

export default SignInScreen;
