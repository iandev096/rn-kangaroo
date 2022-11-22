import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "src/components/Button";
import { CancelReasonsHeader, CancelReasonsList } from "src/features/vehicle";
import useScrollEnabled from "src/hooks/useScrollEnabled";

type Props = {};

function CancelReasonsScreen({}: Props) {
  const { scrollEnabled, onLayout } = useScrollEnabled();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "height" : "padding"}
        keyboardVerticalOffset={-96}
      >
        <ScrollView scrollEnabled={scrollEnabled}>
          <View onLayout={onLayout}>
            <CancelReasonsHeader
              title="Reason for canceling"
              onClose={() => console.log("onclose")}
            />
            <View style={[styles.cancelReasonList, styles.px]}>
              <CancelReasonsList />
            </View>
            <View style={styles.px}>
              <Button title="Done" />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cancelReasonList: {
    marginTop: 12,
    paddingBottom: 100,
  },
  px: {
    paddingHorizontal: 20,
  },
});

export default CancelReasonsScreen;
