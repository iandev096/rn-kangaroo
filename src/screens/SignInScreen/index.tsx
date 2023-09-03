import React from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { FONT_FAMILY } from "src/constants/FONT";
import { AuthHeader, SignInForm } from "src/features/authentication";
import { SignInSchemaData } from "src/features/authentication/components/SignInForm/schema";
import useSignIn from "src/features/authentication/mutations/useSignIn";
import { AuthStackProps } from "src/features/navigation";
import useScrollEnabled from "src/hooks/useScrollEnabled";

type Props = {} & AuthStackProps;

function SignInScreen({}: Props) {
  const { scrollEnabled, onLayout } = useScrollEnabled();
  const { mutate, isLoading, isError, isIdle, isSuccess } = useSignIn();
  console.log("\n\n\n\n\n\n\n");
  console.group("REACT-QUERY useSignIn");
  console.log("isLoading", isLoading);
  console.log("isError", isError);
  console.log("isIdle", isIdle);
  console.log("isSuccess", isSuccess);
  console.groupEnd();

  const handleSignIn = ({ phone, password }: SignInSchemaData) => {
    if (!phone || !password) return;
    phone = phone.replace("+", "");
    mutate({ password, phone });
  };

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["left", "right", "bottom"]}>
      <KeyboardAvoidingView behavior={"height"} style={{ flex: 1 }}>
        <ScrollView scrollEnabled={scrollEnabled}>
          <View onLayout={onLayout}>
            <AuthHeader />
            <View style={styles.form}>
              <SignInForm onSubmit={handleSignIn} isLoading={isLoading} />
            </View>
            <View>
              <Text style={styles.version}>V.1.0</Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      {/* <FullScreenProgressLoader
        loadingText="Signing in..."
        animationType="fade"
        transparent={true}
        visible={true}
        onRequestClose={() => console.log("closing")}
      /> */}
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
    marginTop: 44,
    color: "#6b6b6b",
    paddingBottom: 16,
  },
});

export default SignInScreen;
