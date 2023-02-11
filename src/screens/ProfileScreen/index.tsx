import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "src/components/Button";
import { ProfileForm, ProfileHeader } from "src/features/settings";
import useScrollEnabled from "src/hooks/useScrollEnabled";

type Props = {};

function ProfileScreen({}: Props) {
  const { scrollEnabled, onLayout } = useScrollEnabled();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "android" ? "height" : "padding"}
      >
        <ScrollView scrollEnabled={scrollEnabled}>
          <View onLayout={onLayout}>
            <ProfileHeader />
            <ProfileForm />
          </View>
        </ScrollView>
        <Button title="Edit Profile" style={styles.button} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: { marginHorizontal: 24, marginVertical: 8 },
});

export default ProfileScreen;
