import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  LocationHeader,
  LocationList,
  usePageRevealValue,
} from "src/features/location";
import { AppStackProps } from "src/features/navigation";

type Props = {} & AppStackProps;

function EnterLocationScreen({ navigation }: Props) {
  const progress = usePageRevealValue();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LocationHeader
        pageRevealValue={progress}
        onPressBack={() => navigation.goBack()}
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "android" ? "height" : "padding"}
        keyboardVerticalOffset={47}
      >
        <LocationList pageRevealValue={progress} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default EnterLocationScreen;
